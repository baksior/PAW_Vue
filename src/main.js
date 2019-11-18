import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from '@/components/Navigation'

Vue.config.productionTip = false
Vue.component('Navigation')

/* eslint-disable no-new */
export const bus = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
