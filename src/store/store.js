import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000/api/'
})

export const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerUser (context, data) {
      http.post('users/signup', data)
        .then(result => {
          console.log(result)
        }).catch(err => {
          console.log(err)
        })
    },
    loginUser (context, data) {
      http.post('users/signin', data)
        .then(result => {
          console.log(result)
          localStorage.setItem('token', result.data.token)
          router.push({name: 'HomePage'})
        }).catch(err => {
          console.log(err)
        })
    }
  }
})
