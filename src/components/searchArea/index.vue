<template>
    <div class="searchArea">
        <div class="container">
            <!-- 大logo -->
            <div class="logo" @click="goHome">
                <img src="@/assets/images/logo.png" alt="logo">
            </div>

            <div class="search">
                <div class="searchBar">
                    <i class="graph iconfont icon-zhaoxiangji"></i>
                    <input type="text" placeholder="搜索" v-model="keyword" @keydown.enter="goSearch({keyword})">
                    <span>
                        <i class="iconfont icon-Fangdajing" @click="goSearch({keyword})"></i>
                    </span>
                </div>
                <div class="cart" @click="goCart">
                    <span class="cartNum" v-if="cartList.length !== 0" >{{cartList.length}}</span>
                    <i class="iconfont icon-gouwuchekong"></i>
                    我的购物车
                </div>
                <!-- <ul class="hotSearch">
                    <li>车品特惠</li>
                    <li>京东京造</li>
                    <li>智能手表</li>
                    <li>大药房</li>
                    <li>牛奶秒杀</li>
                    <li>限量5折</li>
                </ul>
                <ul class="searchMore">
                    <li>秒杀</li>
                    <li>优惠券</li>
                    <li>PLUS会员</li>
                    <li>品牌闪购</li>
                    <li>拍卖</li>
                    <li>京东家电</li>
                    <li>京东超市</li>
                    <li>京东生鲜</li>
                    <li>京东国际</li>
                    <li>京东云</li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<script>
//引入mixin
import { routerJump } from '@/mixin/index.js'

import {mapState} from 'vuex'

export default {
    name: 'searchArea',
    mixins: [routerJump],
    data() {
        return {
            keyword: '',
            cartInfo: {}
        }
    },
    computed: {
        ...mapState('userStore', ['cartList'])
    },
    mounted() {
        this.keyword = this.$route.query?.keyword;
    },
}
</script>

<style lang='less'>
.searchArea {
    width: 100%;
    min-width: 1000px;
    background-color: white;
    .container {
        display: flex;
        height: 150px;
        width: 1000px;
        margin: 0 auto;
        .logo {
            width: 200px;
            height: 100%;
            > img {
                width: 100px;
                transform: translateX(50px) translateY(30px);
            }
        }

        .search {
            display: flex;
            align-items: center;

            .searchBar {
                position: relative;
                display: inline-block;
                margin-top: 30px;
                .graph {
                    position: absolute;
                    left: 390px;
                    top: 8px;
                    font-size: 25px;
                }
                .graph:hover {
                    color: #e1251b;
                    cursor: pointer;
                }
                > input {
                    box-sizing: border-box;
                    width: 430px;
                    height: 40px;
                    border: 2px solid rgb(226, 35, 26);
                    vertical-align: top;
                    padding-left: 10px;
                }
                > input:focus {
                    outline: none;
                }
                > input:focus::-webkit-input-placeholder {
                    color: #cfcfcf;
                }
                > span {
                    display: inline-block;
                    background-color: rgb(226, 35, 26);
                    height: 40px;
                    color: white;
                    line-height: 40px;
                    width: 80px;
                    text-align: center;

                    i {
                        font-size: 30px;
                    }
                }
            }

            .cart {
                position: relative;
                display: inline-block;
                font-weight: 500;
                font-size: 16px;
                height: 40px;
                border: 1px solid rgb(238, 238, 238);
                color: rgb(225, 37, 27);
                vertical-align: top;
                line-height: 40px;
                margin-left: 20px;
                margin-top: 30px;
                padding: 0 20px;

                .cartNum {
                    vertical-align: middle;
                    position: absolute;
                    background-color: rgb(225, 37, 27);
                    height: 15px;
                    width: 20px;
                    border-radius: 15px;
                    color: white;
                    left: 30px;
                    top: 5px;
                    line-height: 15px;
                    text-align: center;
                    font-size: 10px;
                }

                i {
                    font-size: 20px;
                    margin-right: 10px;
                }

                &:hover {
                    border-color: rgb(225, 37, 27);

                    cursor: pointer;
                }
            }

            .hotSearch {
                font-size: 14px;
                color: #999999;
                margin-top: 5px;
                list-style: none;

                li {
                    display: inline-block;
                }

                li:not(:nth-child(1)) {
                    margin-left: 10px;
                }
            }

            .searchMore {
                list-style: none;
                margin-top: 28px;
                margin-left: -10px;
                font-size: 16px;
                li {
                    display: inline-block;
                }
                li:nth-child(1),
                li:nth-child(2) {
                    font-weight: 800;
                    color: #e1251b;
                }
                li:not(:nth-child(1)) {
                    margin-left: 20px;
                }
            }
        }
    }
}
</style>