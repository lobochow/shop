<template>
    <div class="register-root">
        <div class="header-wrap">
            <header>
                <div class="imgWrap">
                    <img src="@/assets/images/logo.png" alt="logo" @click="goHome">
                </div>
                <h3>欢迎注册</h3>
                <p class="loginTip">已有账号？
                    <span class="loginButton" @click="goLogin">
                        请登录>
                    </span>
                </p>
            </header>
        </div>
        <div class="main-wrap">
            <main>
                <div class="status">
                    <p class="status-icon">
                        <span :class="{currentStep: registerStatus === 1, stepComplete: registerStatus > 1}">
                            <span>1</span>
                            <i class="iconfont icon-duigou"></i>
                        </span>
                        <span :class="{arrowComplete: registerStatus >= 1}">··········></span>
                        <span :class="{currentStep: registerStatus === 2, stepComplete: registerStatus > 2, normal: registerStatus < 2}">
                            <span>2</span>
                            <i class="iconfont icon-duigou"></i>
                        </span>
                        <span :class="{arrowComplete: registerStatus >= 2}">··········></span>
                        <span :class="{stepComplete: registerStatus === 3, normal: registerStatus < 3}">
                            <span>3</span>
                            <i class="iconfont icon-duigou"></i>
                        </span>
                    </p>
                    <p class="status-title">
                        <span :class="{complete: registerStatus > 1, current: registerStatus === 1}">验证手机号</span>
                        <span :class="{complete: registerStatus > 2, current: registerStatus === 2}">填写账号信息</span>
                        <span :class="{complete: registerStatus === 3}">注册成功</span>
                    </p>
                </div>
                
                <phone v-if="registerStatus === 1" @changRegisterStatus="changRegisterStatus" />
                <account v-if="registerStatus === 2" @changRegisterStatus="changRegisterStatus" />
                <complete v-if="registerStatus === 3" @changRegisterStatus="changRegisterStatus"/>
                
            </main>
        </div>
        <footer>
            <ul>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>人才招聘</li>
                <li>商家入驻</li>
                <li>广告服务</li>
                <li>友情链接</li>
                <li>手机京东</li>
                <li>销售联盟</li>
                <li>京东社区</li>
                <li>京东公益</li>
                <li>English Site</li>
            </ul>
        </footer>
    </div>
</template>

<script>
import phone from '@/views/register/phone'
import account from '@/views/register/account'
import complete from '@/views/register/complete'

import {routerJump} from '@/mixin/index.js'

export default {
    name: 'register',
    mixins: [routerJump],
    components: {phone, account, complete},
    data() {
        return {
            //1填写手机 2填写账号 3完成注册
            registerStatus: 1,
            phone: '',
            account: '',
            password: ''
        }
    },
    methods: {
        changRegisterStatus(value) {
            this.registerStatus = value;
        }
    }
}
</script>

<style lang="less" scoped>
.register-root{
    display: flex;
    flex-direction: column;

    min-width: 1000px;
    height: 100vh;

    background-color: white;
}
.header-wrap {
    min-width: 1000px;
    width: 100%;

    background-color: white;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

    > header {
        display: flex;
        align-items: center;

        margin: 0px auto;
        width: 1000px;
        height: 100px;

        .imgWrap {
            display: flex;
            align-items: center;
            height: 100%;
            > img {
                max-height: 80%;
            }
        }

        > h3 {
            font-weight: 400;
        }

        .loginTip {
            margin-left: auto;

            font-size: 14px;

            > span {
                color: #e22;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
}
.main-wrap {
    min-width: 1000px;
    width: 100%;
    
    padding: 2em 0;
    

    
    main {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 1000px;
        margin: 0px auto;
        > .status {
            > .status-icon {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                justify-items: center;

                > :nth-child(odd) {
                    width: 30px;
                    height: 30px;

                    text-align: center;

                    border: 1px solid #e5e5e5;
                    border-radius: 50%;
                }

                > .normal {
                    > :nth-child(2) {
                        display: none;
                    }
                }

                > .currentStep {
                    color: white;

                    border: 1px solid #33bb44;
                    background-color: #33bb44;

                    > :nth-child(2) {
                        display: none;
                    }
                }

                > .stepComplete {
                    color: white;

                    border: 1px solid #33bb44;
                    background-color: #33bb44;

                    > :nth-child(1) {
                        display: none;
                    }
                }

                > .arrowComplete {
                    color: #33bb44;
                }
            }
            > .status-title {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                justify-items: center;

                margin-top: 10px;

                :nth-child(2) {
                    grid-column: 3;
                }

                :nth-child(3) {
                    grid-column: 5;
                }

                > span {
                    font-size: 12px;
                }

                > .complete,
                .current {
                    color: #33bb44;
                }
            }
        }
    }
}
footer {
    width: 1000px;
    height: 50px;
    margin: 0px auto;
    margin-top: auto;
    padding: 10px 0px;
    > ul {
        display: flex;
        justify-content: center;

        list-style: none;
        font-size: 10px;

        > :not(:last-child) {
            &::after {
                content: "";
                display: inline-block;

                width: 1px;
                height: 10px;
                margin: 0px 10px;

                vertical-align: middle;

                background-color: #cccccc;
            }
        }
    }
}
</style>