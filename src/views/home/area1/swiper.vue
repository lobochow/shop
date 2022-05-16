<template>
    <div class="swiper">
        <img src="@/assets/images/samplePic.png" alt="pic" />
        <img src="@/assets/images/samplePic2.png" alt="pic" />
        <div class="picControl">
            <i class="left iconfont icon-xiangzuo"></i>
            <i class="right iconfont icon-xiangyou1"></i>
        </div>
        <div class="picDot">
            <div class="dot">
                <div class="outCircle">
                    <div class="inCircle"></div>
                </div>
            </div>
            <div class="dot">
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
};
</script>

<style lang="less">
.swiper {
    height: 470px;
    width: 580px;
    background-color: white;
    overflow: hidden;
    position: relative;

    img {
        width: 580px;
    }

    .picControl {
        i {
            position: absolute;
            color: #e1251b;
            z-index: 1;
            top: 230px;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, 0.2);
            color: #cfcfcf;
            line-height: 30px;
            text-align: center;
            display: block;
        }
        i:hover {
            background: rgba(0, 0, 0, 0.5);
        }
        .right {
            left: 550px;
            border-radius: 15px 0 0 15px;
        }
        .left {
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

        .dot:hover {
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