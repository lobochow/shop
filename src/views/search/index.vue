<template>
  <div class="searchPage">
      <searchArea/>
      <selector/>
      <spu-list></spu-list>
  </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import selector from "@/views/search/selector"
import spuList from "@/views/search/spuList.vue"

export default {
    name: 'search',
    components: {topNav, searchArea, selector, spuList}
}
</script>

<style lang="less">
    .searchPage{
        width: 100%;
        min-width: 1000px;
        background-color: white;
    }
</style>