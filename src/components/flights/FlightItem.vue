<template>
  <div class="flight">
    <div class="flight-left">
      <FlightItemInfo :itineraries="itineraries" />
    </div>
    <div class="flight-right">
      <FlightItemPrice :price="itineraries.price" />
    </div>
  </div>
</template>

<script>
  import FlightItemInfo from './FlightItemInfo';
  import FlightItemPrice from './FlightItemPrice';

  export default {
    components: {
      FlightItemInfo,
      FlightItemPrice,
    },
    props: {
      flight: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        itineraries: this.flight.itineraries[0][0] || {},
        meta: {
          refundable: this.flight.refundable || true
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flight {
    display: flex;
    flex-wrap: wrap;
    background: $bgMainCard;
    margin-bottom: $paddingMain;
    border-radius: 4px;
    overflow: hidden;
    will-change: max-height, opacity;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

    &-left {
      width: 640px;
    }

    &-right {
      width: 240px;
    } 
  }
</style>