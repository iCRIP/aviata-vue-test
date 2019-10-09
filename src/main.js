import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import './assets/scss/main.scss' // main shared styles

const moment = require('moment')
require('moment/locale/ru')

Vue.config.productionTip = false;
Vue.use(require('vue-moment'), {
    moment
})

new Vue({
  render: h => h(App),
}).$mount('#app')
