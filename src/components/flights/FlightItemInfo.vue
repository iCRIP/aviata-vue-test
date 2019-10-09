<template>
  <div class="flight-info">
    <div class="flight-carrier">
      <div class="flight-carrier-img">
        <img :src="getCarrierImg(itineraries.carrier)" :alt="itineraries.carrier_name">
      </div>
      <div class="flight-carrier-name">
        {{ itineraries.carrier_name }}
      </div>
    </div>
    <div class="flight-time">
      <div class="flight-date">
        <div class="flight-date-day">
          {{ itineraries.dep_date | moment('D MMM dd') }}
        </div>
        <div class="flight-date-time">
          {{ itineraries.dep_date | moment('hh:mm') }}
        </div>
      </div>
      <div class="flight-segment">
        <div class="flight-segment-line">
          <div class="flight-segment-part flight-segment-part--start">
            <div class="flight-segment-code">
              {{ itineraries.segments[0].origin_code }}
            </div>
          </div>
          <div class="flight-segment-part flight-segment-part--center flight-segment-time">
            {{ segmentTime }}
          </div>
          <div class="flight-segment-part flight-segment-part--end">
            <div class="flight-segment-code">
              {{ itineraries.segments[itineraries.segments.length - 1].dest_code }}
            </div>
          </div>
        </div>
        <div v-if="itineraries.stops === 0" class="flight-segment-stops">
          прямой рейс
        </div>
        <div v-if="itineraries.stops === 1" class="flight-segment-stops">
          через {{ itineraries.segments[0].airport_dest }}, 
          {{ calculateDiff(itineraries.segments[1].dep_time_iso, itineraries.segments[0].arr_time_iso) }}
        </div>
        <div v-if="itineraries.stops > 1" class="flight-segment-stops">
          {{itineraries.stops}} пересадки
        </div>
      </div>
      <div class="flight-date">
        <div class="flight-date-day">
          {{ itineraries.arr_date | moment('D MMM dd') }}
          <span
            v-if="additionalDay"
            class="flight-date-add"
          >
            &nbsp;+{{ additionalDay }}
          </span>
        </div>
        <div class="flight-date-time">
          {{ itineraries.arr_date | moment('hh:mm') }}
        </div>
      </div>
    </div>
    <div class="flight-meta">
      <a href="#" class="flight-link">
        Детали перелета
      </a>
      <a href="#" class="flight-link">
        Условия тарифа
      </a>
      <span
        v-if="itineraries.refundable"
        class="flight-refundable"
        >
        возвратный
      </span>
      <span
        v-if="!itineraries.refundable"
        class="flight-refundable flight-refundable--false"
        >
        невозвратный
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      itineraries: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      segmentTime() {
        return this.calculateDiff(this.itineraries.arr_date, this.itineraries.dep_date);
      },
      additionalDay() {
        return this.$moment(this.itineraries.arr_date).dayOfYear() - this.$moment(this.itineraries.dep_date).dayOfYear()
      }
    },
    methods: {
      calculateDiff(arrDate, depDate) {
        const dep = this.$moment(depDate);
        const arr = this.$moment(arrDate);
        const totalHours = arr.diff(dep, 'hours');
        const hours = arr.diff(dep, 'hours') % 24;
        const days = arr.diff(dep, 'days');
        const minutes = arr.diff(dep, 'minutes') % 60;
        let text = '';

        if (days > 0) text += `${days} д `;
        if (totalHours > 0) text += `${hours} ч `;
        text += `${minutes} м`;

        return text;
      },
      getCarrierImg(carrier) {
        return `https://aviata.kz/static/airline-logos/80x80/${carrier}.png`
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  .flight {
    &-info {
      display: flex;
      flex-wrap: wrap;
      padding: 40px 92px 18px 44px;

      @media (max-width: 900px) {
        padding: 20px;
      }
    }

    &-carrier {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      width: 140px;
      padding-right: 10px;

      @media (max-width: 600px) {
        width: 100%;
        margin-bottom: 20px;
        order: 2
      }

      &-img {
        width: 20px;
        margin-right: $paddingMain;

        @media (max-width: 600px) {
          width: 40px;
        }

        img {
          display: block;
          max-width: 100%;
        }
      }

      &-name {
        font-size: $fzTitle;
        font-weight: 600;
        line-height: 1;
      }
    }

    &-meta {
      width: 100%;
    }

    &-link {
      text-decoration: none;
      margin-right: 22px;
      display: inline-block;
      color: $colorLink;
      border-bottom: 1px dashed;
    }

    &-refundable {
      color: $grey;

      &:before {
        content: url('~@/assets/icons/icon-refundeble.svg');
        line-height: $fzTitle;
        vertical-align: middle;
      }

      &--false {
        &:before {
          content: url('~@/assets/icons/icon-non-refundeble.svg');
        }
      }
    }

    &-time {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      flex-wrap: wrap;

      @media (max-width: 600px) {
        order: 3;
        margin-bottom: 10px;
      }

      @media (max-width: 450px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &-date {
      text-align: center;
      flex-shrink: 0;
      position: relative;

      &-time {
        font-size: $fzLarge;
        font-weight: 600;
        line-height: 1;
      }

      &-add {
        color: $colorAccent;
        position: absolute;
        font-size: $fzSmall;
      }
    }

    &-segment {
      padding: 0 30px;
      flex-grow: 1;

      @media (max-width: 450px) {
        padding: 20px 0;
        width: 100%;
      }

      &-part {
        position: relative;
        min-height: 23px;

        &:after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          border: 1px solid $lightGrey;
          position: absolute;
          bottom: -3px;
          background-color: $bgMainCard;
        }

        &--start {
          &:after {
            left: 0;
          }
        }

        &--center {
          &:after {
            left: 50%;
            margin-left: -2px;
          }
        }

        &--end {
          &:after {
            right: 0;
          }
        }
      }

      &-code {
        color: $lightGrey;
        font-size: $fzSmall;
      }

      &-line {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $lightGrey;
      }

      &-stops {
        margin-top: 2px;
        color: $colorAccent;
        text-align: center;
      }
    }

    &-meta {
      margin-top: 46px;

      @media (max-width: 600px) {
        margin-top: 0;
        margin-bottom: 20px;
        order: 1;
      }
    }
  }
</style>