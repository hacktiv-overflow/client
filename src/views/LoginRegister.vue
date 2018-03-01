<template lang="html">
  <div class="container" style="padding-bottom:5%;">
    <div class="container" style="margin-top:8%;">
      <img src="../assets/overflow.jpg" alt="Overflow" style="width:100%;" v-if="isLogin">
      <img src="../assets/overflow.jpg" alt="Overflow" style="width:100%;filter:sepia(40%);" v-if="isRegister">
    </div>
    <div class="card text-white mb-3" v-bind:class="{'bg-success': isRegister, 'bg-primary': isLogin}" style="width:80%;margin:auto;">
    <div class="card-body">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style="" v-model="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style="" v-model="password">
      </div>
    </div>
  </div>
  <div class="container">
    <button type="button" class="btn btn-outline-primary btn-lg btn-block" style="width:300px;margin:auto;" v-if="isLogin" @click="onLogin">Login</button>
    <button type="button" class="btn btn-outline-success btn-block" style="width:300px;margin:auto;margin-top:5%;" v-if="isLogin" @click="switcher">Register</button>
    <button type="button" class="btn btn-outline-success btn-block" style="width:300px;margin:auto;margin-top:5%;" v-if="isRegister" @click="onRegister">Submit</button>
  </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data: function () {
    return {
      isLogin: true,
      isRegister: false,
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'registerUser', 'loginUser'
    ]),
    switcher () {
      this.isLogin = !this.isLogin
      this.isRegister = !this.isRegister
    },
    setNull () {
      this.email = ''
      this.password = ''
    },
    onRegister () {
      let input = {
        email: this.email,
        password: this.password
      }
      this.registerUser(input)
      this.switcher()
      this.setNull()
    },
    onLogin () {
      let input = {
        email: this.email,
        password: this.password
      }
      this.loginUser(input)
      this.setNull()
    }
  }
}
</script>

<style lang="css">
</style>
