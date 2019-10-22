import Vue from 'vue'
import VueResource from 'vue-resource'
import User from './App'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { User },
  template: '<User/>'
})
