<template>
  <div class="searchPage">
      <searchArea/>
      <selector :spuInfo="spus.spuInfo" />
      <spu-list :spuList="spus.spuList"></spu-list>
  </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import selector from "@/views/search/selector"
import spuList from "@/views/search/spuList.vue"

import { getSpuList } from '@/api'

export default {
    name: 'search',
    components: {topNav, searchArea, selector, spuList},
    data() {
        return {
            spus: {
                spuInfo: {},
                spuList: {}
            }
        }
    },
    methods: {
        //获取商品列表
        async getSpuList() {
            this.spus = await getSpuList();
        }
    },
    mounted() {
        this.getSpuList();
    }
}
</script>

<style lang="less">
    .searchPage{
        width: 100%;
        min-width: 1000px;
        background-color: white;
    }
</style>