import Vue from 'vue'
import Router from 'vue-router'
import LoginRegister from '@/views/LoginRegister'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginRegister',
      component: LoginRegister
    }
  ]
})
