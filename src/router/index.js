import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/common/List'
import Cart from '@/components/common/Cart'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          name: 'List',
          component: List
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        }
      ]
    }
  ]
})
