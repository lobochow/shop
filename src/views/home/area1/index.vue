<template>
    <div class="area1">
        <div class="category" @mouseleave="toggleCate2List(-1)">
            <div v-for="(cate_1, index) in cates_1" :key="index" @mouseenter="toggleCate2List(index)" class="c1wrap">
                <span class="cate1" v-for="(c1name, index2) in cate_1.c1names" :key="index2" @click="goSearch({keyword: c1name})">{{c1name}}</span>
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

//引入mixin
import {routerJump} from '@/mixin/index.js'

export default {
    name: "area1",
    props: ['cates_1'],
    mixins: [routerJump],
    components: {categoryList, swiper, easyEntry},
    data() {
        return {
            isShow: 'hidden',
            showCate2List: {isShow: 'hidden', cate2Index: 1}
        }
    },
    methods: {
        toggleCate2List(index){
            let targetChild = this.$children.find(vc => vc.$options._componentTag == 'categoryList');
            if(index == -1){
                targetChild.toggleShowList(-1);
            }else{
                targetChild.toggleShowList(this.cates_1[index]);
            }
        }
    },
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
        padding: 10px 0px;
        font-size: 16px;
        padding: 12px 0px;

        .c1wrap{
            padding: 0px 12px;

            background-color: #ffffff;

            transition: 0.25s;
        }

        .c1wrap:hover{
            background-color: #E0E0E0;
        }

        span.cate1{
            display: inline-block;
            padding: 2px 0px;

            &:not(:last-child)::after{
                content: '/';
                color: black !important;
                display: inline-block;
                padding: 0px 2px;
                font-size: 10px;
                vertical-align: bottom;
                margin-bottom: 3px;
            }
        }

        span.cate1:hover {
            color: #e1251b;
            cursor: pointer;
        }
    }
}
</style>