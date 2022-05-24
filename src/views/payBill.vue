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
                        <li>
                            <div class="locationInformation">
                                <span class="name">周德伟</span>
                                <span class="nickname">lobo</span>
                                <span class="address">省份地方市某某镇某某街多少号</span>
                                <span class="phone">133****6752</span>
                                <span class="isDefaultAdress">默认地址</span>
                            </div>
                            <div class="editLocation">
                                <span>设为默认地址</span>
                                <span>编辑</span>
                                <span>删除</span>
                            </div>
                        </li>
                    </ul>
                    <p class="unflodAddr">更多地址</p>
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
                                <span>13.490kg</span>
                            </p>
                        </div>
    
                        <div class="skuInformationContainer">
                            <p>商家：京东自营</p>
                            <div>
                                <div class="skuInformation">
                                    <img src="@/assets/images/spuImg/iphone.png" alt="iphone">
                                </div>
                                <ul>
                                    <li>戴尔（DELL）4K 32英寸 Fast IPS 144Hz 高刷 1ms HDR600 FreeSync 防蓝光屏 游匣 电竞显</li>
                                    <li>颜色：新 32 4K 快速</li>
                                    <li>支持7天无理由退货</li>
                                </ul>
                                <div>
                                    <p>¥7299.00</p>
                                    <p>13.490kg</p>
                                </div>
                                <span>x1</span>
                                <span>有货</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cost">
                    <p>
                            <span>总商品金额</span>
                            <span>¥7299.00</span>
                    </p>
                    <p>
                            <span>运费</span>
                            <span>¥0.00</span>
                    </p>
                </div>

                <div class="briefInformation">
                    <p>
                            <span>应付总额：</span>
                            <span>¥7299.00</span>
                    </p>
                    <p>
                            <span>寄送至：</span>
                            <span>省份地方市某某镇某某街多少号</span>
                            <span>收货人：</span>
                            <span>lobo</span>
                            <span>133****6751</span>
                    </p>
                </div>

            <div class="submitButton">提交订单</div>
          </div>
      </div>
      <div class="payMsg">
          <dir class="dialog">
              <div>二维码</div>
              <div>
                  <button>取消</button>
                  <button>支付完成</button>
              </div>
          </dir>
      </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav"

export default {
    name: 'payBill',
components: {topNav}
}
</script>

<style lang="less">
    .billWrap{
        min-width: 1000px;
        width: 100vw;
        background-color: white;
        font-size: 10px;
        padding-top: 20px;

        .billContainer{
            width: 1000px;
            margin: 0px auto;

            border: 1px solid #F0F0F0;

            >p{
                font-size: 18px;
            }

            .location{
                padding: 10px;

                >:nth-child(1){
                    display: flex;
                    justify-content: space-between;

                    >:nth-child(1){
                        font-size: 16px;
                        font-weight: bold;
                    }
                }

                >ul{
                    list-style: none;
                    padding: 10px;
                    >li{
                        display: flex;
                        justify-content: space-between;

                        >:nth-child(1){
                            >*{
                                &:not(:last-child){
                                    margin-right: 10px;
                                }
                            }

                            >:nth-child(1){
                                display: inline-block;
                                width: 100px;
                                text-align: center;
                                border: 2px solid #E4393C;
                                padding: 5px 0px;
                                color: #666666;
                            }

                            >:last-child{
                                background-color: #999999;
                                padding: 2px;
                                color: white;
                            }
                        }

                        >:nth-child(2){
                            >*{
                                margin-right: 10px;
                            }
                        }
                    }
                }

                >:nth-child(3){
                    padding: 10px;
                    border-bottom: 1px solid #E6E6E6;
                }
            }

            .payWay{
                margin: 0px 10px;

                padding: 10px 0px;

                border-bottom: 1px solid #E6E6E6;

                >:nth-child(1){
                    font-size: 16px;
                    font-weight: bold;
                }

                >:nth-child(2){
                    padding: 10px;
                    margin-top: 5px;

                    >*{
                        width: 100px;
                        padding: 5px 15px;
                        border: solid 1px #DDDDDD;
                        margin-right: 10px;
                    }
                }
            }

            .deliver{
                padding: 10px;

                >:nth-child(1){
                    display: flex;
                    justify-content: space-between;

                    >:nth-child(1){
                        font-size: 16px;
                        font-weight:bold;
                    }

                    >:nth-child(2){
                        >*{
                            margin-left: 20px;
                        }
                    }
                }

                >:nth-child(2){
                    display: flex;

                    >:nth-child(1){
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        padding: 10px;
                        background-color: #F7F7F7;
                        min-width: 300px;

                        >:nth-child(1){
                            font-size: 12px;
                            font-weight: bold;
                        }

                        >:nth-child(2){
                            display: flex;
                            padding: 10px 0px;
                            justify-content: space-around;
                            >*{
                                padding: 5px 30px;
                                border: 2px solid #E4393C;
                            }
                        }
                    }

                    >:nth-child(2){
                        padding: 10px;
                        background-color: #F3FBFE;

                        >:nth-child(1){
                            font-size: 12px;
                            font-weight: bold;
                        }

                        >:nth-child(2){
                            display: flex;
                            padding: 10px 0px;
                            >:nth-child(1){
                                width: 100px;
                                height:100px;
                                border: 1px solid #ccc;
                                text-align: center;
                                flex-shrink: 0;
                                background-color: white;
                                margin-right: 10px;
                                img{
                                    max-width: 98px;
                                    max-height: 98px;
                                }
                            }

                            >:nth-child(2){
                                list-style: none;
                                >li{
                                    margin-bottom: 10px;
                                }
                            }

                            >:nth-child(3){
                                text-align: right;
                                >:nth-child(1){
                                    font-size: 14px;
                                    font-weight: bold;
                                    color: #E4393C;
                                }
                                >*{
                                    margin-bottom: 10px;
                                }
                            }

                            >:nth-child(n+3):nth-child(-n+5){
                                flex-shrink: 0;
                                margin-left: 40px;
                            }
                        }
                    }
                }
            }

            .cost{
                text-align: right;
                padding: 20px;
                >:nth-child(1){
                    margin-bottom: 10px;
                }

                >*{
                    >:nth-child(2){
                        display: inline-block;
                        width: 120px;
                    }
                }
            }

            .briefInformation{
                background-color: #F4F4F4;
                padding: 20px;
                text-align: right;

                >:nth-child(1){
                    margin-bottom: 10px;
                    >:nth-child(2){
                        font-size: 20px;
                        font-weight: bold;
                    }
                }

                >:nth-child(2){
                    >*{
                        margin-right: 5px;
                    }
                    >:nth-child(2){
                        margin-right: 30px;
                    }
                }
            }

            .submitButton{
                background-color: #E4393C;

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

    .payMsg{
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100vw;
        height: 100vh;
        z-index: 11;
        background-color: rgba(153, 153, 153,0.3);

        .dialog{
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
            box-shadow: 2px 2px 5px 3px rgba(0,0,0,0.2);

            >:nth-child(1){
                width: 150px;
                height: 150px;
                border: 1px solid black;
                margin: 40px auto;
                text-align: center;
                line-height: 150px;
            }

            >:nth-child(2){
                display: flex;
                justify-content: center;
                >:nth-child(1){
                    margin-right: 20px;
                }
            }
        }
    }
</style>