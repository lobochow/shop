<template>
    <div class="searchPage">
        <top-nav></top-nav>
        <searchArea />
        <selector :spuInfo="spuInfo" />
        <spu-list :spuList="spuList"></spu-list>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import selector from "@/views/search/selector"
import spuList from "@/views/search/spuList.vue"

import { getSearchInfo } from '@/api'

export default {
    name: 'search',
    components: { topNav, searchArea, selector, spuList },
    data() {
        return {
            /* 
            {
                _id: String,
                attrList: [{attrName: attrValue}],
                longDescription: String,
                price: Number,
                shortDescription: String,
                sku_id: String,
                weight: Number,
                swipers: [{name: String, url: Srting}]
            }
            */
            spuList: undefined
        }
    },
    computed: {
        spuInfo() {
            let result = [];
            /* 
            数组元素为:
            {
                attrName: String,
                attrValues: Array
            }
            */
            this.spuList?.forEach(spu => {
                spu.attrList.forEach(spuAttr => {
                    let isContain = false;
                    result.forEach(selectorAttr => {
                        if (selectorAttr.attrName == spuAttr.attrName) {
                            isContain = true;
                            let isContainValue = false;
                            selectorAttr.attrValues.forEach(value => {
                                if (value == spuAttr.attrValue) {
                                    isContainValue = true;
                                }
                            })

                            if (!isContainValue) {
                                selectorAttr.attrValues.push(spuAttr.attrValue);
                            }
                        }
                    })

                    if (!isContain) {
                        result.push({
                            attrName: spuAttr.attrName,
                            attrValues: [spuAttr.attrValue]
                        })
                    }
                });
            })

            return result;
        }
    },
    methods: {
        //获取商品列表
        async getSpuList() {
            this.spuList = (await getSearchInfo(this.$route.query)).data;
        }
    },
    mounted(){
        this.getSpuList();
    }
}
</script>

<style lang="less">
.searchPage {
    width: 100%;
    min-width: 1000px;
    background-color: white;
}
</style>