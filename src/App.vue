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
        some
      </main>
    </div>
  </div>
</template>

<script>
import FilterCheckboxes from '@/components/filter/FilterCheckboxes';

export default {
  name: 'app',
  components: {
    FilterCheckboxes
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
    }
  },

  methods: {
    setFiltersVariants(name, variants) {
      const existedFilter = this.filters.find(filter => filter.name === name);
      let newVariants = [...variants];

      existedFilter.variants = newVariants;
    },

    tranformAirlines(airlines) {
      const airlinesKeys = Object.keys(airlines);
      const variants = airlinesKeys.map(key => ({ 
        value: key,
        text: airlines[key] 
      }));

      return variants;
    },

    getResults() {
      return this.$api.airlines.all()
        .then(({ data }) => {
          this.setFiltersVariants(
            'airlines',
            this.tranformAirlines(data.airlines)
          );
          this.flights = data.flights;
        })
        .catch(err => new Error(err))
    }
  },

  created() {
    this.getResults()
  }
}
</script>
