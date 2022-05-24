<template>
    <div class="categoryList">
        <div class="upCategory">
            <span v-for="(quickTitle, index) in cate_1.quick" :key="index">{{quickTitle}}<i class="iconfont icon-xiangyou1"></i></span>
        </div>
        <div class="categorys" v-for="(cate_2, index) in cate_1.cates_2" :key="index">
            <div class="c2">
                {{cate_2.c2name}}<i class="iconfont icon-xiangyou1"></i>
            </div>
            <div class="c3">
                <span v-for="(cate_3, index) in cate_2.cates_3" :key="index">{{cate_3.c3name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "categoryList",
    data() {
        return {
            cate_1: {}
        }
    },
    methods: {
        toggleShowList(index){
            if(index == -1){
                this.$el.style.visibility = 'hidden';
            }else{
                this.cate_1 = index;
                this.$el.style.visibility = 'visible';
            }
        }
    },
    mounted(){
        this.$on('showList', this.toggleShowList);
    }
};
</script>

<style lang='less'>
.categoryList {
    visibility: hidden;
    position: absolute;
    width: 800px;
    background-color: white;
    z-index: 2;
    left: 205px;
    box-shadow: 2px 0px 5px 1px rgba(0, 0, 0, 0.4);
    font-size: 12px;
    padding: 20px;
    .upCategory {
        span {
            background-color: #333333;
            color: white;
            margin-right: 8px;
            padding: 3px 5px;
            i {
                font-size: 6px;
            }
        }
    }

    .categorys {
        margin-top: 16px;
        display: flex;
        padding-left: 6px;
        .c2 {
            margin-right: 20px;
            flex-shrink: 0;
            i {
                font-size: 8px;
            }
        }
        .c3 {
            display: flex;
            flex-wrap: wrap;
            span {
                margin-right: 12px;
                margin-bottom: 5px;
            }
        }
    }
}
</style>