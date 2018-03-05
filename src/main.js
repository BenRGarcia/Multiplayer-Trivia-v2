// Vue
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'

// Bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Custom CSS
import './assets/css/style.css'

// Bootstrap enable tooltips/popovers
$(function () {
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
