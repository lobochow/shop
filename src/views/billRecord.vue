<template>
    <div>
        <top-nav></top-nav>
        <div class="billRecordWrap">
            <div class="billRecords">
                <!-- <div class="tags">
                    <div class="billCategory">
                        <span>全部订单</span>
                        <span>待付款</span>
                        <span>待收货</span>
                        <span>待评价</span>
                    </div>
                    <span>我的常购商品</span>
                    <span>订单回收站</span>
                    <div class="searchBill">
                        <input type="text">
                        <span>搜索</span>
                    </div>
                </div> -->

                <div class="title">
                    <span class="timeDuration">近三个月订单</span>
                    <span>订单详情</span>
                    <span>收货人</span>
                    <span>金额</span>
                    <span class="status">全部状态</span>
                    <span>操作</span>
                </div>

                <div class="record" v-for="(recordItem, billIndex) in billRecordInfo" :key="billIndex">
                    <div class="th">
                        <span class="datetime">{{recordItem.finishTime}}</span>
                        <span class="billId">
                            <span>订单号：</span>
                            {{recordItem._id}}
                        </span>
                    </div>
                    <div class="recordTable" v-for="(skuItem, skuIndex) in recordItem.spuInfo" :key="skuIndex">
                        <div class="skuDetail">
                            <div class="imgWrap">
                                <img :src="skuItem.swipers[0].url" alt="skuImg">
                            </div>
                            <span class="skuName">{{skuItem.skuInfo.description}}</span>
                        </div>
                        <span class="buyNum">x{{skuItem.buyNum}}</span>
                        <span>申请售后</span>
                        <p class="recevier">{{username}}</p>
                        <div class="payInformation">
                            <span class="costNum">¥{{skuItem.price * skuItem.buyNum}}</span>
                            <span class="payWay">在线支付</span>
                        </div>
                        <p class="status">已完成</p>
                        <p @click="goComment" class="commentButton">评价</p>
                    </div>
                </div>

                <pagination class="pagination" :pageSize="paginationOption.pageSize"
                            :currentPage="paginationOption.currentPage" :total="total" :pageSizes="[1, 5, 10]"
                            @pageChange="handlerPagechange" @pageSizeChange="handlerPageSizeChange">
                </pagination>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav"
import pagination from "@/components/pagination.vue"
import { mapState } from 'vuex'
import { getUserInfo } from '@/api'

import { routerJump } from "@/mixin"

export default {
    name: 'billRecord',
    mixins: [routerJump],
    components: { topNav, pagination },
    data() {
        return {
            billRecordInfo: {},
            total: 0,
            paginationOption: {
                pageSize: 1,
                currentPage: 1,
            }
        }
    },
    computed: {
        ...mapState('userStore', ['billInfo', 'username'])
    },
    watch: {
        billInfo(newValue) {
            this.billRecordInfo = newValue.billList.map(item => {
                item.spuInfo.forEach((spu, index) => {
                    spu.buyNum = item.spuList[index].buyNum;
                })
                return item;
            })
            this.total = newValue.count;
        }
    },
    methods: {
        async isLogin() {
            let result = await getUserInfo();
            console.log(result.code);
            if (result.code === 201) {
                this.$router.push('/login');
            }
        },
        handlerPagechange(value) {
            this.paginationOption.currentPage = value;
            this.$store.dispatch('userStore/acReqBillInfo', this.paginationOption);
        },
        handlerPageSizeChange(value) {
            this.paginationOption.pageSize = value;
            this.$store.dispatch('userStore/acReqBillInfo', this.paginationOption);
        }
    },
    mounted() {
        this.isLogin();
        this.$store.dispatch('userStore/acReqBillInfo', this.paginationOption);
    }
}
</script>

<style lang="less" scoped>
.billRecordWrap {
    min-width: 1000px;
    width: 100vw;
    background-color: #f1f1f1;
    font-size: 12px;

    .billRecords {
        width: 1000px;
        margin: 20px auto;
        background-color: white;
        padding: 20px;

        .tags {
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;

            .billCategory {
                > * {
                    margin-right: 20px;
                }
            }

            .searchBill {
                > input {
                    font-size: 12px;
                }
            }
        }

        .title,
        .recordTable {
            display: grid;
            grid-template-columns: repeat(9, 1fr);

            > .commentButton {
                color: red;

                &:hover {
                    cursor: pointer;
                }
            }

            &:not(:last-child) {
                border-bottom: 1px solid #e5e5e5;
            }
        }

        .title {
            padding: 10px 0px;
            background-color: #f5f5f5;
            justify-items: center;
            > :nth-child(2) {
                grid-column: 2/6;
            }
        }

        .record {
            margin-top: 20px;
            border: 1px solid #e5e5e5;
            padding: 10 0px;
            .th {
                padding: 10px;
                background-color: #f5f5f5;
                > :nth-child(1) {
                    color: #aaaab1;
                    margin-right: 20px;
                }
                > :nth-child(2) {
                    > :nth-child(1) {
                        color: #aab1c4;
                    }
                }
            }

            .recordTable {
                height: 80px;
                justify-items: center;
                align-items: center;

                .buyNum {
                    color: #aaaaaa;
                }

                .skuDetail {
                    padding: 10px;
                    grid-column: 1/4;
                    display: flex;
                    .imgWrap {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        width: 60px;
                        height: 60px;
                        flex-shrink: 0;

                        img {
                            max-width: 60px;
                            max-height: 60px;
                        }
                    }
                    > .skuName {
                        margin-left: 10px;
                        line-height: 1.5em;
                    }
                }

                .payInformation {
                    flex-direction: column;
                    color: #aaaaaa;
                    > * {
                        padding: 5px;
                        &:nth-child(1) {
                            border-bottom: 1px solid #e5e5e5;
                        }
                    }
                }

                .status {
                    color: #aaaaaa;
                }

                > :nth-child(n + 4):nth-child(-n + 7) {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-left: 1px solid #e5e5e5;
                }
            }
        }
    }
}
</style>