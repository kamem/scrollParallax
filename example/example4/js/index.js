import Vue from 'vue'
import Parallax from '../../js/scrollParallax'
import App from './App'

Vue.use(Parallax)

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
