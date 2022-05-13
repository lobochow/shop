<template>
    <div class="easyEnter">
        <div class="user">
            <div class="up">
                <div class="avator">
                    <img src="@/assets/images/avator.png" alt="avator" />
                </div>
                <div class="userLoginOut">
                    <p>Hi~欢迎逛京东</p>
                    <p>
                        <span>登陆</span>
                        |
                        <span>注册</span>
                    </p>
                </div>
            </div>
            <div class="userAdvantage">
                <span class="new">新人福利</span>
                <span class="pro">PLUS会员</span>
            </div>
        </div>

        <div class="newsContainer">
            <div class="title">
                <span>京东快报</span>
                <span>
                    更多
                    <i class="iconfont icon-xiangyou1"></i>
                </span>
            </div>
            <p class="news">
                <span>热议</span>
                <span>新闻的大概内容，多出部分省略号</span>
            </p>
            <p class="news">
                <span>热议</span>
                <span>新闻的大概内容，多出部分省略号</span>
            </p>
            <p class="news">
                <span>热议</span>
                <span>新闻的大概内容，多出部分省略号</span>
            </p>
            <p class="news">
                <span>热议</span>
                <span>新闻的大概内容，多出部分省略号</span>
            </p>
        </div>

        <div class="service">
            <div class="serviceItem" @click='showQuickBook'>
                <i class="iconfont icon-shouji"></i>
                <span>话费</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-feijichang"></i>
                <span>机票</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-jiudian"></i>
                <span>酒店</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-youxi"></i>
                <span>游戏</span>
            </div>
            <div class="serviceItem">
                <i
                    class="
                        iconfont
                        icon-zhengzhouyinhangAPPtubiaodiergaolunkuohuachunse-47
                    "
                ></i>
                <span>加油卡</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-huochezhan"></i>
                <span>火车票</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-duoren"></i>
                <span>众筹</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-licaishouyi"></i>
                <span>理财</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-zhangdan_o"></i>
                <span>白条</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-dianying"></i>
                <span>电影票</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-qiye"></i>
                <span>企业购</span>
            </div>
            <div class="serviceItem">
                <i class="iconfont icon-lipinka"></i>
                <span>礼品卡</span>
            </div>
            <div class="quickBook" ref="quickBook">充话费</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "easyEntry",
    methods: {
        showQuickBook(){
            console.log(this.$refs.quickBook.classList.add('up'));
            let firstline = document.querySelectorAll('.serviceItem');
            for(let i = 0; i < 3; i++){
                firstline[i].classList.add('up1');
            }
        }
    }
};
</script>

<style lang='less'>
.easyEnter {
    position: relative;
    height: 470px;
    width: 200px;
    background-color: white;
    padding: 10px;

    .user {
        position: relative;
        margin-bottom: 10px;
        .up {
            display: flex;
            .avator {
                display: inline-block;
                margin-right: 10px;
                border: white 2px solid;
                border-radius: 50%;
                overflow: hidden;
                width: 40px;
                height: 40px;
                box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
                img {
                    width: 40px;
                }
            }

            .userLoginOut {
                display: inline-block;
                font-size: 12px;
                line-height: 20px;
                margin-left: 15px;
            }

            ::after {
                content: " ";
                height: 1px;
                background: linear-gradient(
                    90deg,
                    rgb(255, 255, 255),
                    #ccc,
                    #ccc,
                    white
                );
                position: absolute;
                left: 15px;
                right: 15px;
                bottom: -5px;
            }
        }

        .userAdvantage {
            margin-top: 15px;
            font-size: 14px;
            display: flex;
            justify-content: space-around;
            .new {
                display: inline-block;
                color: white;
                background-color: #e1251b;
                text-align: center;
                line-height: 26px;
                width: 80px;
                height: 26px;
                border-radius: 13px;
            }
            .pro {
                display: inline-block;
                background-color: #363634;
                color: #e5ca6a;
                text-align: center;
                line-height: 26px;
                width: 80px;
                height: 26px;
                border-radius: 13px;
            }
        }
    }

    .newsContainer {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        .title {
            display: flex;
            align-items: center;
            justify-content: space-between;

            > :nth-child(1) {
                font-size: 16px;
                font-weight: bold;
            }

            > :nth-child(2) {
                font-size: 8px;
                color: #999999;
                i {
                    margin-left: -4px;
                    font-size: 6px;
                }

                &:hover {
                    color: #e1251b;
                    cursor: pointer;
                }
            }
        }

        .news {
            display: flex;
            align-items: center;
            margin-top: 5px;
            > :nth-child(1) {
                margin-right: 5px;
                padding: 1px 5px;
                font-size: 14px;
                flex-shrink: 0;
                color: #e1251b;
                background-color: #fdeeed;
            }
            > :nth-child(2) {
                font-size: 14px;
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-right: 10px;
            }
        }

        ::after {
            content: " ";
            height: 1px;
            background: linear-gradient(
                90deg,
                rgb(255, 255, 255),
                #ccc,
                #ccc,
                white
            );
            position: absolute;
            left: 15px;
            right: 15px;
            bottom: -5px;
        }
    }

    .service {
        position: absolute;
        width: 180px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        overflow: hidden;

        .serviceItem {
            top: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50px;
            margin-top: 8px;
            transition: 0.3s;
            i {
                font-size: 32px;
            }
            span {
                font-size: 12px;
            }

            &.up1{
                position: relative;
                top: -40px;
            }

            &:nth-child(1),
            &:nth-child(8),
            &:nth-child(11) {
                i {
                    color: #5aaae5;
                }
            }

            &:nth-child(2),
            &:nth-child(4),
            &:nth-child(12) {
                i {
                    color: #f2a234;
                }
            }

            &:nth-child(3),
            &:nth-child(5),
            &:nth-child(7) {
                i {
                    color: #3ed6c6;
                }
            }

            &:nth-child(6),
            &:nth-child(9),
            &:nth-child(10) {
                i {
                    color: #ec6b62;
                }
            }
        }

        .quickBook {
            width: 180px;
            height: 240px;
            background-color: rgba(255, 255, 255, 0);
            position: absolute;
            top: 230px;
            transition: 0.3s;
            &.up{
                top: 20px;
                background-color: rgb(195, 234, 233);
            }
        }
    }
}
</style>