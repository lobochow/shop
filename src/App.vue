<template>
  <div id="app">
        <header>
            <!-- 顶部导航栏 -->
            <div class="topNav">
                <div class="container">
                    <div class="location">
                        <i class="iconfont icon-didian"></i>
                        <span>广东</span>
                    </div>
                    <div class="userNav">
                        <div class="acount">
                                <span>你好，请登录</span>
                                <span>免费注册</span>
                        </div>
                        <span>我的订单</span>
                        <span>我的京东</span>
                        <span>京东会员</span>
                        <span>企业采购</span>
                        <span>客户服务</span>
                        <span>网站导航</span>
                        <span>手机京东</span>
                        <span>网站无障碍</span>
                    </div>
                </div>
            </div>

            <!-- 搜索框区域 -->
            <div class="searchArea">
                <!-- 大logo -->
                <div class="logo">
                    <img src="../public/logo.png" alt="logo">
                </div>

                <div class="search">
                    <div class="searchBar">
                        <i class="graph iconfont icon-zhaoxiangji"></i>
                        <input type="text" placeholder="搜索">
                        <span>
                            <i class="iconfont icon-Fangdajing"></i>
                        </span>
                    </div>
                    <div class="cart">
                        <span class="cartNum">0</span>
                        <i class="iconfont icon-gouwuchekong"></i>
                        我的购物车
                    </div>
                    <ul class="hotSearch">
                        <li>车品特惠</li>
                        <li>京东京造</li>
                        <li>智能手表</li>
                        <li>大药房</li>
                        <li>牛奶秒杀</li>
                        <li>限量5折</li>
                    </ul>
                    <ul class="searchMore">
                        <li>秒杀</li>
                        <li>优惠券</li>
                        <li>PLUS会员</li>
                        <li>品牌闪购</li>
                        <li>拍卖</li>
                        <li>京东家电</li>
                        <li>京东超市</li>
                        <li>京东生鲜</li>
                        <li>京东国际</li>
                        <li>京东云</li>
                    </ul>
                </div>
            </div>
        </header>

        <!-- 内容区 -->
        <div class="content">
            <div class="area1">
                <div class="category">
                    <div>
                        <span class="cate1">分类1</span>
                        <span>/</span>
                        <span class="cate1">分类2</span>
                    </div>
                </div>

                <div class="swiper">
                    <img src="../public/samplePic.png" alt="pic">
                    <img src="../public/samplePic2.png" alt="pic">
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

                <div class="easyEnter">
                    <div class="user">
                        <div class="up">
                            <div class="avator">
                                <img src="../public/avator.png" alt="avator">
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
                        <div>
                            <i class="iconfont icon-shouji"></i>
                            <span>话费</span>
                        </div>
                        <div>
                            <i class="iconfont icon-feijichang"></i>
                            <span>机票</span>
                        </div>
                        <div>
                            <i class="iconfont icon-jiudian"></i>
                            <span>酒店</span>
                        </div>
                        <div>
                            <i class="iconfont icon-youxi"></i>
                            <span>游戏</span>
                        </div>
                        <div>
                            <i class="iconfont icon-zhengzhouyinhangAPPtubiaodiergaolunkuohuachunse-47"></i>
                            <span>加油卡</span>
                        </div>
                        <div>
                            <i class="iconfont icon-huochezhan"></i>
                            <span>火车票</span>
                        </div>
                        <div>
                            <i class="iconfont icon-duoren"></i>
                            <span>众筹</span>
                        </div>
                        <div>
                            <i class="iconfont icon-licaishouyi"></i>
                            <span>理财</span>
                        </div>
                        <div>
                            <i class="iconfont icon-zhangdan_o"></i>
                            <span>白条</span>
                        </div>
                        <div>
                            <i class="iconfont icon-dianying"></i>
                            <span>电影票</span>
                        </div>
                        <div>
                            <i class="iconfont icon-qiye"></i>
                            <span>企业购</span>
                        </div>
                        <div>
                            <i class="iconfont icon-lipinka"></i>
                            <span>礼品卡</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
      borderChild(parent){
            for(let child of parent.childNodes){
                child.style.backgroundColor = `rgb(${Math.random()  *255},${Math.random()*255},${Math.random()*255})`;
                if(child.childElementCount != 0){
                    this.borderChild(child);
                }
            }
      }
  },
  mounted(){
      let rootDom = document.querySelector('#app');
      //this.borderChild(rootDom);
  }
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    background-color: rgb(244,244,244);
}

#app{
    header{
        width: 100%;
        .topNav{
            margin: 0 auto;
            background-color: rgb(227,228,229);
            padding: 10px 0;
            .container{
                width: 80%;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin: 0 auto;
                justify-content: space-between;
                font-size: 8px;
                color: rgb(153,153,153);

                .location{
                    i{
                        font-size: 12px;
                        margin-right: 5px;
                        color: #E1251B;
                    }
                }

                .userNav{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    >span::before{
                        content: '';
                        width: 1px;
                        height: 14px;
                        line-height: 20px;
                        background-color: rgb(204,204,204);
                        display: inline-block;
                        margin: 0 1vw;
                        vertical-align: middle;
                    }

                    >.acount span:nth-child(2){
                        margin-left: 1vw;
                    }
                }
            }
        }

        .searchArea{
            background-color: white;
            display: flex;
            height: 150px;

            .logo{
                width: 200px;
                height: 100%;
                >img{
                    width: 100px;
                    transform: translateX(50px) translateY(30px);
                }
            };

            .search{

                .searchBar{
                    position: relative;
                    display: inline-block;
                    margin-top: 30px;
                    .graph{
                        position: absolute;
                        left: 390px;
                        top: 8px;
                        font-size: 25px;
                    }
                    .graph:hover{
                        color: #E1251B;
                        cursor: pointer;
                    }
                    >input{
                        box-sizing: border-box;
                        width: 430px;
                        height: 40px;
                        border: 2px solid rgb(226,35,26);
                        vertical-align: top;
                        padding-left: 10px;
                    }
                    >input:focus{
                        outline: none;
                    }
                    >input:focus::-webkit-input-placeholder{
                        color: #CFCFCF;
                    }
                    >span{
                        display: inline-block;
                        background-color: rgb(226,35,26);
                        height: 40px;
                        color: white;
                        line-height: 40px;
                        width: 80px;
                        text-align: center;

                        i{
                            font-size: 30px;
                        }
                    }
                }

                .cart{
                    position: relative;
                    display: inline-block;
                    font-weight: 500;
                    font-size: 16px;
                    height: 40px;
                    border: 1px solid rgb(238,238,238);
                    color: rgb(225,37,27);
                    vertical-align: top;
                    line-height: 40px;
                    margin-left: 20px;
                    margin-top: 30px;
                    padding: 0 20px;

                    .cartNum{
                        vertical-align: middle;
                        position: absolute;
                        background-color: rgb(225,37,27);
                        height: 15px;
                        width: 20px;
                        border-radius: 15px;
                        color: white;
                        left: 30px;
                        top: 5px;
                        line-height: 15px;
                        text-align: center;
                        font-size: 10px;
                    }

                    i{
                        font-size: 20px;
                        margin-right: 10px;
                    }
                };

                .hotSearch{
                    font-size: 14px;
                    color: #999999;
                    margin-top: 5px;
                    list-style: none;

                    li{
                        display: inline-block;
                    }

                    li:not(:nth-child(1)){
                        margin-left: 10px;
                    }
                }

                .searchMore{
                    list-style: none;
                    margin-top: 28px;
                    margin-left: -10px;
                    font-size: 16px;
                    li{
                        display: inline-block;
                    }
                    li:nth-child(1), li:nth-child(2){
                        font-weight: 800;
                        color: #E1251B;
                    }
                    li:not(:nth-child(1)){
                        margin-left: 20px;
                    }
                }
            }
        }
    }

    .content{
        margin-top: 10px;
        margin-left: 10px;

        
        .area1{
            display: flex;
            justify-content: space-evenly;

            .category{
                width: 200px;
                height: 470px;
                background-color: white;
                padding: 10px;
                font-size: 16px;
                padding: 2px;
                span.cate1:hover{
                    color: #E1251B;
                    cursor: pointer;
                }
            }

            .swiper{
                margin-left: 10px;
                height: 470px;
                width: 560px;
                background-color: white;
                overflow: hidden;
                position: relative;

                img{
                    width: 560px;
                }

                .picControl{
                    i{
                        position: absolute;
                        color: #E1251B;
                        z-index: 1;
                        top: 230px;
                        width: 30px;
                        height: 30px;
                        background: rgba(0,0,0, 0.2);
                        color:#CFCFCF;
                        line-height: 30px;
                        text-align: center;
                        display: block;
                    }
                    i:hover{
                        background: rgba(0,0,0, 0.5);
                    }
                    .right{
                        left: 530px;
                        border-radius: 15px 0 0 15px;
                    }
                    .left{
                        border-radius: 0 15px 15px 0;
                    }
                }

                .picDot{
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    
                    .dot{
                        display: inline-block;

                        .outCircle{
                            position: relative;
                            width: 14px;
                            height: 14px;
                            background-color: transparent;
                            border-radius: 50%;
                        }
                        .inCircle{
                            width: 8px;
                            height: 8px;
                            background-color:#CFCFCF;
                            border-radius: 50%;
                            position: absolute;
                            margin: auto;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }
                    }

                    .dot:hover{
                        .outCircle{
                            background-color: rgba(153, 153, 153, 0.4);
                        }
                        .inCircle{
                            background-color: white;
                        }
                    }
                }
            }

            .easyEnter{
                position: relative;
                margin-left: 10px;
                height: 470px;
                width: 200px;
                background-color: white;
                padding-top: 15px;
                padding-left: 15px;

                .user{
                    position: relative;
                    padding-bottom: 10px;
                    .up{
                        display: flex;
                        .avator{
                            display: inline-block;
                            border: white 2px solid;
                            border-radius: 50%;
                            overflow: hidden;
                            width: 40px;
                            height: 40px;
                            box-shadow: 0px 0px 1px 1px rgba(0,0,0, 0.2);
                            img{
                                width: 40px;
                            }
                        }

                        .userLoginOut{
                            display: inline-block;
                            font-size: 12px;
                            line-height: 20px;
                            margin-left: 15px;
                        }
                    }

                    .userAdvantage{
                        margin-top: 15px;
                        font-size: 14px;
                        .new{
                            display: inline-block;
                            color: white;
                            background-color: #E1251B;
                            text-align: center;
                            line-height: 26px;
                            width: 80px;
                            height: 26px;
                            margin-right: 10px;
                            border-radius: 13px;
                        }
                        .pro{
                            display: inline-block;
                            background-color: #363634;
                            color: #E5CA6A;
                            text-align: center;
                            line-height: 26px;
                            width: 80px;
                            height: 26px;
                            border-radius: 13px;
                        }
                    }
                }
                .user::after{
                    content: ' ';
                    height: 1px;
                    background:linear-gradient(90deg, rgb(255,255,255), #ccc, #ccc, white);
                    position: absolute;
                    left: 15px;
                    right: 15px;
                    bottom: 3px;
                }

                .newsContainer{
                    .title{
                        >:nth-child(1){
                            font-size: 16px;
                            font-weight: bold;
                            vertical-align: middle;
                        }

                        >:nth-child(2){
                            font-size: 8px;
                            color: #999999;
                            vertical-align: middle;
                            text-align: right;
                            margin-left: 70px;
                            i{
                                margin-left: -4px;
                                font-size: 6px;
                            }

                            &:hover{
                                color: #E1251B;
                                cursor: pointer;
                            }
                        }
                    }

                    .news{
                        display: flex;
                        margin-top: 5px;
                        >:nth-child(1){
                            width: 50px;
                            font-size: 14px;
                            margin-right: 6px;
                            white-space: nowrap;
                            padding: 0 4px;
                            color: #E1251B;
                            background-color: #FDEEED;
                        }
                        >:nth-child(2){
                            font-size: 14px;
                            display: block;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            padding-right: 10px;
                        }
                    }
                }

                .service{
                    position: absolute;
                    width: 180px;
                    margin-top: 10px;
                    &::before{
                        content: ' ';
                        height: 1px;
                        background:linear-gradient(90deg, rgb(255,255,255), #ccc, #ccc, white);
                        position: absolute;
                        top: 0px;
                        left: 5px;
                        right: 25px;
                    }

                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;

                    >div{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 50px;
                        margin-top: 10px;
                        i{
                            font-size: 32px;
                        }
                        span{
                            font-size: 12px;
                        }

                        &:nth-child(1),
                        &:nth-child(8),
                        &:nth-child(11){
                            i{
                                color: #5AAAE5;
                            }
                        }

                        &:nth-child(2),
                        &:nth-child(4),
                        &:nth-child(12){
                            i{
                                color: #F2A234;
                            }
                        }

                        &:nth-child(3),
                        &:nth-child(5),
                        &:nth-child(7){
                            i{
                                color: #3ED6C6;
                            }
                        }

                        &:nth-child(6),
                        &:nth-child(9),
                        &:nth-child(10){
                            i{
                                color: #EC6B62;
                            }
                        }
                    }

                }
            }
        }
    }
} 
</style>