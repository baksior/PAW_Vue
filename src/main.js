import Vue from 'vue'
import App from './App'
import router from './router'
import Navigation from '@/components/Navigation'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://193.107.91.69:8080/' // api/ // http://localhost:8090/
// axios.defaults.headers.post['Content-Type'] = 'text/plain'

/* eslint-disable no-new */
export const bus = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
