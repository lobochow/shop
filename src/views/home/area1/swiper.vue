<template>
    <div class="swiperWrap">
        <div class="swiper">
            <swiperItem v-for="(imgUrl, index) in imgList" :key="index">
                <img :src="imgUrl" alt="homeSwiperPic" />
            </swiperItem>
        </div>
        <div class="picControl">
            <i class="left iconfont icon-xiangzuo" @click="moveImg('left')"></i>
            <i class="right iconfont icon-xiangyou1" @click="moveImg('right')"></i>
        </div>
        <div class="picDot">
            <div class="dot" v-for="(imgUrl, index) in imgList" :key="index" :class="{ selected: currentImgIndex == index }" @click="jumptoImg(index)">
                <div class="outCircle">
                    <div class="inCircle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import swiperItem from '@/views/home/area1/swiperItem'

export default {
    name: "swiper",
    components: { swiperItem },
    data() {
        return {
            imgVCs: [],
            imgList: [],
            currentImgIndex: 0,
        };
    },
    methods: {
        moveImg(flag) {
            let activedIndex = this.currentImgIndex;
            if(flag == 'left') {
                activedIndex -= 1;
                if(activedIndex < 0) {
                    activedIndex = this.imgList.length - 1;
                }
                this.imgVCs.forEach((vc,indexSelf) => vc.translateItem(flag, activedIndex, this.currentImgIndex, indexSelf));
            }

            if(flag == 'right') {
                activedIndex += 1;
                if(activedIndex >= this.imgList.length){
                    activedIndex = 0;
                }
                this.imgVCs.forEach((vc,indexSelf) => vc.translateItem(flag, activedIndex, this.currentImgIndex, indexSelf));
            }

            this.currentImgIndex = activedIndex;
        },
        jumptoImg(index) {
            this.imgVCs.forEach((vc, index2) => vc.translateItem('right',index,this.currentImgIndex, index2));
            this.currentImgIndex = index;
        }
    },
    mounted() {
        //获取图片信息
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                    this.imgList = JSON.parse(xhr.responseText);
                    //获取图片子组件
                    this.$nextTick(() => {
                        this.imgVCs = this.$children.filter(vc => vc.$options.name == 'swiperItem');
                        this.imgVCs.forEach((item, index) => item.initItem(this.currentImgIndex, index));
                    });
                } else {
                    console.log("获取首页轮播图失败!");
                }
            }
        };
        xhr.open("get", "/v1/homeSwiper", true);
        xhr.send(null);
    },
};
</script>

<style lang="less" scoped>
.swiperWrap {
    height: 470px;
    width: 580px;
    overflow: hidden;
    position: relative;
    background-color: white;
}

.swiper {
    position: relative;
    transition: 0.3s;
    left: 0;

    .imgWrap {
        width: 580px;
        height: 470px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        position: absolute;
        left: 0;
        top: 0;
        img {
            max-width: 580px;
            max-height: 470px;
        }
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
</style>