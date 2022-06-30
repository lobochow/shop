<template>
    <div>
        <top-nav></top-nav>
        <div class="cartWrap">
            <div class="cartContainer">
                <div class="location">
                    <!-- <span>全部商品</span>
                    <span>配送至</span> -->
                </div>

                <div class="title">
                    <span>
                        <span><input type="checkbox" v-model="allSelected">全选</span>
                        <span>商品</span>
                    </span>
                    <span>单价</span>
                    <span>数量</span>
                    <span>小计</span>
                    <span>操作</span>
                </div>

                <div class="skuDetail" v-for="(cartItem, cartItemIndex) in cartInfo" :key="cartItemIndex">
                    <p>
                        <!--店名 <input type="checkbox">
                        <span class="shopname">{{cartItem.skuInfo.description}}</span> -->
                    </p>
                    <p>
                        <span>
                            <input type="checkbox" v-model="cartItem.selected">
                            <span class="imgWrap"><img :src="cartItem.spuInfo.swipers[0].url" alt="skuImg"></span>
                            <span>
                                <span>{{cartItem.spuInfo.attrList.reduce( (pre, cur) => pre + ' ' + cur.attrValue, "")}}</span>
                            </span>
                        </span>

                        <span class="skuName">
                            {{cartItem.skuInfo.description}}
                        </span>

                        <span class="price">¥{{cartItem.spuInfo.price}}</span>

                        <span class="buyNum">{{cartItem.count}}</span>

                        <span class="skuSum">¥{{calcRowPrice(cartItem.spuInfo.price, cartItem.count)}}</span>

                    <ul class="operation">
                        <li @click="reqDeleteCartItem(cartItem)">删除</li>
                        <!-- <li>到货通知</li>
                        <li>移入关注</li> -->
                    </ul>
                    </p>
                </div>

                <div class="pay">
                    <span>
                        <span><input type="checkbox" v-model="allSelected">全选</span>
                        <span @click="reqDeleteSelected">删除选中的商品</span>
                        <!-- <span>移入关注</span> -->
                        <span @click="deleteAllCartItem">清空购物车</span>
                    </span>

                    <span>
                        <span>已选择0件商品</span>
                        <span>总价：¥0.00</span>
                        <span @click="togglePay">去结算</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="payMsg" v-show="showPay">
            <div class="dialog">
                <div>二维码</div>
                <div>
                    <button @click="togglePay">取消</button>
                    <button @click="paySuccess">支付完成</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import searchArea from "@/components/searchArea"
import { routerJump } from '@/mixin/index.js'
import { mapState } from 'vuex'
import {getUserInfo} from "@/api"

let SILLYDATE = require('silly-datetime');

export default {
    name: 'cart',
    mixins: [routerJump],
    components: { topNav, searchArea },
    data() {
        return {
            cartInfo: [],
            showPay: false
        }
    },
    computed: {
        ...mapState('userStore', ['user_id', 'cartList']),
        allSelected: {
            get() {
                if (this.cartInfo.length === 0) {
                    return false;
                }

                return this.cartInfo.every(item => item.selected === true);
            },
            set(value) {
                this.cartInfo.forEach(item => item.selected = value);
            }
        }
    },
    watch: {
        cartList(newCartList) {
            this.cartInfo = newCartList.map(item => {
                this.$set(item, 'selected', true);
                return item;
            })
        }
    },
    methods: {
        calcRowPrice(price, num) {
            return (price * num).toFixed(2);
        },
        togglePay() {
            this.showPay = !this.showPay;
        },
        reqDeleteCartItem(cartItem) {
            let targetCartList = this.cartList.filter(item => item.spuInfo._id !== cartItem.spuInfo._id);
            targetCartList = targetCartList.map(item => {
                return {
                    count: item.count,
                    spu_id: item.spuInfo._id
                }
            })
            try {
                this.$store.dispatch('userStore/acUpdateCart', { user_id: this.user_id, goodsList: targetCartList });
            } catch (error) {
                this.$message({
                    type: 'success',
                    message: error.message
                })
            }
        },
        reqDeleteSelected() {
            let targetCartList = this.cartInfo.filter(item => item.selected == false);
            targetCartList = targetCartList.map(item => {
                return {
                    count: item.count,
                    spu_id: item.spuInfo._id
                }
            })
            try {
                this.$store.dispatch('userStore/acUpdateCart', { user_id: this.user_id, goodsList: targetCartList });
            } catch (error) {
                this.$message({
                    type: 'success',
                    message: error.message
                })
            }
        },
        deleteAllCartItem() {
            try {
                this.$store.dispatch('userStore/acUpdateCart', { user_id: this.user_id, goodsList: [] });
            } catch (error) {
                this.$message({
                    type: 'success',
                    message: error.message
                })
            }
        },
        paySuccess() {
            //-1选择商品数量为0则提示

            //0.整理数据
            // let billReqData = {
            //     user_id: mongoose.Types.ObjectId,
            //     finishTime: String,
            //     spuList: [mongoose.Types.ObjectId]
            // }

            let finishTime = Date.now();
            finishTime = SILLYDATE.format(finishTime, 'YYYY-MM-DD HH:mm:ss');

            let spuList = this.cartInfo.filter(item => item.selected === true).map(item => ({
                buyNum: item.count,
                spu_id: item.spuInfo._id
            }));
            console.log(spuList);

            let billReqData = {
                user_id: this.user_id,
                finishTime,
                spuList
            }

            //1.dispatch
            try {
                this.$store.dispatch('userStore/acUpdateBill', billReqData)

                //成功删除购物车相应物品后跳转
                
                this.$store.dispatch('userStore/acUpdateCart', {
                    user_id: this.user_id,
                    goodsList: this.cartInfo.filter(item => item.selected === true)
                });

                this.togglePay();

            } catch (error) {
                //失败提醒
                this.$message({
                    type: 'warning',
                    message: error.message
                })
            } 
        },
        async isLogin(){
            let result = await getUserInfo();
            console.log(result.code);
            if(result.code === 201) {
                this.$router.push('/login');
            }
        }
    },
    mounted() {
        this.isLogin();
        console.log('mounted');
    },
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

            > :not(:first-child) {
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
                    align-items: center;

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

                    > :hover {
                        cursor: pointer;
                        color: #e2231a;
                    }
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

                    &:hover {
                        cursor: pointer;
                        color: #e2231a;
                    }
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