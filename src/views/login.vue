<template>
    <div class="loginContainer">
        <div class="headerWrap">
            <header>
                <div class="imgWrap">
                    <img src="@/assets/images/login-header.png" alt="headerImg">
                </div>
            </header>
        </div>
        <div class="contentWrap">
            <div class="content">
                <div class="imgWrap">
                    <img src="@/assets/images/login-content.png" alt="poster">
                </div>
                <div class="loginPanel">
                    <div class="login-titles">
                        <h4>扫码登陆</h4>
                        <h4 class="selected">账户登陆</h4>
                    </div>

                    <form class="login-form">

                        <div class="login-collecter">
                            <label for="account"><i class="iconfont icon-yonghu"></i></label>
                            <input type="text" id="account" placeholder="邮箱/用户名/登陆手机" v-model="account">
                        </div>

                        <div class="login-collecter">
                            <label for="password"><i class="iconfont icon-mima"></i></label>
                            <input type="password" id="password" placeholder="密码" v-model="password">
                        </div>

                        <span class="login-forgetPsw">忘记密码</span>

                        <div class="login-loginBtn" @click="goLogin">登录</div>
                    </form>

                    <div class="login-footer">
                        <div class="login-media">
                            <span @click="$router.push('/')">首页</span>
                        </div>
                        <div class="register" @click="$router.push('/register')">
                            <i class="iconfont icon-xiangyou1"></i>
                            立即注册
                        </div>
                    </div>
                </div>
            </div>
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
export default {
    name: 'login',
    data() {
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        async goLogin() {
            let { account, password } = this;
            //校验功能
                //账号--4到16位（字母，数字，下划线，减号）不忽略大小写
                let accountReg = /^[a-zA-Z0-9_-]{4,16}$/;
                //密码--4到16位（字母，数字，下划线，减号）
                let passwordReg = /^[a-zA-Z0-9_-]{4,16}$/;
                if(!accountReg.test(account)) {
                    this.$message({
                        type: 'warning',
                        message: '账号不合法'
                    })
                    return;
                }
                if(!passwordReg.test(password)) {
                    this.$message({
                        type: 'warning',
                        message: '密码不合法'
                    })
                    return;
                }
                
            try {
                await this.$store.dispatch('userStore/acLogin', { account, password });
                this.$router.push('/');
            } catch (error) {
                this.$message({
                    type: 'error',
                    message: error.message
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.loginContainer {
    width: 100%;
    min-width: 1000px;
    .headerWrap {
        background-color: white;
        width: 100%;
        header {
            width: 1000px;
            height: 80px;
            margin: 0px auto;
            .imgWrap {
                height: 100%;
                img {
                    max-height: 100%;
                }
            }
        }
    }

    .contentWrap {
        background-color: #e93854;
        width: 100%;
        .content {
            width: 1000px;
            margin: 0px auto;
            height: 500px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .imgWrap {
                height: 100%;
                display: flex;
                align-items: center;
                img {
                    max-height: 80%;
                }
            }

            .loginPanel {
                width: 350px;
                padding: 0px 30px;

                background-color: white;

                .login-titles {
                    display: flex;
                    justify-content: space-around;

                    margin: 20px 0px;

                    > h4 {
                        font-weight: 400;
                    }

                    .selected {
                        color: #e4393c;
                        font-weight: bold;
                    }
                }

                .login-form {
                    display: flex;
                    flex-direction: column;

                    margin: 20px 0px;

                    .login-collecter {
                        display: flex;

                        > * {
                            vertical-align: middle;

                            padding: 10px;
                            height: 40px;

                            font-size: 14px;
                        }

                        &:nth-child(1) {
                            margin-bottom: 20px;
                        }

                        > label {
                            border: 1px solid #bdbdbd;
                            border-right: none;
                        }

                        > input {
                            flex-grow: 1;

                            border: 1px solid #bdbdbd;
                            outline: none;
                        }
                    }

                    .login-forgetPsw {
                        align-self: flex-end;

                        margin: 20px 0px;

                        font-size: 12px;
                    }

                    .login-loginBtn {
                        align-self: stretch;

                        padding: 5px 0px;

                        text-align: center;
                        letter-spacing: 20px;
                        text-indent: 20px;
                        color: white;

                        background-color: #e4393c;

                        &:hover{
                            cursor: pointer;
                        }
                    }
                }

                .login-footer {
                    display: flex;
                    justify-content: space-between;

                    padding: 10px 0px;

                    font-size: 10px;

                    background-color: #fcfcfc;

                    .login-media {
                        > span{
                            &:hover{
                                cursor: pointer;
                            }
                        }
                    }

                    .register {
                        color: #e4393c;

                        > * {
                            vertical-align: middle;
                        }

                        > i {
                            padding: 1px;

                            background-color: #e4393c;
                            border-radius: 50%;

                            color: white;
                            font-size: 10px;
                        }

                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    footer {
        width: 1000px;
        margin: 0px auto;
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
}
</style>