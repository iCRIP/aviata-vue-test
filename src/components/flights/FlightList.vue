<template>
  <div class="flights">
    <div
      v-if="!flights.length && !loading"
      class="flights-empty"
      >
      Билетов не найдено
    </div>
    <div
      v-if="loading"
      class="flights-empty"
      >
      Загрузка
    </div>
    <transition-group name="flights-anim" tag="div">
      <FlightItem
        v-for="(flight) in flights"
        :key="flight.id"
        :flight="flight"
        />
    </transition-group>
  </div>
</template>

<script>
  import FlightItem from './FlightItem'
  export default {
    components: {
      FlightItem
    },
    props: {
      flights: {
        type: Array,
        default: () => [],
      },
      loading: {
        type: Boolean,
        default: () => false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flights {
    &-empty {
      text-align: center;
      font-size: $fzTitle;
      height: 0;
    }

    &-anim {
      &-enter,
      &-leave-to {
        opacity: 0;
        overflow: hidden;
        max-height: 0;
        margin-bottom: 0;
        transition-duration: 0.4s;
      }

      &-enter-to,
      &-leave {
        max-height: 200px;
        opacity: 1;
        margin-bottom: $paddingMain;
        transition-duration: 0.4s;
        overflow: hidden;
      }
    }
  }

</style>