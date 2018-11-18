import Vue from 'vue'
import App from './App.vue'

import WjUI from './index.js'
Vue.use(WjUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
