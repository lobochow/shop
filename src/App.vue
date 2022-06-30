<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('userStore/acReqUserInfo');
  }
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
    min-height: 100vh;
}

div,span{
    user-select: none;
}
</style>