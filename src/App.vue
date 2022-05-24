<template>
  <div id="app">
      <top-nav></top-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import topNav from '@/components/topNav/index.vue'

export default {
  name: 'App',
  components: {topNav}
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>