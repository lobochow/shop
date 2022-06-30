<template>
    <div class="register-complete">
        <i class="iconfont icon-shizhong"></i>
        <h4>恭喜您 {{$parent.account}}</h4>
        <p>您已成功注册为京东用户，祝您购物愉快~</p>
        <button @click="registerAndHome">去购物</button>
    </div>
</template>

<script>
import { routerJump } from '@/mixin/index.js'

export default {
    name: 'register-complete',
    mixins: [routerJump],
    methods: {
        async registerAndHome() {
            await this.$store.dispatch('userStore/acLogin',{
                account: this.$parent.account,
                password: this.$parent.password
            });

            this.goHome();
        }
    }
}
</script>

<style lang="less">
.register-complete {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;

    > i {
        margin-bottom: 20px;

        font-size: 60px;
        color: #3b4;
    }

    > h4 {
        margin-bottom: 10px;

        font-weight: 400;
    }

    > p {
        margin-bottom: 3em;

        color: #999999;
        font-size: 14px;
    }
    > button {
        padding: 0.8em 1.5em;

        color: white;
        font-weight: bold;

        background-color: #ee2223;
        outline: none;
        border: none;
        &:hover {
            cursor: pointer;
        }
    }
}
</style>