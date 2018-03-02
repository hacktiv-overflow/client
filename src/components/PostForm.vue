<template lang="html">
  <div class="container" style="margin-top:3%;margin-bottom:3%;width:80%;">
    <button type="button" class="btn btn-outline-secondary btn-lg btn-block" v-if="inPost" @click="switcher"><h4>Cancel</h4></button>
    <button type="button" class="btn btn-outline-primary btn-lg btn-block" v-else @click="switcher"><h4>Post a Question</h4></button>
    <div class="card border-primary mb-3" style="max-width: 20rem;margin-top:3%;" v-if="inPost">
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <div class="container">
      <button type="button" class="btn btn-primary btn-block" v-if="inPost">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
  data: function () {
    return {
      inPost: false
    }
  },
  methods: {
    switcher () {
      this.inPost = !this.inPost
    }
  }
}
</script>

<style lang="css">
</style>
