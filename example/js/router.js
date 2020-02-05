import Vue from 'vue'
import Router from 'vue-router'
import Readme from './Readme'
import VueReadme from './Vue'
import Jquery from './Jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Readme
    },
    {
      path: '/docs/VUE.ja.md',
      name: 'jquery',
      component: VueReadme
    },
    {
      path: '/docs/JQUERY.ja.md',
      name: 'vue',
      component: Jquery
    }
  ]
})