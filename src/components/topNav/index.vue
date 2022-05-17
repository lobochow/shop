<template>
    <div class="topNav">
        <div class="container">
            <div class="location">
                <i class="iconfont icon-didian"></i>
                <span>广东</span>
            </div>
            <div class="userNav">
                <div class="acount">
                    <span>你好，请登录</span>
                    <span>免费注册</span>
                </div>
                <span>我的订单</span>
                <span>我的京东</span>
                <span>京东会员</span>
                <span>企业采购</span>
                <span>客户服务</span>
                <span>网站导航</span>
                <span>手机京东</span>
                <span>网站无障碍</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "topNav",
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