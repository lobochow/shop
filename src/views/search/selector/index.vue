<template>
    <div class="selectorContainer">
        <!-- <div class="brand">
            <span class="title">品牌：</span>
            <div class="brandImgContainer" ref="brandImgContainer">
                <div class="imgContainer" v-for="(item,index) in spuInfo.brandInfo" :key="index">
                    <img :src="item.brandImg" :alt="item.name" />
                </div>
            </div>
            <div class="more" @click="unflod('brandImgContainer')">
                更多
                <i class="iconfont icon-xiangxia"></i>
            </div>
        </div> -->
        <div class="selectedAttrList" v-show="selectedAttrList.length != 0">
            筛选：
            <span class="selectedAttr" v-for="(attr, index) in selectedAttrList" :key="index">
                {{attr.attrValue}}
                <i class="iconfont icon-shanchuyixuanqunchengyuanchacha" @click="unselectAttr(index, attr)"></i>
            </span>
        </div>

        <normalAttrRow v-show="!attrSelectStatus[index]" v-for="(item, index) in spuInfo" :key="index" :title="item.attrName" :attrList="item.attrValues" @selectAttr="value => selectAttr(index, item.attrName, value)" />

        <!-- <div class="senior">
            <div class="title"><span>高级选项：</span></div>
            <div class="seniorDetail">
                <dropdown v-for="(item,index) in spuInfo.seniorAttrList" :key="index" :title="item.attrName" :valueList="item.attrValues"></dropdown>
            </div>
        </div> -->
    </div>
</template>

<script>
//引入mixin
import { routerJump } from '@/mixin/index.js'

//防抖
import { debounce } from '@/utils'

import dropdown from '@/components/dropdown'

import normalAttrRow from '@/views/search/selector/normalAttrRow'

export default {
    name: "selector",
    mixins: [routerJump],
    props: ['spuInfo'],
    components: { dropdown, normalAttrRow },
    data() {
        return {
            multiSelectStatus: false,
            seniorDetailTimer: -1,
            currentSeniorAttr: 0,
            seniorAttrlist: [],
            selectedAttrList: [
                // {
                //     index: 0,
                //     attrValue: '属性值1'
                // }
            ],
            attrSelectStatus: []
        }
    },
    methods: {
        unflod(targetRef) {
            this.$refs[targetRef].classList.toggle('unflod');
        },
        toggleMultiSelect(targetRef) {
            this.unflod(targetRef);
            this.multiSelectStatus = !this.multiSelectStatus;
        },
        toggleSeniorDetail: debounce(function (refName) {
            this.$refs[refName][0].classList.toggle('unflod');
        }),
        selectAttr(index, name, value){
            let query = {...this.$route.query};
            query[name] = value;

            this.goSearch(query);
            this.$parent.getSpuList();
        },
        unselectAttr(selectedIndex, attr){
            let query = {...this.$route.query};
            console.log(attr.attrName);
            delete query[attr.attrName];

            console.log(query);

            this.goSearch(query);
            this.$parent.getSpuList();
        }
    },
    watch: {
        spuInfo(newValue){
            this.attrSelectStatus = [];
            this.selectedAttrList = [];
            let selectedAttrListFromQuery = this.$route.query;
            delete selectedAttrListFromQuery.keyword;
            newValue.forEach( (attr, index) => {
                if(selectedAttrListFromQuery[attr.attrName]){
                    this.attrSelectStatus.push(true);
                    this.selectedAttrList.push({
                        index,
                        attrName: attr.attrName,
                        attrValue: selectedAttrListFromQuery[attr.attrName]
                    })
                }else{
                    this.attrSelectStatus.push(false);
                }
            })
        }
    },
    mounted() {
        this.seniorAttrlist = document.querySelectorAll('.senior .attrList li');
    }
};
</script>

<style lang="less" scoped>
.selectorContainer {
    width: 1000px;
    margin: 10px auto 0px auto;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    .brand {
        display: flex;

        .title {
            flex-shrink: 0;
            font-size: 12px;
            font-weight: bold;
            width: 100px;
            background-color: #f3f3f3;
            padding: 10px;
        }

        .brandImgContainer {
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            padding: 10px 10px 0px 10px;
            margin-bottom: 10px;
            height: 49px;
            box-sizing: content-box;
            overflow: hidden;

            .imgContainer {
                display: flex;
                justify-content: center;
                align-items: center;

                width: 150px;
                height: 50px;
                margin: -1px 0 0 -1px;

                border: 1px solid #dddddd;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            &.unflod {
                height: auto;
                overflow: auto;
            }
        }

        .more {
            font-size: 12px;
            border: 1px solid #dddddd;
            flex-shrink: 0;
            align-self: flex-start;
            padding: 3px;
            margin: 7px;

            i {
                color: #ddd;
            }
        }
    }

    .selectedAttrList{
        margin: 10px 0px 10px 0px;
        font-size: 10px;

        > .selectedAttr{
            padding: 2px 5px;
            margin-left: 10px;

            border: 1px solid black;

            > i{
                vertical-align: bottom;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .senior {
        display: flex;
        font-size: 12px;
        position: relative;

        .title {
            width: 100px;
            background-color: #f3f3f3;
            padding: 10px;
            span {
                font-weight: bold;
                line-height: 30px;
            }
        }

        .attrList {
            list-style: none;
            display: flex;
            flex-grow: 1;
            align-items: center;
            background-color: white;
            justify-content: space-between;
            padding: 10px;
            li {
                color: #005aa0;
                border: 1px solid #dddddd;
                padding: 5px;
                i {
                    vertical-align: middle;
                    color: #c1c1c1;
                }
            }

            > .serniorAttr.unflod {
                position: relative;
                z-index: 2;

                border: 1px solid rgba(0, 0, 0, 0.4);
                border-bottom: 1px solid #fff;
            }
        }

        .seniorDetail {
            display: flex;
            align-items: center;

            > * {
                margin-left: 10px;
            }
        }
    }
}
[type="checkbox"] {
    margin-top: 1px;
}
.more:hover {
    cursor: pointer;
}
</style>