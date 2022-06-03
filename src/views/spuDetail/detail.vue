<template>
    <div class="detailWrap">
        <div class="detail">
            <zoomSwiper :swiperImgs="skuInfo.swiperImgs" />

            <div class="rightArea">
                <h5>{{skuInfo.description}}</h5>
                <div class="price">
                    <span>京东价</span>
                    <span>¥{{skuInfo.price}}</span>
                    <span>降价通知</span>
                    <div>
                        <p>累计评价</p>
                        <p>{{skuInfo.commentNum}}万+</p>
                    </div>
                </div>
                <p class="weight">
                    <span>重量</span>
                    <span>{{skuInfo.weight}}kg</span>
                </p>
                <div class="skuList">
                    <div>选择型号</div>
                    <ul>
                        <li v-for="(skuItem,index) in skuInfo.skuList" :key="index">
                            <div class="imgWrap"><img :src="skuItem.skuSmallImg" alt="sku"></div>
                            <span>{{skuItem.skuBriefInfo}}</span>
                        </li>
                    </ul>
                </div>
                <div class="service">
                    <span>精选服务</span>
                    <ul>
                        <li v-for="(skuServiceItem, index) in skuInfo.skuService" :key="index">
                            <dropdown :valueList="skuServiceItem"></dropdown>
                        </li>
                    </ul>
                </div>

                <div class="shopService">
                    <span>京东服务</span>
                    <ul>
                        <li v-for="(shopServiceItem, index) in skuInfo.shopService" :key="index">
                            <dropdown :valueList="shopServiceItem"></dropdown>
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

import { reqSkuInfo } from '@/api/index.js'

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
    mounted() {
        this.getSkuInfo();

    }

}
</script>

<style lang="less">
@import "@/styles/variables.less";

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

            h5 {
                color: #666666;
            }

            .price {
                margin-top: 10px;
                padding: 10px;

                background-color: #f3f3f3;
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
                display: flex;
                align-items: center;

                padding: 10px;

                font-size: 10px;

                > :nth-child(1) {
                    flex-shrink: 0;

                    color: #999999;
                    vertical-align: middle;
                }

                ul {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    margin: 0px;
                    padding-left: 10px;
                    max-width: 100%;

                    list-style: none;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        margin-right: 10px;
                        margin-bottom: 10px;

                        border: #cccccc 1px solid;
                        background-color: @bg-gray;

                        > .imgWrap {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            width: 30px;
                            height: 30px;

                            background-color: white;

                            > img {
                                max-width: 30px;
                                max-height: 30px;
                                vertical-align: middle;
                            }
                        }

                        span {
                            margin: 0px 10px;
                            flex-shrink: 0;
                        }

                        &:hover {
                            border: #e2231a 1px solid;
                        }
                    }
                }
            }

            .service, .shopService {
                padding: 10px;
                display: flex;
                align-items: center;

                > span {
                    font-size: 10px;
                    color: #999999;
                }

                > ul {
                    display: flex;

                    padding-left: 10px;

                    list-style: none;

                    > li {
                        margin-right: 10px;
                    }
                }
            }

            .addCart {
                margin-left: 10px;
                margin-top: 40px;

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