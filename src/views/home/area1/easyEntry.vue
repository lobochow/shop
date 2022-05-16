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
            <div class="serviceItem" @mouseenter='showQuickBook1(0)'
            @mouseleave='stopShowQuickBook'>
                <i class="iconfont icon-shouji"></i>
                <span class="quick">话费</span>
            </div>
            <div class="serviceItem" @mouseenter='showQuickBook1(1)'
            @mouseleave='stopShowQuickBook'>
                <i class="iconfont icon-feijichang"></i>
                <span class="quick">机票</span>
            </div>
            <div class="serviceItem" @mouseenter='showQuickBook1(2)'
            @mouseleave='stopShowQuickBook'>
                <i class="iconfont icon-jiudian"></i>
                <span class="quick">酒店</span>
            </div>
            <div class="serviceItem" @mouseenter='showQuickBook2(3)'
            @mouseleave='stopShowQuickBook'>
                <i class="iconfont icon-youxi"></i>
                <span class="quick">游戏</span>
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
            <div class="quickBook" ref="quickBook">
                <div class="huafei" v-show="serviceStatus == 0">
                    <div class="title">
                        <span class="red" @mouseenter="changeHuaFeiStatus(1)">话费充值</span>
                        <span @mouseenter="changeHuaFeiStatus(2)">流量充值</span>
                    </div>
                    <div class="phoneNum">
                        号码
                        <input type="text" placeholder="移动/联通/电信">
                    </div>
                    <div class="cost" v-show="servicePhoneBillStatus == 1">
                        面值
                        <select>
                            <option value="10">10元</option>
                            <option value="20">20元</option>
                            <option value="30">30元</option>
                            <option value="50">50元</option>
                            <option value="100">100元</option>
                            <option value="200">200元</option>
                            <option value="300">300元</option>
                            <option value="500">500元</option>
                        </select>
                    </div>

                    <div class="phoneData" v-show="servicePhoneBillStatus == 2">
                        流量
                        <select>
                            <option>全国</option>
                            <option>省内</option>
                        </select>
                        <select>
                            <option value="50">50M</option>
                            <option value="100">100M</option>
                            <option value="200">200M</option>
                            <option value="300">300M</option>
                            <option value="500">500M</option>
                        </select>
                    </div>

                    <div class="priceRange">¥1 - ¥10</div>
                    <div class="chargeButton">快速充值</div>
                </div>

                <div class="airplaneBook" v-show="serviceStatus == 1">
                    <ul class="title">
                        <li>国内机票</li>
                        <li>国际/港澳台</li>
                        <li>特惠</li>
                    </ul>
                    <ul class="oneOrTwo">
                        <div><input type="radio" name="road">单程</div>
                        <div><input type="radio" name="road">往返</div>
                    </ul>
                    <div class="from">
                        出发
                        <input type="text" placeholder="城市">
                    </div>
                    <div class="to">
                        到达
                        <input type="text" placeholder="城市">
                    </div>

                    <div class="date">
                        日期
                        <input type="text" placeholder="出发">
                    </div>

                    <div class="button">
                        <span>机票查询</span>
                        当季热门特惠机票
                    </div>
                    
                </div>

                <div class="hotel" v-show="serviceStatus == 2">
                    <ul class="title">
                        <li>国内/港澳台</li>
                        <li>促销活动</li>
                    </ul>
                    <div class="destination">
                        <span>目的地</span>
                        <input type="text" placeholder="北京">
                    </div>

                    <div class="checkDate">
                         <span>入住日期</span>
                         <input type="text" placeholder="2022-05-15">
                    </div>

                    <div class="checkoutDate">
                         <span>离店日期</span>
                         <input type="text" placeholder="2022-05-16">
                    </div>

                    <input type="text" class="keyword" placeholder="酒店/商圈/地标">

                    <div class="button">
                        <span>酒店查询</span>
                        订酒店上京东
                    </div>
                </div>

                <i class="iconfont icon-shanchuyixuanqunchengyuanchacha" @click="hideQuickBook"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "easyEntry",
    data() {
        return {
            serviceTimer: -1,
            serviceStatus: -1,
            servicePhoneBillStatus: 2
        }
    },
    methods: {
        showQuickBook1(status){
            this.serviceStatus = status;
            if(this.serviceTimer == -1){
                this.serviceTimer = setTimeout(() => {
                    this.$refs.quickBook.classList.add('up');
                    let firstline = document.querySelectorAll('.serviceItem');
                    for(let i = 0; i < 3; i++){
                        firstline[i].classList.add('up1');
                    }
                    this.serviceTimer = -1;
                }, 150);
            }
            let firstline = document.querySelectorAll('.quick');
            for(let i = 0; i < 4; ++i){
                if(i == status){
                    firstline[i].classList.add('selected')
                }else{
                    firstline[i].classList.remove('selected')
                }
            }


        },
        showQuickBook2(status){
            this.serviceStatus = status;
            if(this.serviceTimer == -1){
                this.serviceTimer = setTimeout(() => {
                    this.$refs.quickBook.classList.add('up');
                    let firstline = document.querySelectorAll('.serviceItem');
                    firstline[0].classList.add('up2');
                    firstline[3].classList.add('up2');
                    for(let i = 0; i < 3; i++){
                        firstline[i].classList.add('up1');
                    }
                    this.serviceTimer = -1;
                }, 150);
            }
            let firstline = document.querySelectorAll('.quick');
            for(let i = 0; i < 4; ++i){
                if(i == status){
                    firstline[i].classList.add('selected')
                }else{
                    firstline[i].classList.remove('selected')
                }
            }
        },
        stopShowQuickBook(){
            clearTimeout(this.serviceTimer);
            this.serviceTimer = -1;
        },
        hideQuickBook(){
            this.$refs.quickBook.classList.remove('up');
            let firstline = document.querySelectorAll('.serviceItem');
            for(let i = 0; i < 4; i++){
                firstline[i].classList.remove('up1');
                firstline[i].classList.remove('up2');
            }
            this.serviceStatus = -1;
            firstline = document.querySelectorAll('.quick');
            for(let i = 0; i < 4; ++i){
                if(i == this.serviceStatus){
                    firstline[i].classList.add('selected')
                }else{
                    firstline[i].classList.remove('selected')
                }
            }
        },
        changeHuaFeiStatus(status){
            this.servicePhoneBillStatus = status;
            let spans = document.querySelector('.quickBook .huafei .title').children;
            for(let i = 1; i < 3; i++){
                if(i == status){
                    spans[i-1].classList.add('red');
                }else{
                    spans[i-1].classList.remove('red');
                }
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
            position: relative;
            i {
                font-size: 32px;
            }
            span{
                font-size: 12px;
                border-bottom: 1px solid transparent;
                &.selected{
                    color: #e1251b;
                    border-bottom: 1px solid #e1251b;
                }
            }

            

            &.up1{
                top: -40px;
            }

            &.up2{
                top: -96px;
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

            &:hover{
                cursor: pointer;
                span{
                    color: #e1251b;
                }
                i{
                    color: #e1251b;
                }
            }
        }

        .quickBook {
            width: 180px;
            height: 210px;
            background-color: rgba(255, 255, 255);
            position: absolute;
            top: 230px;
            transition: 0.3s;

            i{
                font-size: 16px;
                position: absolute;
                bottom: 5px;
                left: 82px;
            }

            &.up{
                top: 20px;
            }

            .huafei{
                margin-top: 10px;
                font-size: 12px;
                >div{
                    margin-bottom: 10px;
                }

                .title{
                    >span{
                        margin-right: 10px;
                        &.red{
                            color: #e1251b;
                        }
                    }
                }

                .phoneNum{
                    >*{
                        padding: 5px;
                        vertical-align: middle;
                    }
                    input{
                        margin-left: 10px;
                        font-size: 12px;
                        width: 120px;
                        border:#c4c4c4 1px solid;
                        text-align: center;
                    }
                }

                .cost{
                    >*{
                        padding: 5px;
                        vertical-align: middle;
                    }
                    select{
                        font-size: 12px;
                        border:#c4c4c4 1px solid;
                        width: 120px;
                        margin-left: 10px;
                    }
                }

                .phoneData{
                    >*{
                        padding: 5px;
                        vertical-align: middle;
                    }
                    select{
                        font-size: 12px;
                        border:#c4c4c4 1px solid;
                        width: 60px;
                        margin-left: 10px;
                    }
                }

                .priceRange{
                    color: #e1251b;
                    font-weight: 500;
                }

                .chargeButton{
                    background-color: #e1251b;
                    color: white;
                    display: inline-block;
                    padding: 2px 5px;
                    border-radius: 16px;
                }
            }

            .airplaneBook{
                margin-top: 10px;
                font-size: 12px;
                .title{
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                }

                .oneOrTwo{
                    display: flex;
                    margin-top: 10px;
                    *{
                        vertical-align: middle;
                    }

                    >*{
                        margin-left: 20px;
                    }
                }

                .from, .to, .date{
                    margin-top: 10px;
                    input{
                        text-align: center;
                        width: 120px;
                        margin-left: 10px;
                        font-size: 12px;
                        border:#c4c4c4 solid 1px;
                    }
                }

                .button{
                    margin-top: 10px;
                    color: #527CDB;
                    span{
                        background-color: #e1251b;
                        color: white;
                        padding: 2px 5px;
                        border-radius: 10px;
                    }
                }
            }

            .hotel{
                margin-top: 10px;
                font-size: 12px;
                .title{
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                }

                .destination, .checkDate, .checkoutDate{
                    margin-top: 10px;
                    span{
                        display: inline-block;
                        width: 50px;
                        text-align: right;
                    }
                    input{
                        text-align: center;
                        width: 100px;
                        margin-left: 10px;
                        font-size: 12px;
                        border:#c4c4c4 solid 1px;
                    }
                }

                .keyword{
                    width: 120px;
                    margin-top: 10px;
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    font-size: 12px;
                    text-align: center;
                }

                .button{
                    margin-top: 10px;
                    color: #527CDB;
                    span{
                        background-color: #e1251b;
                        color: white;
                        padding: 2px 5px;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
}
</style>