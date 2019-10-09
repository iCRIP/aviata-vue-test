<template>
  <div id="app" class="container">
    <div class="row">
      <aside class="sidebar">
        <FilterCheckboxes
          v-for="(filter, index) in filters"
          :key="'filter-' + index"
          :filter="filter"
          v-model="selectedFilters[filter.name]"
        />
      </aside>
      <main class="main">
        <FlightList :flights="flightsFiltered" />
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
      return this.$api.airlines.all()
        .then(({ data }) => {
          this.setFiltersVariants(
            'airlines',
            this.transformAirlines(data.airlines)
          );
          this.flights = data.flights;
          this.filterFlights();
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
