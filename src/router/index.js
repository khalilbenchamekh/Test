import Vue from 'vue'
import Router from 'vue-router'
import posts from '@/components/posts'

import categories from '@/components/categories'
import singlepost from '@/components/singlepost'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'posts',
          component: posts
      },{
      path: '/categories/:title',
      name: 'categories',
      component: categories
    },{
      path: '/singlepost/:id',
      name: 'singlepost',
      component: singlepost
    },
  ]
})
