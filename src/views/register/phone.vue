<template>
    <form class="register">
        <div class="register-phone">
            <select>
                <option value="86">中国 0086</option>
            </select>
            <input type="text" placeholder="建议使用常用手机号" v-model="phone">
        </div>
        <div class="register-code" ref="verifyPicContainer">
            <input type="text" placeholder="请输入验证码" v-model="verifyCode">
            <img class="verifyPic" src="/v1/register-verify" onclick="javascript:this.src='/v1/register-verify?mt='+Math.random()">
        </div>
        <div class="register-nextStep" @click='goVerift'>
            下一步
        </div>
    </form>
</template>

<script>
import { postRegisterVerifyCode } from '@/api'

export default {
    name: 'register-phone',
    data() {
        return {
            verifyImg: '',
            phone: '',
            verifyCode: ''
        }
    },
    methods: {
        async goVerift() {
            let result = await postRegisterVerifyCode({
                phone: this.phone,
                verifyCode: this.verifyCode
            });
            if (result.code == 200) {
                this.$parent.phone = this.phone;
                this.$router.push('/register/account');
            } else {
                this.$message({
                    message: result.msg,
                    type: 'warning'
                })
            }
        }
    },
    mounted() {
    },
}
</script>

<style lang="less" scoped>
.register {
    margin-top: 40px;

    .register-phone {
        margin-bottom: 40px;
        > input,
        select {
            vertical-align: middle;

            padding: 0 1em;
            height: 3em;

            font-size: 16px;

            outline: none;
            border: 1px solid #dddddd;
        }
    }

    .register-code {
        display: flex;

        > input,
        svg,
        img {
            vertical-align: middle;

            padding: 0 1em;
            height: 3em;

            font-size: 16px;

            outline: none;
            border: 1px solid #dddddd;
        }

        > input {
            flex-grow: 1;
        }

        > svg,
        img {
            padding: 0px;
            > * {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .register-nextStep {
        margin-top: 40px;
        padding: 0.5em 0;

        color: white;
        text-align: center;

        background-color: #e22;
    }
}
</style>