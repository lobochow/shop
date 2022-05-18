<template>
  <div class="detailWrap">
      <div class="detail">
          <div class="leftArea">
              <div class="showImg" @mousemove="zoomImg">
                  <img src="@/assets/images/spuImg/iphone.png" alt="iphone">
                  <div class="zoomArea" ref="zoomArea"></div>
              </div>
              <div class="selectImg">
                  <i class="iconfont icon-xiangzuo" @click="imgListMoveLeft"></i>
                  <div class="imgListWrap">
                      <ul class="imgList" ref="imgList">
                          <li><img src="@/assets/images/spuImg/iphone.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone2.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone3.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone4.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone5.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone6.png" alt="iphone"></li>
                          <li><img src="@/assets/images/spuImg/iphone7.png" alt="iphone"></li>
                      </ul>
                  </div>
                  <i class="iconfont icon-xiangyou1" @click="imgListMoveRight"></i>
              </div>
              <div class="imgZoomWrap">
                  <div class="imgWrap" ref="imgWrap"><img src="@/assets/images/spuImg/iphone.png" alt="zoomImg"></div>
              </div>
          </div>
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
                          <span>5年只换不修</span>
                          <div class="list">
                                  <input type="checkbox">
                                  <span>5年只换不修</span>
                          </div>
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
export default {
name: 'detail',
methods:{
    imgListMoveLeft(){
        let currentLeft = window.getComputedStyle(this.$refs.imgList, null).left;

        currentLeft = currentLeft.replace('px', '');

        this.$refs.imgList.style.left = currentLeft - 73 + 'px';
    },
    imgListMoveRight(){
        let currentLeft = window.getComputedStyle(this.$refs.imgList, null).left;

        currentLeft = currentLeft.replace('px', '');

        this.$refs.imgList.style.left = +currentLeft + 73 + 'px';
    },
    zoomImg(e){
        const zoomArea = this.$refs.zoomArea;
        const zoomStyle = window.getComputedStyle(zoomArea, null);

        let left = +zoomStyle.left.replace('px','') + e.layerX - 100;
        if(left < 0){
            left = 0;
        }else if(left > 198){
            left = 198;
        }
        zoomArea.style.left = left + 'px';

        let top = +zoomStyle.top.replace('px','') + e.layerY - 100;
        if(top < 0){
            top = 0;
        }else if(top > 200){
            top = 200;
        }
        zoomArea.style.top = top + 'px';

        this.$refs.imgWrap.style.left = 200 + -2*left + 'px';

        this.$refs.imgWrap.style.top = 200 + -2*top + 'px';
    }
}

}
</script>

<style lang="less">
    .detailWrap{
        width: 100%;
        min-width: 1000px;
        background-color: white;
        .detail{
            width: 1000px;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            margin: 0 auto;
            
            .leftArea{
                width: 400px;
                position: relative;

                .showImg{
                    position: relative;
                    text-align: center;
                    width: 400px;
                    height: 402px;
                    border: 1px solid black;
                    img{
                        max-width: 400px;
                        max-height: 400px;
                    }

                    .zoomArea{
                        visibility: hidden;
                        position: absolute;
                        width: 200px;
                        height: 200px;
                        border: 1px solid rgb(0, 0, 0, 0.5);
                        background-color: rgba(123,123,123, 0.3);
                        left: 0px;
                        top: 0px;
                    }

                    &:hover{
                        ~.imgZoomWrap,
                        .zoomArea{
                            visibility: visible;
                        }
                    }
                }

                .selectImg{
                    width: 400px;
                    height: 100px;
                    display: flex;
                    align-items: center;
                    position: relative;
                    left: -1px;

                    i{
                        flex-shrink: 0;
                        width: 50px;
                        font-size: 50px;
                        color: #DFDFDF;
                    }

                    .imgListWrap{
                        overflow: hidden;
                        .imgList{
                            position: relative;
                            list-style: none;
                            display: flex;
                            flex-shrink: 0;
                            width: 300px;
                            transition: 0.3s;
                            left: 0px;
                            li{
                                margin-right: 13px;
                                flex-shrink: 0;
                                min-width: 60px;
                                border: 2px solid transparent;
                                text-align: center;
                                img{
                                    max-width: 60px;
                                    max-height: 60px;
                                }

                                &:hover{
                                    border: 2px solid #E2231A;
                                }
                            }
                        }
                    }
                }

                .imgZoomWrap{
                    visibility: hidden;
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    overflow: hidden;
                    border: 1px solid rgb(151, 150, 150);

                    left: 399px;
                    top: -1px;
                    z-index: 10;

                    .imgWrap{
                        width: 400px;
                        height: 400px;
                        text-align: center;
                        position: absolute;
                        background-color: white;
                        img{
                            max-width: 100%;
                            max-height: 100%;
                        }
                        transform: scale(2);
                        top: 200px;
                        left: 200px;
                    }
                }
            }

            .rightArea{
                width: 550px;
                height: 400px;

                >:not(:nth-child(1)){
                    margin-top: 10px;
                }

                h5{
                    color:#666666;
                }

                .price{
                    background-color: #F3F3F3;
                    padding: 10px;
                    >:nth-child(1){
                        font-size: 10px;
                        letter-spacing: 5px;
                        color: #999999;
                    }

                    >:nth-child(2){
                        margin-left: 10px;
                        color: #E2231A;
                    }

                    >:nth-child(3){
                        margin-left: 10px;
                        font-size: 12px;
                        color: #007BBD;
                    }

                    >:nth-child(4){
                        border-left: solid 1px #CCC;
                        margin: 0px 10px 0px 0px;
                        float: right;
                        font-size: 10px;
                        p{
                            width: 100%;
                            text-align: center;
                            margin: 0px 10px 0px 0px;
                        }
                    }
                }

                .weight{
                    padding: 10px;
                    *{
                        font-size: 10px;
                    }

                    >:nth-child(1){
                        color: #999999;
                        letter-spacing: 20px;
                    }
                }

                .skuList{
                    padding: 10px;
                    font-size: 10px;
                    display: flex;
                    align-items: center;
                    >:nth-child(1){
                        color: #999999;
                        vertical-align: middle;
                    }

                    ul{
                        margin: 0px;
                        padding-left: 10px;
                        list-style: none;
                        display: flex;
                        align-items: center;

                        li{
                            border: #CCCCCC 1px solid;
                            img{
                                max-width: 30px;
                                max-height: 30px;
                                vertical-align: middle;
                            }

                            span{
                                margin: 0px 10px;
                            }

                            &:hover{
                                border: #E2231A 1px solid;
                            }
                        }
                    }
                }

                .service{
                    padding: 10px;
                    display: flex;


                    >span{
                        font-size: 10px;
                        color: #999999;
                    }

                    ul{
                        list-style: none;
                        display: flex;
                        li{
                            font-size: 12px;
                            position: relative;
                            margin-left: 10px;

                            >span{
                                position: relative;
                                z-index: 2;
                                padding: 2px;
                                border: 1px solid #ccc;

                                &:hover{
                                    border: 1px solid #E2231A;
                                    border-bottom: 1px solid white;

                                    ~.list{
                                        visibility: visible;
                                    }
                                }
                            }

                            .list{
                                position: absolute;
                                padding: 5px;
                                display: flex;
                                margin-top: 2px;
                                visibility: hidden;
                                width: 200px;
                                height: 30px;
                                border: 1px solid #ccc;
                                background-color: white;

                                >input{
                                    margin-top: 2px;
                                }
                            }
                        }
                    }
                }

                .addCart{
                    margin-left: 10px;

                    >input{
                        font-size: 32px;
                        width: 60px;
                        text-align: center;
                        vertical-align: middle;
                        border: 1px solid #ccc;

                        &::-webkit-inner-spin-button,
                        &::-webkit-outer-spin-button{
                            opacity: 1;
                        }

                        &:focus{
                            outline: none;
                        }
                    }

                    >span{
                        margin-left: 10px;
                        display: inline-block;
                        background-color: #E2231A;
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