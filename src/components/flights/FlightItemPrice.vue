<template>
  <div class="flight-price">
    <div class="flight-amount">
      {{ price.amount }}
      <span class="flight-amount-currency">
        {{ currency }}
      </span>
    </div>
    <button class="flight-price-btn">
      Выбрать
    </button>
    <div class="flight-price-notice">
      Цена за всех пассажиров
    </div>
    <div class="flight-baggage">
      <span class="flight-baggage-value">
        Нет багажа
      </span>
      <button class="flight-baggage-btn">
        + Добавить багаж
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      price: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      currency() {
        if (this.price.currency === 'KZT') return '₸';
        return '₸'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flight {
    &-price {
      padding: 20px;
      background-color: $bgCardAccent;
      height: 100%;
      text-align: center;

      &-btn {
        border: none;
        background-color: $bgSuccess;
        color: $white;
        font-weight: bold;
        font-size: $fzBig;
        border-radius: 4px;
        width: 100%;
        padding: 9px 12px 10px;
      }

      &-notice {
        color: $grey;
        margin: 8px 0;
      }
    }

    &-amount {
      font-size: $fzLarge;
      line-height: 1;
      margin-bottom: 13px;

      &-currency {
        font-size: 0.75em;
      }
    }

    &-baggage {
      &-btn {
        color: $colorBtn;
        background: #000;
        background-color: $bgBtn;
        border: none;
        border-radius: 2px;
        padding: 3px 8px;
        font-weight: 600;
      }
    }
  }

</style>