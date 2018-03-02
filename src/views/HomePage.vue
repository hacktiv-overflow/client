<template lang="html">
  <div class="">
    <Navbar/>
    <div >
      <PostForm/>
    </div>
    <div class="">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import PostForm from '@/components/PostForm'

export default {
  name: 'HomePage',
  components: {
    Navbar, PostForm
  }
}
</script>

<style lang="css">
</style>
