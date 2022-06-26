<template>
    <div class="leftArea">
        <div class="showImg" @mousemove="zoomImg">
            <img :src="showImgInfo.url" :alt="showImgInfo.name">
            <div class="zoomArea" ref="zoomArea"></div>
        </div>
        <div class="selectImg">
            <i class="iconfont icon-xiangzuo" @click="imgListMoveLeft"></i>

            <div class="imgListWrap">
                <ul class="imgList" :style="imgListStyle">
                    <li v-for="(swiperItem, index) in swiperImgs" :key="index" @click="changeCurrentImg(index)"><img :src="swiperItem.url" :alt="swiperItem.name"></li>
                </ul>
            </div>

            <i class="iconfont icon-xiangyou1" @click="imgListMoveRight"></i>
        </div>
        <div class="imgZoomWrap">
            <div class="imgWrap" ref="imgWrap"><img :src="showImgInfo.url" alt="zoomImg"></div>
        </div>
    </div>
</template>

<script>
import { debounce } from '@/utils/index.js'

export default {
    name: "zoomSwiper",
    props: ['swiperImgs'],
    data() {
        return {
            currentIndex: 0,
            showImgInfo: {},
            lineFirstIndex: 0,
            lineLastIndex: -1,
            swiperLength: 4,
            imgListStyle: {
                left: 0
            }
        }
    },
    methods: {
        imgListMoveLeft() {
            if (this.currentIndex > 0) {
                this.imgListStyle.left = -(this.currentIndex-1) * 75 + 'px'
                this.currentIndex--;
                this.lineLastIndex--;
            }
        },
        imgListMoveRight() {
            if (this.lineLastIndex < this.swiperImgs.length - 1) {
                this.imgListStyle.left = -(this.currentIndex+1) * 75 + 'px'

                this.currentIndex++;
                this.lineLastIndex++;
            }
        },
        zoomImg(e) {
            const zoomArea = this.$refs.zoomArea;
            const zoomStyle = window.getComputedStyle(zoomArea, null);

            let left = +zoomStyle.left.replace('px', '') + e.layerX - 100;
            if (left < 0) {
                left = 0;
            } else if (left > 198) {
                left = 198;
            }
            zoomArea.style.left = left + 'px';

            let top = +zoomStyle.top.replace('px', '') + e.layerY - 100;
            if (top < 0) {
                top = 0;
            } else if (top > 200) {
                top = 200;
            }
            zoomArea.style.top = top + 'px';

            this.$refs.imgWrap.style.left = 200 + -2 * left + 'px';

            this.$refs.imgWrap.style.top = 200 + -2 * top + 'px';
        },
        changeCurrentImg(index) {
            this.showImgInfo = this.swiperImgs[index];
        }
    },
    watch: {
        swiperImgs() {
            this.showImgInfo = this.swiperImgs[0];
            this.lineLastIndex = Math.min(this.swiperImgs.length, this.swiperLength) - 1;
        }
    }
}
</script>

<style lang="less" scoped>
.leftArea {
    width: 400px;
    position: relative;

    .showImg {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        width: 400px;
        height: 402px;
        border: 1px solid black;
        img {
            max-width: 400px;
            max-height: 400px;
        }

        .zoomArea {
            visibility: hidden;
            position: absolute;
            width: 200px;
            height: 200px;
            border: 1px solid rgb(0, 0, 0, 0.5);
            background-color: rgba(123, 123, 123, 0.3);
            left: 0px;
            top: 0px;
        }

        &:hover {
            ~ .imgZoomWrap,
            .zoomArea {
                visibility: visible;
            }
        }
    }

    .selectImg {
        width: 400px;
        height: 100px;
        display: flex;
        align-items: center;
        position: relative;
        left: -1px;

        i {
            flex-shrink: 0;
            width: 50px;
            font-size: 50px;
            color: #dfdfdf;
        }

        .imgListWrap {
            overflow: hidden;
            .imgList {
                position: relative;
                list-style: none;
                display: flex;
                flex-shrink: 0;
                width: 300px;
                transition: 0.3s;
                left: 0px;
                li {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;

                    width: 60px;
                    margin-right: 15px;

                    border: 2px solid transparent;
                    img {
                        max-width: 56px;
                        max-height: 56px;
                    }

                    &:hover {
                        border: 2px solid #e2231a;
                    }
                }
            }
        }
    }

    .imgZoomWrap {
        visibility: hidden;
        position: absolute;
        width: 400px;
        height: 400px;
        overflow: hidden;
        border: 1px solid rgb(151, 150, 150);

        left: 399px;
        top: -1px;
        z-index: 10;

        .imgWrap {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;

            width: 400px;
            height: 400px;

            background-color: white;
            img {
                max-width: 100%;
                max-height: 100%;
            }
            transform: scale(2);
            top: 200px;
            left: 200px;
        }
    }
}
</style>