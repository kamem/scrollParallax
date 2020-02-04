import Vue from 'vue'
import router from './router'
import Parallax from '../../vue'
import App from './App'

Vue.use(Parallax)

const app = new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})