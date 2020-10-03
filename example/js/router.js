import Vue from 'vue'
import Router from 'vue-router'
import Readme from './Readme'
import VueReadme from './Vue'
import Jquery from './Jquery'
import Vanilla_ES6 from './Vanilla_ES6'
import Samples from './Samples'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Readme
    },
    {
      path: '/docs/VUE.md',
      name: 'jquery',
      component: VueReadme
    },
    {
      path: '/docs/JQUERY.md',
      name: 'vue',
      component: Jquery
    },
    {
      path: '/docs/VANILLA_ES6.md',
      name: 'vue',
      component: Vanilla_ES6
    },
    {
      path: '/samples',
      name: 'samples',
      component: Samples
    },
    {
      path: '/samples/:name',
      name: 'sampleItem',
      component: Samples
    },
    {
      path: '/samples/:name/preview',
      name: 'samplePreview',
      component: Samples
    }
  ]
})