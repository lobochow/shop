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
          <div class="rightArea"></div>
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
                border: 1px solid black;
                position: relative;

                .showImg{
                    position: relative;
                    text-align: center;
                    width: 400px;
                    height: 400px;
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
                    border:rgb(71, 90, 142) 1px solid;
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
                border: 1px solid black;
            }
        }
    }
</style>