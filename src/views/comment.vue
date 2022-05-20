<template>
  <div>
      <topNav/>
      <div class="commentWrap">
          <div class="header">
              <h5>评价订单</h5>
              <p>
                  <span>订单号：</span>
                  <span>241250830687</span>
                  <span>2022-03-25 11:01:27</span>
              </p>
          </div>

          <div class="deliverComment">
              <p>物流服务评价</p>
              <p class="starts">
                  <span>快递包装</span>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <span>0分</span>
              </p>
              <p class="starts">
                  <span>送货速度</span>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <span>0分</span>
              </p>
              <p class="starts">
                  <span>配送员服务</span>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <i class="iconfont icon-xingxing1"></i>
                  <span>0分</span>
              </p>
          </div>
          
          <div class="skuArea">
              <div class="skuInformation">
                  <div class="imgWrap">
                      <img src="@/assets/images/spuImg/iphone.png" alt="iphone">
                  </div>
                  <p>乐优派猫碗狗碗宠物喂食器猫食盆水盆猫盆狗盆防打翻斜口宠物用品 白色</p>
                  <p>¥9.90</p>
                  <p>摩登碗-白</p>
              </div>

              <div class="skuComment">
                    <p class="warning">请至少填写一件商品的评价</p>
                    <p class="starts">
                        <span>商品评分</span>
                        <i class="iconfont icon-xingxing1"></i>
                        <i class="iconfont icon-xingxing1"></i>
                        <i class="iconfont icon-xingxing1"></i>
                        <i class="iconfont icon-xingxing1"></i>
                        <i class="iconfont icon-xingxing1"></i>
                        <span>0分</span>
                    </p>
                    <p>
                        <span>评价晒单</span>
                        <textarea cols="50" rows="5"></textarea>
                    </p>
              </div>
          </div>

          <div class="submit">
              <span>发表</span>
              <span><input type="checkbox">匿名评价</span>
          </div>
      </div>
  </div>
</template>

<script>
import topNav from "@/components/topNav"

export default {  
name: 'comment',
components: {topNav}
}
</script>

<style lang="less" scoped>
    .commentWrap{
        margin: 0px auto;
        width: 1000px;
        font-size: 12px;
        padding: 20px;

        .header{
            >h5{
                margin-bottom: 5px;
            }
            text-align: center;
            >:nth-child(2){
                font-size: 12px;
                >:nth-child(2){
                    margin-right: 20px;
                }

                >:nth-child(1), >:nth-child(3){
                    color: #999999;
                }
            }
        }

        .deliverComment{
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            background-color: white;
            margin-bottom: 10px;
            margin-top: 20px;
            height: 60px;
            justify-items: center;

            >:nth-child(1){
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .skuArea{
            display: grid;
            grid-template-columns: 1fr 3fr;

            .skuInformation{
                background-color: white;
                text-align: center;
                width: 300px;
                padding: 40px;

                .imgWrap{
                    width: 50px;
                    height: 50px;
                    text-align: center;
                    margin: 0 auto;

                    >img{
                        max-width: 50px;
                        max-height: 50px;
                    }
                }

                >*{
                    &:not(:nth-child(1)){
                        margin-top: 15px;
                    }
                }
            }

            .skuComment{
                padding: 30px;
                background-color: white;

                >:nth-child(1){
                    color: #FC9869;
                }

                >:not(:nth-child(1)){
                    margin-top: 20px;
                }

                >:nth-child(2){
                    margin-right: 40px;
                    justify-content: start;
                }

                >:nth-child(3){
                    >span{
                        vertical-align: top;
                        margin-right: 5px;
                    }
                }
            }
        }

        .submit{
            background-color: white;
            margin-top: 10px;
            padding: 20px 0px;
            text-align: center;
            >:nth-child(1){
                width: 160px;
                font-size: 16px;
                display: inline-block;
                text-align: center;
                background-color: #E43C3F;
                color: white;
                height: 35px;
                line-height: 35px;
                border-radius: 3px;
            }

            >:nth-child(2){
                >input{
                    margin-left: 15px;
                    margin-right: 5px;
                    vertical-align: top;
                    margin-top: 12px;
                }
            }
        }

        .starts{
            display: flex;
            justify-content: center;
            align-items: center;

            >:nth-child(1){
                margin-right: 5px;
            }

            i{
                color: white;
                text-shadow: 0px 0px 1px black;
            }

            i:hover{
                color: #E43C3F;
            }
        }
    }
</style>