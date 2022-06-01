<template>
    <div class="selectorContainer">
        <div class="brand">
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
        </div>

        <div class="attribute" :ref="`attribute${index}`" v-for="(item, index) in spuInfo.attrList" :key="index">
            <span class="title">{{item.attrName}}：</span>
            <div class="listContainer">
                <ul class="attributeList">
                    <li v-for="(attrVaule, valueIndex) in item.attrValues" :key="valueIndex">
                        <input type="checkbox" v-show="multiSelectStatus">
                        {{attrVaule}}
                    </li>
                </ul>
                <div class="buttons">
                    <button>确定</button>
                    <button @click="toggleMultiSelect(`attribute${index}}`)">取消</button>
                </div>
            </div>
            <div class="more" @click="unflod(`attribute${index}}`)" v-show="!multiSelectStatus">
                更多
                <i class="iconfont icon-xiangxia"></i>
            </div>
            <div class="multiSelect" @click="toggleMultiSelect(`attribute${index}}`)" v-show="!multiSelectStatus">
                多选
                <i class="iconfont icon-xiangxia"></i>
            </div>
        </div>

        <div class="senior">
            <div class="title"><span>高级选项：</span></div>
            <div class="seniorDetail">
                <dropdown v-for="(item,index) in spuInfo.seniorAttrList" :key="index" :title="item.attrName" :valueList="item.attrValues"></dropdown>
            </div>
        </div>
    </div>
</template>

<script>
//引入mixin
import { routerJump } from '@/mixin/index.js'

//防抖
import {debounce} from '@/utils'

import dropdown from '@/components/dropdown'

export default {
    name: "selector",
    mixins: [routerJump],
    props: ['spuInfo'],
    components: {dropdown},
    data() {
        return {
            multiSelectStatus: false,
            seniorDetailTimer: -1,
            currentSeniorAttr: 0,
            seniorAttrlist: []
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
        toggleSeniorDetail: debounce(function(refName){
            this.$refs[refName][0].classList.toggle('unflod');
        })
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

    .attribute {
        display: flex;

        height: 40px;

        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;

        .title {
            font-size: 12px;
            font-weight: bold;
            width: 100px;
            flex-shrink: 0;
            background-color: #f3f3f3;
            padding: 10px;
        }

        .listContainer {
            overflow: hidden;
            .attributeList {
                list-style: none;
                width: 800px;
                background-color: white;
                display: flex;
                flex-wrap: wrap;
                li {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    min-width: 150px;
                    white-space: nowrap;
                    font-size: 12px;
                    color: #005aa0;
                }
            }

            .buttons {
                text-align: center;
                button {
                    margin: 5px;
                    font-size: 12px;
                    text-align: center;
                    width: 40px;
                }
            }
        }

        .more {
            font-size: 12px;
            border: 1px solid #dddddd;
            flex-shrink: 0;
            align-self: flex-start;
            padding: 3px;
            margin: 7px;
            user-select: none;

            i {
                color: #ddd;
            }

            &:hover {
                cursor: pointer;
            }
        }

        .multiSelect {
            font-size: 12px;
            border: 1px solid #dddddd;
            flex-shrink: 0;
            align-self: flex-start;
            padding: 3px;
            margin: 7px;
            user-select: none;

            i {
                color: #ddd;
            }

            &:hover {
                cursor: pointer;
            }
        }

        &.unflod {
            height: auto;
        }
    }

    .senior {
        display: flex;
        font-size: 12px;
        border-bottom: 1px solid #dddddd;
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

            >.serniorAttr.unflod{
                position: relative;
                z-index: 2;

                border: 1px solid rgba(0, 0, 0, 0.4);
                border-bottom: 1px solid #fff;
            }
        }

        .seniorDetail {
            display: flex;
            align-items: center;

            >*{
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