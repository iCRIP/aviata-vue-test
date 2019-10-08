<template>
  <div id="app" class="container">
    <div class="row">
      <aside class="sidebar">
      </aside>
      <main class="main">
        some
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      filters: [
        {
          title: 'Опции тарифа',
          name: 'rate',
          type: 'checkbox',
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
          type: 'checkbox',
          defaultVariant: {
            value: 'all',
            text: 'Все'
          },
          variants: []
        },
      ],
      selectedFilters: {
        rate: [],
        airlines: ['all']
      },
      flights: [],
    }
  },

  methods: {
    setFiltersVariants(name, variants) {
      const existedFilter = this.filters.find(filter => filter.name === name);
      let newVariants = [...variants];
      const defaultVariant = existedFilter.defaultVariant;
      if (defaultVariant) newVariants.unshift(defaultVariant);

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
