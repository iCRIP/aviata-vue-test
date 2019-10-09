<template>
  <div id="app" class="container">
    <div class="row">
      <aside :class="{'sidebar': true, 'sidebar-active': showSidebar}">
        <div class="sidebar-toggle">
          <button
            class="sidebar-toggle-btn"
            @click="showSidebar = !showSidebar"
            >
            <span v-if="!showSidebar">
              Показать фильтры
            </span>
            <span v-if="showSidebar">
              Скрыть фильтры
            </span>
          </button>
        </div>
        <FilterCheckboxes
          v-for="(filter, index) in filters"
          :key="'filter-' + index"
          :filter="filter"
          v-model="selectedFilters[filter.name]"
          />
      </aside>
      <main class="main">
        <FlightList :flights="flightsFiltered" :loading="loading" />
      </main>
    </div>
  </div>
</template>

<script>
import FilterCheckboxes from '@/components/filter/FilterCheckboxes';
import FlightList from '@/components/flights/FlightList'

export default {
  name: 'app',
  components: {
    FilterCheckboxes,
    FlightList
  },
  data() {
    return {
      loading: true,
      filters: [
        {
          title: 'Опции тарифа',
          name: 'rate',
          type: 'checkbox',
          selectAll: false,
          variants: [
            {
              value: 1,
              text: 'Только прямые'
            },
            {
              value: 2,
              text: 'Только с багажом'
            },
            {
              value: 3,
              text: 'Только возвратные'
            },
          ]
        },
        {
          title: 'Авиакомпании',
          name: 'airlines',
          selectAll: true,
          type: 'checkbox',
          variants: []
        },
      ],
      selectedFilters: {
        rate: [],
        airlines: []
      },
      flights: [],
      flightsFiltered: [],
      showSidebar: false,
    }
  },

  methods: {
    setFiltersVariants(name, variants) {
      const existedFilter = this.filters.find(filter => filter.name === name);
      let newVariants = [...variants];

      existedFilter.variants = newVariants;
    },

    transformAirlines(airlines) {
      const airlinesKeys = Object.keys(airlines);
      const variants = airlinesKeys.map(key => ({ 
        value: key,
        text: airlines[key] 
      }));

      return variants;
    },

    filterByRate(flights) {
      if (!this.selectedFilters.rate.length) return flights;
 
      let filtered = [];

      this.selectedFilters.rate.forEach(rate => {
        const toFilter = filtered.length ? filtered : flights;

        if (rate === 1) { // только прямые
          filtered = toFilter.filter(flight => {
            return flight.itineraries[0][0].stops === 0;
          })
        }

        if (rate === 2) { // только с багажем
          filtered = toFilter.filter(flight => {
            return flight.itineraries[0][0].segments.some(segment => segment.baggage_options[0].value > 0);
          })
        }

        if (rate === 3) { // только возвратные
          filtered = toFilter.filter(flight => {
            return flight.refundable
          })
        }
      });

      return filtered;
    },

    filterByCarrier(flights) {
      if (!this.selectedFilters.airlines.length) return flights;

      return flights.filter(flight => {
        return this.selectedFilters.airlines.some(airline => airline === flight.itineraries[0][0].carrier) 
      })
    },

    filterFlights() {
      let filtered = this.filterByRate(this.flights);
      filtered = this.filterByCarrier(filtered);
      this.flightsFiltered = JSON.parse(JSON.stringify(filtered));
    },

    getResults() {
      this.loading = true;
      return this.$api.airlines.all()
        .then(({ data }) => {
          this.setFiltersVariants(
            'airlines',
            this.transformAirlines(data.airlines)
          );
          this.flights = data.flights;
          this.filterFlights();
          this.loading = false;
        })
        .catch(err => new Error(err))
    }
  },

  watch: {
    selectedFilters: {
      handler: function() {
        this.filterFlights();
      },
      deep: true,
    }
  },

  created() {
    this.getResults()
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    @media (max-width: 1180px) {
      position: fixed;
      z-index: 10;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 40px 10px 10px;
      margin-right: 0;
      width: 260px;
      background: $bgCardAccent;
      transform: translateX(100%);
      transition: transform 0.4s;
      will-change: transform;

      &-active {
        transform: translateX(0);

        .sidebar-toggle {
          transform: translateX(0);
        }
      }
    }

    &-toggle {
      display: none;
      position: absolute;
      left: 20px;
      top: 10px;
      align-items: center;
      justify-content: center;
      transform: translateX(-180px);
      transition: transform 0.4s;

      button {
        width: 140px;
        border: none;
        height: 30px;
        border-radius: 50px;
        color: $white;
        background-color: rgba(0, 0, 0, 0.5);
      }

      @media (max-width: 1180px) {
        display: flex;
      }
    }
  }
</style>