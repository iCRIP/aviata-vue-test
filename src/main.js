import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import './assets/scss/main.scss' // main shared styles

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
