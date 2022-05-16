<template>
  <div class="searchPage">
      <topNav/>
      <searchArea/>
      <selector/>
  </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import selector from "@/views/search/selector"

export default {
    name: 'search',
    components: {topNav, searchArea, selector}
}
</script>

<style lang="less">
    .searchPage{
        width: 100%;
        min-width: 1000px;
        background-color: white;
    }
</style>