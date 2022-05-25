<template>
    <div class="swiperWrap">
        <el-carousel height="150px">
            <el-carousel-item v-for="item in 7" :key="item">
                <h3>第{{item}}个图</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
name:'test'
}
</script>

<style lang="less" scoped>
.swiperWrap{
    background-color: #050505;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    line-height: 150px;
    margin: 0;
    text-align: center;
  }
</style>