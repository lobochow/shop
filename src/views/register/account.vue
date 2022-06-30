<template>
    <div class="register-account">
        <div class="account"
             :class="{ pass: accountWarnMsg === '' && account !== '', error: accountWarnMsg !== '' && account !== '' }">
            <div class="wrap">
                <label for="account">用户名</label>
                <input type="text" id="account" v-model="account">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">{{accountWarnMsg}}</p>
        </div>
        <div class="password1"
             :class="{ pass: password1WarnMsg === '' && password !== '', error: password1WarnMsg !== '' && password !== ''}">
            <div class="wrap">
                <label for="password1">设置密码</label>
                <input type="password" id="password1" v-model="password">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">{{password1WarnMsg}}</p>
        </div>
        <div class="password2"
             :class="{ pass: password2WarnMsg === '' && passwordConfirm !== '', error: password2WarnMsg !== '' && passwordConfirm !== ''}">
            <div class="wrap">
                <label for="password2">确认密码</label>
                <input type="password" id="password2" v-model="passwordConfirm">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">{{password2WarnMsg}}</p>
        </div>
        <div class="registerButton" @click="goRegister">
            立即注册
        </div>
    </div>
</template>

<script>
import { postRegister } from '@/api'

export default {
    name: 'register-Account',
    data() {
        return {
            account: '',
            password: '',
            passwordConfirm: '',

            //错误提示
            accountWarnMsg: '',
            password1WarnMsg: '',
            password2WarnMsg: ''
        }
    },
    watch: {
        account() {
            this.verifyAccount();
        },
        password() {
            this.verifyPassword();
        },
        passwordConfirm() {
            this.verifyPasswordConfirm();
        }
    },
    methods: {
        async goRegister() {
            //账号--4到16位（字母，数字，下划线，减号）不忽略大小写
            let accountReg = /^[a-zA-Z0-9_-]{4,16}$/;
            //密码--4到16位（字母，数字，下划线，减号）
            let passwordReg = /^[a-zA-Z0-9_-]{4,16}$/;
            if (!accountReg.test(this.account)) {
                this.$message({
                    type: 'warning',
                    message: '账号不合法'
                })
                return;
            }
            if (!passwordReg.test(this.password)) {
                this.$message({
                    type: 'warning',
                    message: '密码不合法'
                })
                return;
            }
            if (this.password !== this.passwordConfirm) {
                this.$message({
                    type: 'warning',
                    message: '两次输入的密码不相同'
                })
                return;
            }

            let result = await postRegister({
                phone: this.$parent.phone,
                account: this.account,
                password: this.password
            })
            if (result.code == 200) {
                this.$parent.account = this.account;
                this.$parent.password = this.password;
                this.$emit("changRegisterStatus", 3);
            } else {
                this.$message({
                    message: result.msg,
                    type: 'warning'
                })
            }
        },
        verifyAccount() {
            let lengthReg = /.{4,16}/;
            if (!lengthReg.test(this.account)) {
                this.accountWarnMsg = '账号长度为4-16个字母或数字组成';
                return;
            }

            let charReg = /^[a-zA-Z0-9_-]{4,16}$/;
            if (!charReg.test(this.account)) {
                this.accountWarnMsg = '账号只能由数字、字母、下划线组成';
                return;
            }

            this.accountWarnMsg = '';
        },
        verifyPassword() {
            let lengthReg = /.{4,16}/;
            if (!lengthReg.test(this.password)) {
                this.password1WarnMsg = '密码长度为4-16个字母或数字组成';
                return;
            }

            let charReg = /^[a-zA-Z0-9]{4,16}$/;
            if (!charReg.test(this.password)) {
                this.password1WarnMsg = '密码只能由数字、字母组成';
                return;
            }

            this.verifyPasswordConfirm();

            this.password1WarnMsg = '';
        },
        verifyPasswordConfirm() {
            if(this.password !== this.passwordConfirm) {
                this.password2WarnMsg = '两次输入的密码不相同';
                return;
            }

            this.password2WarnMsg = '';
        }
    },
}
</script>

<style lang="less" scoped>
input {
    border: none;
    outline: none;
}

.register-account {
    > :last-child {
        margin-top: 2em;
        padding: 0.5em 0;

        color: white;
        text-align: center;

        background-color: #e2231a;
        &:hover {
            cursor: pointer;
        }
    }

    > :nth-child(-n + 3) {
        > .wrap {
            padding: 1em;
            margin-top: 2em;

            font-size: 16px;

            border: 1px solid #999;

            > label {
                display: inline-block;

                width: 5em;
                margin-right: 1em;

                text-align-last: justify;
            }

            > i {
                color: #3b4;
                visibility: hidden;
            }
        }

        > .errorMsg {
            display: block;
            font-size: 10px;
            color: #e2231a;
            visibility: hidden;
            height: 20px;
        }

        &.pass {
            i {
                visibility: visible;
            }
        }

        &.error {
            .errorMsg {
                visibility: visible;
            }
        }
    }
}
</style>