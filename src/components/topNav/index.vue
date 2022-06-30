<template>
    <div class="topNav">
        <div class="container">
            <!-- <div class="location">
                <i class="iconfont icon-didian"></i>
                <span>广东</span>
            </div> -->
            <span class="goButton" @click="goHome">首页</span>
            <div class="userNav">
                <div class="acount" v-if="!username">
                    <span @click="goLogin" class="goButton">你好，请登录</span>
                    <span @click="goRegister" class="goButton">免费注册</span>
                </div>
                <div class="acount" v-if="username">
                    <span>你好，{{username}}</span>
                    <span @click="goLogout" class="goButton">登出</span>
                </div>
                <span @click="goBillRecord">我的订单</span>
                <span @click="goCart">我的购物车</span>
            </div>
        </div>
    </div>
</template>

<script>
//引入mixin
import { routerJump } from '@/mixin/index.js'

import { mapState } from 'vuex'

export default {
    name: "topNav",
    mixins: [routerJump],
    computed: {
        ...mapState('userStore', ['username'])
    },
    methods: {
        goLogout() {
            this.$store.commit('userStore/muLogout');
        },
        async getUserInfo() {
            try {
                this.$store.dispatch('userStore/acReqCartInfo');
            } catch (error) {
                console.log(error.message);
            }
        }
    },
    mounted() {
        this.getUserInfo();
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

            > span:hover {
                cursor: pointer;
            }

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
.goButton:hover {
    cursor: pointer;
}
</style>