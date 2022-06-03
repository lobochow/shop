<template>
    <div>
        <div class="billWrap">
            <div class="billContainer">
                <p>填写并核对订单信息</p>
                <div class="location">
                    <p>
                        <span>收货人信息</span>
                        <span>新增收货地址</span>
                    </p>
                    <ul class="locationList">
                        <li class="locationItem"
                        :class="{'selected': currentAddressIndex == index}"
                        v-for="(locationItem, index) in payBillInfo.addressInfo" :key="index"
                        v-show="showMoreAddress || index == currentAddressIndex"
                        >
                            <div class="locationInformation">
                                <span class="name" @click="changeCurrentAddressIndex(index)">{{locationItem.idName}}</span>
                                <span class="nickname">{{locationItem.receiverName}}</span>
                                <span class="address">{{locationItem.address}}</span>
                                <span class="phone">{{locationItem.phoneNum}}</span>
                                <span class="isDefaultAdress" v-show="index == 0">默认地址</span>
                            </div>
                            <div class="editLocation">
                                <span v-show="index != 0">设为默认地址</span>
                                <span>编辑</span>
                                <span v-show="index != 0">删除</span>
                            </div>
                        </li>
                    </ul>
                    <p class="moreAddress" @click="showMoreAddress = !showMoreAddress">
                        更多地址
                        <i class="iconfont icon-xiangxia"></i>
                    </p>
                </div>

                <div class="payWay">
                    <p>支付方式</p>
                    <p>
                        <span>货到付款</span>
                        <span>在线支付</span>
                    </p>
                </div>

                <div class="deliver">
                    <div>
                        <span>送货清单</span>
                        <span>
                            <span>价格说明</span>
                            <span>返回修改购物车</span>
                        </span>
                    </div>

                    <div>
                        <div class="deliverWay">
                            <p>配送方式</p>
                            <p>
                                <span>京东快递</span>
                                <span>上门自提</span>
                            </p>
                            <p>
                                <span>标准达：</span>
                                <span>预计5月20日[今日]15:00-21:00送达</span>
                                <span>修改</span>
                            </p>
                            <p>
                                <span>总重量：</span>
                                <span>{{totalWeight}}kg</span>
                            </p>
                        </div>

                        <div class="skuInformationContainer">
                            <div class="skuInfoItem" v-for="(skuInfoItem, index) in payBillInfo.skuList" :key="index">
                                <p>商家：{{skuInfoItem.shopName}}</p>
                                <div>
                                    <div class="skuInformation">
                                        <img :src="skuInfoItem.skuImg" alt="skuImg">
                                    </div>
                                    <ul>
                                        <li>{{skuInfoItem.spuTitle}}</li>
                                        <li>{{skuInfoItem.skuInfo}}</li>
                                        <li>支持7天无理由退货</li>
                                    </ul>
                                    <div>
                                        <p>¥{{skuInfoItem.price}}</p>
                                        <p>{{skuInfoItem.weight}}kg</p>
                                    </div>
                                    <span>x{{skuInfoItem.buyNum}}</span>
                                    <span>有货</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cost">
                    <p>
                        <span>总商品金额</span>
                        <span>¥{{totalSkuPrice}}</span>
                    </p>
                    <p>
                        <span>运费</span>
                        <span>¥{{totalDeliverCost}}</span>
                    </p>
                </div>

                <div class="briefInformation">
                    <p>
                        <span>应付总额：</span>
                        <span>¥{{totalPrice}}</span>
                    </p>
                    <p>
                        <span>寄送至：</span>
                        <span>省份地方市某某镇某某街多少号</span>
                        <span>收货人：</span>
                        <span>lobo</span>
                        <span>133****6751</span>
                    </p>
                </div>

                <div class="submitButton" @click="togglePay">提交订单</div>
            </div>
        </div>
        <div class="payMsg" v-show="showPay">
            <div class="dialog">
                <div>二维码</div>
                <div>
                    <button @click="togglePay">取消</button>
                    <button @click="goBillRecord">支付完成</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import { reqPayBillInfo } from "@/api"

import {routerJump} from "@/mixin"

export default {
    name: 'payBill',
    mixins: [routerJump],
    components: { topNav },
    data() {
        return {
            payBillInfo: {},
            showMoreAddress: false,
            currentAddressIndex: 0,
            showPay: false
        }
    },
    methods: {
        changeCurrentAddressIndex(index){
            this.currentAddressIndex = index;
            this.showMoreAddress = !this.showMoreAddress;
        },
        togglePay(){
            this.showPay = !this.showPay;
        }
    },
    computed: {
        totalWeight() {
            let sumWeight = 0;
            this.payBillInfo?.skuList?.forEach(item => {
                sumWeight += item.weight * item.buyNum;
            });
            return Number(sumWeight.toFixed(2));
        },
        totalDeliverCost() {
            let sumDeliverCost = 0;
            this.payBillInfo?.skuList?.forEach(item => {
                sumDeliverCost += item.deliverCost;
            });
            return Number(sumDeliverCost.toFixed(2));
        },
        totalSkuPrice() {
            let sumPrice = 0;
            this.payBillInfo?.skuList?.forEach(item => {
                sumPrice += item.price * item.buyNum;
            });
            return Number(sumPrice.toFixed(2));
        },
        totalPrice() {
            return Number(this.totalDeliverCost + this.totalSkuPrice).toFixed(2);
        }
    },
    mounted() {
        this.payBillInfo = reqPayBillInfo();
    },
}
</script>

<style lang="less">
@import "@/styles/variables.less";

.billWrap {
    min-width: 1000px;
    width: 100vw;
    background-color: white;
    font-size: 10px;
    padding-top: 20px;

    .billContainer {
        width: 1000px;
        margin: 0px auto;

        border: 1px solid #f0f0f0;

        > p {
            font-size: 18px;
        }

        .location {
            padding: 10px;

            > :nth-child(1) {
                display: flex;
                justify-content: space-between;

                > :nth-child(1) {
                    font-size: 16px;
                    font-weight: bold;
                }
            }

            > .locationList {
                display: flex;
                flex-direction: column;

                list-style: none;
                padding: 10px;
                padding-bottom: 0px;

                > .locationItem {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    margin-bottom: 10px;

                    > .locationInformation {
                        > * {
                            &:not(:last-child) {
                                margin-right: 10px;
                            }
                        }

                        > .name {
                            display: inline-block;
                            width: 100px;
                            text-align: center;
                            border: 2px solid @border-gray;
                            padding: 5px 0px;
                            color: #666666;

                            &:hover{
                                cursor: pointer;
                            }
                        }

                        > .isDefaultAdress {
                            background-color: #999999;
                            padding: 2px;
                            color: white;
                        }
                    }

                    > .editLocation {
                        visibility: hidden;
                        > * {
                            margin-right: 10px;
                        }
                    }

                    &:hover{
                        background-color: @light-theme-color;

                        > .editLocation{
                            visibility: visible;
                        }
                    }

                    &.selected{
                        order: -1;
                        .name{
                            border-color: #e4393c;
                        }
                    }
                }
            }

            > .moreAddress {
                padding: 10px;

                border-bottom: 1px solid #e6e6e6;

                cursor: pointer;
            }
        }

        .payWay {
            margin: 0px 10px;

            padding: 10px 0px;

            border-bottom: 1px solid #e6e6e6;

            > :nth-child(1) {
                font-size: 16px;
                font-weight: bold;
            }

            > :nth-child(2) {
                padding: 10px;
                margin-top: 5px;

                > * {
                    width: 100px;
                    padding: 5px 15px;
                    border: solid 1px #dddddd;
                    margin-right: 10px;
                }
            }
        }

        .deliver {
            padding: 10px 0px;

            > :nth-child(1) {
                display: flex;
                justify-content: space-between;

                > :nth-child(1) {
                    font-size: 16px;
                    font-weight: bold;
                }

                > :nth-child(2) {
                    > * {
                        margin-left: 20px;
                    }
                }
            }

            > :nth-child(2) {
                display: flex;

                > .deliverWay {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;

                    min-width: 300px;
                    padding: 10px;

                    background-color: #f7f7f7;

                    > :nth-child(1) {
                        font-size: 12px;
                        font-weight: bold;
                    }

                    > :nth-child(2) {
                        display: flex;
                        padding: 10px 0px;
                        justify-content: space-around;
                        > * {
                            padding: 5px 30px;
                            border: 2px solid #e4393c;
                        }
                    }

                    > :nth-child(4) {
                        margin-top: auto;
                    }
                }

                > .skuInformationContainer {
                    flex-grow: 1;

                    > .skuInfoItem {
                        padding: 10px;
                        background-color: #f3fbfe;

                        > :nth-child(1) {
                            font-size: 12px;
                            font-weight: bold;
                        }

                        > :nth-child(2) {
                            display: grid;
                            grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
                            > :nth-child(-n + 2) {
                                justify-self: left;
                            }
                            > :nth-child(n + 3):nth-child(-n + 5) {
                                justify-self: center;
                            }

                            > :nth-child(-n + 2) {
                                align-self: left;
                            }

                            padding: 10px 0px;
                            > :nth-child(1) {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-shrink: 0;

                                width: 100px;
                                height: 100px;
                                margin-right: 10px;

                                border: 1px solid #ccc;
                                background-color: white;

                                img {
                                    max-width: 98px;
                                    max-height: 98px;
                                }
                            }

                            > :nth-child(2) {
                                list-style: none;
                                > li {
                                    margin-bottom: 10px;
                                }
                            }

                            > :nth-child(3) {
                                text-align: right;
                                > :nth-child(1) {
                                    font-size: 14px;
                                    font-weight: bold;
                                    color: #e4393c;
                                }
                                > * {
                                    margin-bottom: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .cost {
            text-align: right;
            padding: 20px;
            > :nth-child(1) {
                margin-bottom: 10px;
            }

            > * {
                > :nth-child(2) {
                    display: inline-block;
                    width: 120px;
                }
            }
        }

        .briefInformation {
            background-color: #f4f4f4;
            padding: 20px;
            text-align: right;

            > :nth-child(1) {
                margin-bottom: 10px;
                > :nth-child(2) {
                    font-size: 20px;
                    font-weight: bold;
                }
            }

            > :nth-child(2) {
                > * {
                    margin-right: 5px;
                }
                > :nth-child(2) {
                    margin-right: 30px;
                }
            }
        }

        .submitButton {
            background-color: #e4393c;

            padding: 5px;
            font-size: 20px;
            color: white;
            font-weight: bold;
            width: 120px;
            text-align: center;
            border-radius: 3px;
            margin: 10px 10px 40px auto;
        }
    }
}

.payMsg {
    position: absolute;
    z-index: 11;
    top: 0px;
    right: 0px;

    width: 100vw;
    height: 100vh;

    background-color: rgba(153, 153, 153, 0.3);

    .dialog {
        display: inline-block;
        background-color: white;
        height: 300px;
        width: 250px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.2);

        > :nth-child(1) {
            width: 150px;
            height: 150px;
            border: 1px solid black;
            margin: 40px auto;
            text-align: center;
            line-height: 150px;
        }

        > :nth-child(2) {
            display: flex;
            justify-content: center;
            > :nth-child(1) {
                margin-right: 20px;
            }
        }
    }
}
</style>