<template>
  <div class="flights">
    <div
      v-if="flights.lenght === 0 && !loading"
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
    <transition-group type="transition" name="flights-anim">
      <FlightItem
        v-for="(flight, index) in flights"
        :key="'flight-' + index"
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
  .fligths {
    &-empty {
      text-align: center;
      padding: $paddingMain;
      font-size: $fzTitle;
    }

    &-anim {
      &-enter,
      &-leave-to {
        transform: translateX(100%);
        opacity: 0;
        overflow: hidden;
        max-height: 0;
        margin-bottom: 0 !important;
        transition-duration: 0.4s;
      }

      &-enter-to,
      &-leave {
        max-height: 200px;
        opacity: 1;
        margin-bottom: 2em !important;
        transition-duration: 0.4s;
        overflow: hidden;
      }
    }
  }

</style>