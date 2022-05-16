<template>
  <div class="selectorContainer">
      <div class="brand">
          <span class="title">品牌：</span>
          <div class="brandImgContainer">
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/huawei.png" alt="huawei"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/apple.png" alt="apple"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/honor.png" alt="honor"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/lg.png" alt="lg"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/meizu.png" alt="meizu"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/oppo.png" alt="oppo"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/nokia.png" alt="nokia"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/samsung.png" alt="samsung"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/sony.png" alt="sony"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/xiaomi.png" alt="xiaomi"></div>
              <div class="imgContainer"><img src="@/assets/images/phoneBrand/zte.png" alt="zte"></div>
          </div>
      </div>

      <div class="attribute">
          <span class="title">电脑组件：</span>
              <ul class="attributeList">
                  <li>显示器</li>
                  <li>显示器配件</li>
                  <li>组装电脑</li>
                  <li>显卡</li>
                  <li>特殊商品</li>
              </ul>
      </div>

      <div class="senior">
            <span>高级选项：</span>
            <ul class="attrList">
                <li>类型<i class="iconfont icon-xiangxia"></i></li>
                <li>面板<i class="iconfont icon-xiangxia"></i></li>
                <li>屏幕比例<i class="iconfont icon-xiangxia"></i></li>
                <li>接口<i class="iconfont icon-xiangxia"></i></li>
                <li>特性<i class="iconfont icon-xiangxia"></i></li>
                <li>HDR<i class="iconfont icon-xiangxia"></i></li>
                <li>响应时间<i class="iconfont icon-xiangxia"></i></li>
                <li>特征<i class="iconfont icon-xiangxia"></i></li>
                <li>升降台<i class="iconfont icon-xiangxia"></i></li>
                <li>支架屏数<i class="iconfont icon-xiangxia"></i></li>
            </ul>
            <div class="seniorDetail">
                <ul>
                    <li>曲面屏</li>
                    <li>直面屏</li>
                    <li>触控屏</li>
                    <li>大屏显示器</li>
                </ul>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'selector'
}
</script>

<style lang="less">
    .selectorContainer{
        width: 1000px;
        margin: 10px auto 0px auto;
        border-top: 1px solid #DDDDDD;
        border-bottom: 1px solid #DDDDDD;
        padding: 10px;
        .brand{
            display: flex;
            .title{
                flex-shrink: 0;
                font-size: 12px;
                font-weight: bold;
                width: 100px;
            }
            .brandImgContainer{
                display: flex;
                flex-wrap: wrap;
                background-color: white;
                padding: 10px;
                .imgContainer{
                    width: 150px;
                    height: 50px;
                    text-align: center;
                    border: 1px solid #DDDDDD;
                    margin: -1px 0 0 -1px;

                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
            }
        }

        .attribute{
            display: flex;
            border-top: 1px solid #DDDDDD;
            border-bottom: 1px solid #DDDDDD;
            align-items: center;
            .title{
                font-size: 12px;
                font-weight: bold;
                width: 100px;
            }
            .attributeList{
                display: flex;
                list-style: none;
                flex-grow: 1;
                justify-content: space-around;
                background-color: white;
                height: 100%;
                li{
                    display: inline-block;
                    height: 100%;
                    font-size: 12px;
                    color: #005AA0;
                    line-height: 30px;
                }
            }
        }

        .senior{
            display: flex;
            font-size: 12px;
            border-bottom: 1px solid #DDDDDD;   
            align-items: center;
            position: relative;
            span{
                width: 100px;
                font-weight: bold;
            }
            .attrList{
                list-style: none;
                display: flex;
                flex-grow: 1;
                align-items: center;
                background-color: white;
                justify-content: space-between;
                padding: 10px;
                li{
                    color: #005AA0;
                    border: 1px solid #DDDDDD;
                    padding: 5px;
                    i{
                        vertical-align: middle;
                        color: #C1C1C1;
                    }

                    &:hover{
                        ~.seniorDetail{
                            visibility: visible;
                        }
                    }
                }
            }

            .seniorDetail{
                visibility: hidden;
                position: absolute;
                left: 0px;
                top: 40px;
                width: 980px;
                border: 1px solid rgba(0, 0, 0, 0.4);
                background-color: white;
                ul{
                    list-style: none;
                    display: flex;
                    li{
                        color: #005AA0;
                        padding: 5px;
                        margin-right: 30px;
                    }
                }
            }
        }
    }
</style>