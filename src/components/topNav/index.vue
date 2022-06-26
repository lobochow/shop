<template>
    <div class="topNav">
        <div class="container">
            <div class="location">
                <i class="iconfont icon-didian"></i>
                <span>广东</span>
            </div>
            <div class="userNav">
                <div class="acount" v-if="!userInfo">
                    <span @click="goLogin">你好，请登录</span>
                    <span @click="goRegister">免费注册</span>
                </div>
                <div class="acount" v-if="userInfo">
                    <span >你好，{{userInfo.account}}</span>
                    <span @click="goLogout">登出</span>
                </div>
                <span @click="goBillRecord">我的订单</span>
                <span>我的购物车</span>
            </div>
        </div>
    </div>
</template>

<script>
//引入mixin
import {routerJump} from '@/mixin/index.js'

import {getUserInfo} from '@/api'

export default {
    name: "topNav",
    mixins: [routerJump],
    data() {
        return {
            userInfo:{}
        }
    },
    methods: {
        async reqUserInfo(){
            let result = await getUserInfo();
            this.userInfo = result.data;
        },
        goLogout(){
            this.userInfo = null;
            localStorage.removeItem('lobo-shop-token');
        }
    },
    mounted() {
       this.reqUserInfo();
    },
};
</script>

<style lang='less'>
.topNav {
    width: 100%;
    min-width: 1000px;
    margin: 0 auto;
    background-color: rgb(227, 228, 229);
    padding: 10px 0;
    .container {
        width: 1000px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: space-around;
        font-size: 8px;
        color: rgb(153, 153, 153);

        .location {
            i {
                font-size: 12px;
                margin-right: 5px;
                color: #e1251b;
            }
        }

        .userNav {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            > span::before {
                content: "";
                width: 1px;
                height: 14px;
                line-height: 20px;
                background-color: rgb(204, 204, 204);
                display: inline-block;
                margin: 0 1vw;
                vertical-align: middle;
            }

            > .acount span:nth-child(2) {
                margin-left: 1vw;
            }
        }
    }
}
</style>