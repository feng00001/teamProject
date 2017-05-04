import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './components/Home.vue'
import router from './router'
import util from '../../util/common.js'
new Vue({
  store, // inject store to all children
  router,
  el: '#app',
  render: h => h(App)
})


