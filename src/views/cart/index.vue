<template>
    <div>
        <searchArea />
        <div class="cartWrap">
            <div class="cartContainer">
                <div class="location">
                    <span>全部商品</span>
                    <span>配送至：<input type="select" value="12345"></span>
                </div>

                <div class="title">
                    <span>
                        <span><input type="checkbox">全选</span>
                        <span>商品</span>
                    </span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>操作</span>
                </div>

                <div class="skuDetail" v-for="(cartItem, cartItemIndex) in cartInfo" :key="cartItemIndex">
                    <p>
                        <input type="checkbox">
                        <span class="shopname">{{cartItem.shopName}}</span>
                    </p>
                    <p>
                        <span>
                            <input type="checkbox">
                            <span class="imgWrap"><img :src="cartItem.skuImg" alt="skuImg"></span>
                            <span>
                                <span>{{cartItem.spuTitle}}</span>
                                <span>选服务</span>
                            </span>
                        </span>

                        <span class="skuName">
                            {{cartItem.skuInfo}}
                        </span>

                        <span class="price">¥{{cartItem.price}}</span>

                        <span class="buyNum">{{cartItem.buyNum}}</span>

                        <span class="skuSum">¥{{calcRowPrice(cartItem.price, cartItem.buyNum)}}</span>

                    <ul class="operation">
                        <li>删除</li>
                        <li>到货通知</li>
                        <li>移入关注</li>
                    </ul>
                    </p>
                </div>

                <div class="pay">
                    <span>
                        <span><input type="checkbox">全选</span>
                        <span>删除选中的商品</span>
                        <span>移入关注</span>
                        <span>清理购物车</span>
                    </span>

                    <span>
                        <span>已选择0件商品</span>
                        <span>总价：¥0.00</span>
                        <span>去结算</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import { reqCartInfo } from '@/api/index.js'

export default {
    name: 'cart',
    components: { topNav, searchArea },
    data() {
        return {
            cartInfo: {}
        }
    },
    methods: {
        calcRowPrice(price, num){
            return (price * num).toFixed(2);
        }
    },
    mounted() {
        this.cartInfo = reqCartInfo();
    }
}
</script>

<style lang="less">
.cartWrap {
    width: 100vw;
    min-width: 1000px;
    background-color: white;
    .cartContainer {
        width: 1000px;
        margin: 0 auto;
        font-size: 10px;

        display: flex;
        flex-direction: column;

        > * {
            display: grid;
            grid-template-columns: 4fr 2fr 1fr 1fr 1fr 1fr;

            margin-top: 0px;
        }

        .location {
            padding: 10px 0px;

            > :nth-child(2) {
                > input {
                    font-size: 10px;
                    width: 100px;
                }

                grid-column: -3/-1;
                justify-self: end;
            }
        }

        .title {
            gap: 10px;
            border: #e9e9e9 1px solid;
            background-color: #f3f3f3;
            padding: 10px;
            width: 1000px;
            > :nth-child(2) {
                grid-column: 3;
            }

            > :nth-child(n + 2):nth-child(-n + 4) {
                justify-self: center;
            }
        }

        .skuDetail {
            margin-top: 10px;

            > :nth-child(1) {
                grid-column: 1/-1;

                padding: 10px;
            }
            > :nth-child(2) {
                grid-column: 1/-1;

                display: grid;
                grid-template-columns: 4fr 2fr 1fr 1fr 1fr 1fr;
                gap: 10px;
                justify-items: center;
                align-items: center;

                border: 1px solid #f1f1f1;
                border-top: 3px solid #aaaaaa;
                padding: 10px;
                padding-bottom: 20px;

                > :nth-child(1) {
                    display: flex;
                    justify-self: start;

                    > :not(:nth-child(1)) {
                        margin-left: 20px;
                    }

                    .imgWrap {
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        vertical-align: top;

                        width: 80px;
                        height: 80px;

                        border: 1px solid #eeeeee;
                        img {
                            max-height: 80px;
                            max-width: 80px;
                        }
                    }

                    > :nth-child(3) {
                        display: flex;
                        flex-direction: column;
                    }
                }

                > :nth-child(6) {
                    list-style: none;
                }
            }
        }

        .pay {
            margin: 10px 0;
            border: 1px solid #f0f0f0;
            height: 40px;

            > :nth-child(1) {
                padding: 10px;
                > :not(:nth-child(1)) {
                    margin-left: 10px;
                }
            }

            > :nth-child(2) {
                grid-column: -4/-1;

                align-self: center;
                justify-self: right;

                > :nth-child(3) {
                    display: inline-block;
                    width: 100px;
                    line-height: 40px;
                    font-size: 20px;
                    color: white;

                    text-align: center;
                    background-color: #e2231a;
                }

                > :nth-child(-n + 2) {
                    margin-right: 20px;
                }
            }
        }
    }
}

input[type="checkbox"] {
    vertical-align: top;
    margin-top: 2px;
}
</style>