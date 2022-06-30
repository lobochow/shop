<template>
    <div class="searchPage">
        <top-nav></top-nav>
        <searchArea @getSearchInfo="getSpuList" />
        <selector :spuInfo="spuInfo" />
        <spu-list :spuList="spuList"></spu-list>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
                       :page-sizes="[5, 10, 15]" :page-size="pageSize" layout="prev, pager, next, jumper, sizes, total"
                       :total="total">
        </el-pagination>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import selector from "@/views/search/selector"
import spuList from "@/views/search/spuList.vue"

import { getSearchInfo, getUserInfo } from '@/api'

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
            spuList: undefined, 
            currentPage: 1,
            pageSize: 5,
            total:0
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
    watch:{
        '$route.query' : function(){
            this.getSpuList();
        }
    },
    methods: {
        //获取商品列表
        async getSpuList() {
            let result = (await getSearchInfo({...this.$route.query, currentPage: this.currentPage, pageSize: this.pageSize}));
            this.spuList = result.data.spuList;
            this.total = result.data.count[0]?.count ?? 0;
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.getSpuList();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getSpuList();
        }
    },
    mounted() {
        this.getSpuList();
    }
}
</script>

<style lang="less">
.searchPage {
    min-height: 100vh;
    width: 100%;
    min-width: 1000px;
    background-color: white;
}

.el-pagination {
    text-align: center;
    margin-top: 20px;
}
</style>