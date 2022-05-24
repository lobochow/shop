<template>
  <div>
      <div class="billRecordWrap">
          <div class="billRecords">
              <div class="tags">
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
              </div>

              <div class="title">
                  <span class="timeDuration">近三个月订单</span>
                  <span>订单详情</span>
                  <span>收货人</span>
                  <span>金额</span>
                  <span class="status">全部状态</span>
                  <span>操作</span>
              </div>

              <div class="record">
                  <div class="th">
                        <span class="datetime">2022-05-20 01:04:23</span>
                        <span class="billId">
                            <span>订单号：</span>
                            243638582908
                        </span>
                  </div>
                  <div class="recordTable">
                      <div class="skuDetail">
                          <div class="imgWrap">
                              <img src="@/assets/images/spuImg/iphone.png" alt="iphone">
                          </div>
                          <span class="skuName">华硕 ROG玩家国度 32英寸电竞显示器 电脑显示器 游戏显示器4K 144Hz G-Sync</span>
                      </div>
                      <span class="buyNum">x1</span>
                      <span>申请售后</span>
                      <p class="recevier">lobo</p>
                      <div class="payInformation">
                          <span class="costNum">¥8999.00</span>
                          <span class="payWay">在线支付</span>
                      </div>
                      <p class="status">已完成</p>
                      <p>评价</p>
                  </div>
              </div>

              <pagination class="pagination"></pagination>
          </div>
      </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav"
import pagination from "@/components/pagination.vue"

export default {  
name: 'billRecord',
components: {topNav, pagination}
}
</script>

<style lang="less" scoped>
.billRecordWrap{
    min-width: 1000px;
    width: 100vw;
    background-color: #F1F1F1;
    font-size: 12px;

    .billRecords{
        width: 1000px;
        margin: 20px auto;
        background-color: white;
        padding: 20px;

        .tags{
            display: flex;
            justify-content: space-between;
            padding: 5px 0px;

            .billCategory{
                >*{
                    margin-right: 20px;
                }
            }

            .searchBill{
                >input{
                    font-size: 12px;
                }
            }
        }

        .title,.recordTable{
            display: grid;
            grid-template-columns: repeat(9, 1fr);
        }

        .title{
            padding: 10px 0px;
            background-color: #F5F5F5;
            justify-items: center;
            >:nth-child(2){
                grid-column: 2/6;
            }
        }

        .record{
            margin-top: 20px;
            border: 1px solid #E5E5E5;
            padding: 10 0px;
            .th{
                padding: 10px;
                background-color: #F5F5F5;
                >:nth-child(1){
                    color: #AAAAB1;
                    margin-right: 20px;
                }
                >:nth-child(2){
                    >:nth-child(1){
                        color: #AAB1C4;
                    }
                }
            }

            .recordTable{
                height: 80px;
                justify-items: center;
                align-items: center;

                .buyNum{
                    color: #AAAAAA;
                }

                .skuDetail{
                    padding: 10px;
                    grid-column: 1/4;
                    display: flex;
                    .imgWrap{
                        width: 60px;
                        height: 60px;
                        flex-shrink: 0;
                        text-align: center;

                        img{
                            max-width: 60px;
                            max-height: 60px;
                        }
                    }
                    >:nth-child(2){
                        line-height: 1.5em;
                    }
                }

                .payInformation{
                    flex-direction: column;
                    color: #AAAAAA;
                    >*{
                        padding: 5px;
                        &:nth-child(1){
                            border-bottom: 1px solid #E5E5E5;
                        }
                    }
                }

                .status{
                    color: #AAAAAA;
                }

                >:nth-child(n+4):nth-child(-n+7){
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    border-left: 1px solid #E5E5E5;
                }
            }
        }
    }
}
</style>