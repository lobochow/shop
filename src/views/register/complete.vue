<template>
  <div class="register-complete">
      <i class="iconfont icon-shizhong"></i>
      <h4>恭喜您 lobo2233</h4>
      <p>您已成功注册为京东用户，祝您购物愉快~</p>
      <button>去购物</button>
  </div>
</template>

<script>
export default {
name: 'register-complete'
}
</script>

<style lang="less">
.register-complete{
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 30px;

    >i{
        margin-bottom: 20px;

        font-size: 60px;
        color: #3B4;
    }

    >h4{
        margin-bottom: 10px;

        font-weight: 400;
    }

    >p{
        margin-bottom: 3em;

        color: #999999;
        font-size: 14px;
    }
    >button{
        padding: .8em 1.5em;

        color: white;
        font-weight: bold;

        background-color: #EE2223;
        outline: none;
        border: none;
    }
}
</style>