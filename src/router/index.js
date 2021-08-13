import Vue from 'vue'
import Router from 'vue-router'
import content from '@/components/content.vue'

import '../assets/css/border.css'
import '../assets/css/reset.css'

import '../assets/icomoon/style.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/content',
      name: 'content',
      component: content
    }
  ]
})
