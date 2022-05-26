<template>
    <form class="register">
        <div class="register-phone">
            <select>
                <option value="86">中国 0086</option>
            </select>
            <input type="text" placeholder="建议使用常用手机号">
        </div>
        <div class="register-code">
            <input type="text">
            <button>获取验证码</button>
        </div>
        <div class="register-nextStep">
            下一步
        </div>
    </form>
</template>

<script>
export default {
    name: 'register-phone'
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
        button {
            flex-grow: 1;
            vertical-align: middle;

            padding: 0 1em;
            height: 3em;

            font-size: 16px;

            outline: none;
            border: 1px solid #dddddd;
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