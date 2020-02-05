import Vue from 'vue'
import Parallax from '../../../vue'

import App from './App'

Vue.use(Parallax, { direction: 'x'})

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
