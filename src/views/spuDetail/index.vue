<template>
  <div>
      <topNav/>
      <searchArea/>
      <detail/>
  </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import detail from "@/views/spuDetail/detail.vue"

export default {
    name: 'spuDetail',
    components: { topNav, searchArea, detail }
}
</script>

<style lang="less">

</style>