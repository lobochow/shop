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
            <img class="verifyPic" :src="codeImgSrc"
                 @click="changeCodeImg">
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
            codeImgSrc: '/v1/register-verify',
            verifyImg: '',
            phone: '',
            verifyCode: ''
        }
    },
    methods: {
        async goVerift() {
            let phoneReg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
            if (!phoneReg.test(this.phone)) {
                this.$message({
                    type: 'warning',
                    message: '手机不合法'
                })
                return;
            }

            let result = await postRegisterVerifyCode({
                phone: this.phone,
                verifyCode: this.verifyCode
            });
            if (result.code == 200) {
                this.$parent.phone = this.phone;
                this.$emit("changRegisterStatus", 2);
            } else {
                this.$message({
                    message: result.msg,
                    type: 'warning'
                })
                this.changeCodeImg();
            }
        },
        changeCodeImg() {
            this.codeImgSrc='/v1/register-verify?mt='+Math.random();
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

        &:hover{
            cursor: pointer;
        }
    }
}
</style>