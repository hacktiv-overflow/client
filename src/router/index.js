import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/views/LoginRegister'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
