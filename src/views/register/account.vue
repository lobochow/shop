<template>
    <div class="register-account">
        <div class="account pass error">
            <div class="wrap">
                <label for="account">用户名</label>
                <input type="text" id="account" v-model="account">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">错误提醒</p>
        </div>
        <div class="password1">
            <div class="wrap">
                <label for="password1">设置密码</label>
                <input type="password" id="password1" v-model="password">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">错误提醒</p>
        </div>
        <div class="password2">
            <div class="wrap">
                <label for="password2">确认密码</label>
                <input type="password" id="password2" v-model="passwordConfirm">
                <i class="iconfont icon-duigou1"></i>
            </div>
            <p class="errorMsg">错误提醒</p>
        </div>
        <div class="goRegister" @click="goRegister">
            立即注册
        </div>
    </div>
</template>

<script>
import {postRegister} from '@/api'

export default {
    name: 'register-Account',
    data() {
        return {
            account: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {
        async goRegister(){
            let result = await postRegister({
                phone: this.$parent.phone,
                account: this.account,
                password: this.password
            })
            if(result.code == 200){
                this.$parent.account = this.account;
                this.$parent.password = this.password;
                this.$router.push('/register/complete');
            }else{
                this.$message({
                    message: result.msg,
                    type: 'warning'
                })
            }
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
            font-size: 10px;
            color: #e2231a;
            visibility: hidden;
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