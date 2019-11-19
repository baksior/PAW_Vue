import Vue from 'vue'
import App from './App'
import router from './router'
import store from '/.store'

Vue.config.productionTip = false
Vue.component('Navigation')

/* eslint-disable no-new */
export const bus = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
