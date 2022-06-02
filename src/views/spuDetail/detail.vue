<template>
    <div class="detailWrap">
        <div class="detail">
            <zoomSwiper :swiperImgs="skuInfo.swiperImgs" />

            <div class="rightArea">
                <h5>微星（MSI）万图师 GeForce RTX 2060 VENTUS 12G OC 超频版 电竞游戏设计专业电脑显卡</h5>
                <div class="price">
                    <span>京东价</span>
                    <span>¥2699.00</span>
                    <span>降价通知</span>
                    <div>
                        <p>累计评价</p>
                        <p>10万+</p>
                    </div>
                </div>
                <p class="weight">
                    <span>重量</span>
                    <span>1.16kg</span>
                </p>
                <div class="skuList">
                    <span>选择型号</span>
                    <ul>
                        <li>
                            <img src="@/assets/images/spuImg/iphone2.png" alt="sku">
                            <span>123123</span>
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <span>精选服务</span>
                    <ul>
                        <li>
                            <dropdown :valueList="['5年只换不修']"></dropdown>
                        </li>
                    </ul>
                </div>
                <div class="addCart">
                    <input type="number" value="1" min="1" max="10">
                    <span>加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'

import {reqSkuInfo} from '@/api/index.js'

import zoomSwiper from '@/views/spuDetail/zoomSwiper'

export default {
    name: 'detail',
    components: { dropdown, zoomSwiper },
    data() {
        return {
            skuInfo: {}
        }
    },
    methods: {
        getSkuInfo() {
            let id = this.$route.query.id;
            this.skuInfo = reqSkuInfo();
        }
    },
    mounted(){
        this.getSkuInfo();
        
    }

}
</script>

<style lang="less">
.detailWrap {
    width: 100%;
    min-width: 1000px;
    background-color: white;
    .detail {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin: 0 auto;

        .rightArea {
            width: 550px;
            height: 400px;

            > :not(:nth-child(1)) {
                margin-top: 10px;
            }

            h5 {
                color: #666666;
            }

            .price {
                background-color: #f3f3f3;
                padding: 10px;
                > :nth-child(1) {
                    font-size: 10px;
                    letter-spacing: 5px;
                    color: #999999;
                }

                > :nth-child(2) {
                    margin-left: 10px;
                    color: #e2231a;
                }

                > :nth-child(3) {
                    margin-left: 10px;
                    font-size: 12px;
                    color: #007bbd;
                }

                > :nth-child(4) {
                    border-left: solid 1px #ccc;
                    margin: 0px 10px 0px 0px;
                    float: right;
                    font-size: 10px;
                    p {
                        width: 100%;
                        text-align: center;
                        margin: 0px 10px 0px 0px;
                    }
                }
            }

            .weight {
                padding: 10px;
                * {
                    font-size: 10px;
                }

                > :nth-child(1) {
                    color: #999999;
                    letter-spacing: 20px;
                }
            }

            .skuList {
                padding: 10px;
                font-size: 10px;
                display: flex;
                align-items: center;
                > :nth-child(1) {
                    color: #999999;
                    vertical-align: middle;
                }

                ul {
                    margin: 0px;
                    padding-left: 10px;
                    list-style: none;
                    display: flex;
                    align-items: center;

                    li {
                        border: #cccccc 1px solid;
                        img {
                            max-width: 30px;
                            max-height: 30px;
                            vertical-align: middle;
                        }

                        span {
                            margin: 0px 10px;
                        }

                        &:hover {
                            border: #e2231a 1px solid;
                        }
                    }
                }
            }

            .service {
                padding: 10px;
                display: flex;
                align-items: center;

                > span {
                    font-size: 10px;
                    color: #999999;
                }

                > ul {
                    list-style: none;
                    display: flex;
                }
            }

            .addCart {
                margin-left: 10px;

                > input {
                    font-size: 32px;
                    width: 60px;
                    text-align: center;
                    vertical-align: middle;
                    border: 1px solid #ccc;

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        opacity: 1;
                    }

                    &:focus {
                        outline: none;
                    }
                }

                > span {
                    margin-left: 10px;
                    display: inline-block;
                    background-color: #e2231a;
                    color: white;
                    height: 40px;
                    padding: 5px 15px;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>