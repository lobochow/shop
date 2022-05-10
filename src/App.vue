<template>
  <div id="app">
      <header>
            <!-- 顶部导航栏 -->
            <div class="topNav">
                <div class="container">
                    <div class="location">
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

            <!-- 搜索框区域 -->
            <div class="searchArea">
                <!-- 大logo -->
                <div class="logo">
                    <img src="./assets/logo.png" alt="logo">
                </div>

                <div class="search">
                    <input type="text">
                    <div class="cart">我的购物车</div>
                    <div class="hotSearch"></div>
                </div>

                <div class="searchMore"></div>
            </div>
      </header>

      <div class="content"></div>

      <footer></footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
    border: 1px solid green;
}

html{
    background-color: rgb(244,244,244);
}

#app{
    header{
        .topNav{
            margin: 0 auto;
            background-color: rgb(227,228,229);
            padding: 10px 0;
            .container{
                width: 80%;
                display: flex;
                flex-direction: row;
                margin: 0 auto;
                justify-content: space-between;
                font-size: 8px;
                color: rgb(153,153,153);
                .userNav{
                    display: flex;
                    flex-direction: row;
                    >span::before{
                        content: '';
                        width: 1px;
                        height: 0.5rem;
                        background-color: rgb(204,204,204);
                        display: inline-block;
                        margin: 0 1vw;
                    }

                    >.acount span:nth-child(2){
                        margin-left: 1vw;
                    }
                }
            }
        }
        .searchArea{
            width: 80%;
            display: flex;
            margin: auto;
            justify-content: space-around;
            .logo{
                width: 200px;
                height: 200px;
            };
            .search{
                width: 1200px;
                .cart{
                    display: inline-block;
                }
            }
            .searchMore{
                width: 1200px;
            }
        }
    }
    .content{
        height: 500px;
        width: 80%;
        background-color: white;
        margin: 0 auto;
    }
} 
</style>