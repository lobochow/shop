<template>
  <div class="spuContainer">
        <div class="imgWrap">
            <img src="@/assets/images/spuImg/iphone.png" alt="iphone">
        </div>
        <div class="priceWrap">
            <span>¥1799.00</span>
        </div>
        <div class="descriptionWrap">
            <span>1111111111</span>
        </div>
        <div class="commentsNumWrap">
            <span>5条评价</span>
        </div>
  </div>
</template>

<script>
export default {
    name: 'spuList'
}
</script>

<style lang="less">
.spuContainer{
    width: 200px;
    background-color: white;
    padding: 10px;
    border: 1px solid transparent;

    *{
        margin-bottom: 5px;
    }

    .imgWrap{
        text-align: center;
        img{
            max-width: 190px;
            max-height: 220px;
        }
    }
    .priceWrap{
        font-size: 20px;
        color: #E4393C;
    }
    .descriptionWrap{
        font-size: 14px;
    }
    .commentsNumWrap{
        font-size: 10px;
    }

    &:hover{
        border: 1px solid #CCC;
        box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
    }
}
</style>