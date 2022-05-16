<template>
    <div class="area1">
        <div class="category">
            <div>
                <span class="cate1">分类1</span>
                <span>/</span>
                <span class="cate1">分类2</span>
            </div>
        </div>

        <categoryList/>

        <swiper/>

        <easyEntry/>
    </div>
</template>

<script>
import categoryList from './categoryList.vue'
import swiper from './swiper.vue'
import easyEntry from './easyEntry.vue'

export default {
    name: "area1",
    components: {categoryList, swiper, easyEntry}
};
</script>

<style lang='less'>
.area1 {
    display: flex;
    justify-content: space-around;
    position: relative;

    .category {
        width: 200px;
        height: 470px;
        background-color: white;
        padding: 10px;
        font-size: 16px;
        padding: 12px;
        span.cate1:hover {
            color: #e1251b;
            cursor: pointer;
        }
    }
}
</style>