<template>
    <div class="swiper">
        <div class="imgWrap" v-for="(imgUrl, index) in imgList" :key="index">
            <img :src="imgUrl" alt="homeSwiperPic" />
        </div>
        <div class="picControl">
            <i class="left iconfont icon-xiangzuo"></i>
            <i class="right iconfont icon-xiangyou1"></i>
        </div>
        <div class="picDot">
            <div class="dot" v-for="(imgUrl, index) in imgList" :key="index" :class="{selected: currentImgIndex == index }">
                <div class="outCircle">
                    <div class="inCircle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "swiper",
    data() {
        return {
            imgList: [],
            currentImgIndex: 0
        }
    },
    mounted(){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4){
                if(xhr.status === 200){
                    this.imgList = JSON.parse(xhr.responseText);
                }else{
                    console.log('获取首页轮播图失败!');
                }
            }
        }
        xhr.open('get', '/v1/homeSwiper', true);
        xhr.send(null);
    }
};
</script>

<style lang="less">
.swiper {
    height: 470px;
    width: 580px;
    background-color: white;
    overflow: hidden;
    position: relative;
    display: flex;

    .imgWrap{
        width: 580px;
        height: 470px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        img {
            max-width: 580px;
            max-height: 470px;
        }
    }

    .picControl {
        position: absolute;
        width: 100%;
        top: 220px;
        i {
            color: #e1251b;
            z-index: 1;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, 0.2);
            color: #cfcfcf;
            line-height: 30px;
            text-align: center;
        }
        i:hover {
            background: rgba(0, 0, 0, 0.5);
        }
        .right {
            float: right;
            border-radius: 15px 0 0 15px;
        }
        .left {
            float: left;
            border-radius: 0 15px 15px 0;
        }
    }

    .picDot {
        position: absolute;
        bottom: 10px;
        left: 10px;

        .dot {
            display: inline-block;

            .outCircle {
                position: relative;
                width: 14px;
                height: 14px;
                background-color: transparent;
                border-radius: 50%;
            }
            .inCircle {
                width: 8px;
                height: 8px;
                background-color: #cfcfcf;
                border-radius: 50%;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
        }

        .dot.selected {
            .outCircle {
                background-color: rgba(153, 153, 153, 0.4);
            }
            .inCircle {
                background-color: white;
            }
        }
    }
}
</style>