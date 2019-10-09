<template>
  <div class="filter">
    <h3 class="filter-title">
      {{ filter.title }}
    </h3>
    <div
      v-if="clearFiltersShow"
      class="filter-clear tooltip-wrap"
      @click="dropFilters"
      >
      <div class="tooltip">
        Сбросить выбор
      </div>
    </div>
    <div :class="{'filter-variants': true, 'filter-variants--scroll': filter.variants.length > 8 }">
      <div
        v-if="filter.selectAll"
        class="filter-variant"
        >
        <label class="checkbox">
          <input
            class="checkbox-input"
            type="checkbox"
            :checked="selectAll"
            @change.prevent.stop="selectAllHandler"
            >
          <div class="checkbox-input-fake"></div>
          <div class="checkbox-label">
            Все
          </div>
        </label>
      </div>
      <div
        v-for="(variant, index) in filter.variants"
        :key="'filter-variant-' + index"
        class="filter-variant"
        >
        <label class="checkbox">
          <input
            class="checkbox-input"
            type="checkbox"
            v-model="selectedVariants"
            :value="variant.value"
            >
          <div class="checkbox-input-fake"></div>
          <div class="checkbox-label">
            {{ variant.text }}
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Array,
        default: () => []
      },
      filter: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        selectedVariants: this.value,
      }
    },
    computed: {
      clearFiltersShow() {
        return (this.selectedVariants.length > 0)
      },
      selectAll() {
        return (this.selectedVariants.length === 0)
      }
    },
    methods: {
      selectAllHandler(event) {
        if (event.target.checked) this.selectedVariants = [];
        else event.target.checked = true;
      },
      dropFilters() {
        this.selectedVariants = [];
      }
    },
    watch: {
      value(newVal) {
        this.selectedVariants = newVal;
      },
      selectedVariants(newVal) {
        this.$emit('input', newVal);
      }
    }
  }
</script>

<style lang="scss" scoped>
.tooltip {
  position: absolute;
  background-color: $white;
  border: 1px solid $lightGrey;
  border-radius: 6px;
  padding: $paddingMain;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  margin-bottom: 10px;
  pointer-events: none;
  opacity: 0;
  box-shadow: 0 0 5px rgba(0,0,0,0.2);
  transition: opacity 0.2s;

  &:before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    left: 50%;
    bottom: -13px;
    background-color: $white;
    border-bottom: 1px solid $lightGrey;
    border-right: 1px solid $lightGrey;
    transform: rotate(45deg) translateX(-50%);
  }

  &-wrap {
    position: relative;

    &:hover {
      .tooltip {
        opacity: 1;
      }
    }
  }
}
.filter {
  padding: ($paddingMain) 0;
  background-color: $bgAsideCard;
  margin-bottom: $paddingMain;
  border-radius: 4px;
  position: relative;

  &-clear {
    position: absolute;
    top: 12px;
    right: 12px;

    &:before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background-position: center;
      background-image: url('~@/assets/icons/icon-close-filter.svg');
      transition: background-image 0.2s;
      cursor: pointer;

    }
    &:hover {
      &:before {
        background-image: url('~@/assets/icons/icon-close-filter-hover.svg')
      }
    }
  }

  &-title {
    font-size: $fzTitle;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: $paddingMain;
    padding-left: $paddingMain;
    padding-right: $paddingMain;
  }

  &-variant {
    padding: 0 ($paddingMain);
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
      background-color: $bgInputHover;
    }
  }

  &-variants {
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 265px;

    &--scroll {
      margin-right: 4px;
    }

    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $bgScroll;
    }
  }
}

.checkbox {
  display: flex;

  &:hover {
    cursor: pointer;

    .checkbox-input-fake {
      &:before {
        border-right: 2px solid $lightGrey;
        border-bottom: 2px solid $lightGrey;
      }
    }
  }

  &-label {
    padding-top: 8px;
    padding-bottom: 8px;
  }

  &-input {
    height: 0;
    width: 0;
    position: absolute;

    &-fake {
      position: relative;
      flex-shrink: 0;
      width: $paddingMain;
      height: $paddingMain;
      border-radius: 2px;
      border: 1px solid $lightGrey;
      background-color: $white;
      margin-right: $paddingMain;
      margin-top: 10px;
      margin-bottom: 10px;

      &:before {
        content: '';
        position: absolute;
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        width: 4px;
        height: 7px;
        transform: rotate(45deg);
        left: 3px;
        top: 1px;
        transition: border-color 0.2s;
      }
    }

    &:checked + .checkbox-input-fake {
      background: $bgSuccess;
      border: 1px solid $bgSuccess;

      &:before {
        border-right-color: $white;
        border-bottom-color: $white;
      }
    }
  }
}

</style>