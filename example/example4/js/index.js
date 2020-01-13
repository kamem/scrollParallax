import Vue from 'vue'
import Parallax, { test} from './scrollParallax'
import App from './App'

Vue.use(Parallax)

const app = new Vue({
  el: '#app',
  render: (h) => h(App)
})
