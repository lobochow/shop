<template>
    <div
        class="categoryList"
        @mouseenter="toggleShowList(0)"
        @mouseleave="toggleShowList(-1)"
    >
        <div class="upCategory">
            <span v-for="(quickTitle, index) in cate_1.quick" :key="index" @click="goSearch(quickTitle)"
                >{{ quickTitle }}<i class="iconfont icon-xiangyou1"></i
            ></span>
        </div>
        <div
            class="categorys"
            v-for="(cate_2, index) in cate_1.cates_2"
            :key="index"
        >
            <div class="c2" @click="goSearch(cate_2.c2name)">
                {{ cate_2.c2name }}<i class="iconfont icon-xiangyou1"></i>
            </div>
            <div class="c3">
                <span v-for="(cate_3, index) in cate_2.cates_3" :key="index" @click="goSearch(cate_3.c3name)">{{
                    cate_3.c3name
                }}</span>
            </div>
        </div>
    </div>
</template>

<script>
//引入mixin
import {routerJump} from '@/mixin/index.js'

export default {
    name: "categoryList",
    mixins: [routerJump],
    data() {
        return {
            cate_1: {},
            showtimer: -1,
        };
    },
    methods: {
        toggleShowList(index) {
            if (this.showtimer != -1) {
                clearTimeout(this.showtimer);
            }
            this.showtimer = setTimeout(() => {
                if (index == -1) {
                    this.$el.style.visibility = "hidden";
                } else if (index == 0) {
                    this.$el.style.visibility = "visible";
                } else {
                    this.cate_1 = index;
                    this.$el.style.visibility = "visible";
                }
            }, 50);
        },
    },
    mounted() {
        this.$on("showList", this.toggleShowList);
    },
};
</script>

<style lang='less' scoped>
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

    &:hover {
        visibility: visible;
    }
}

.c2,.c3 > span,.upCategory > span{
    cursor: pointer;
}

.c2,.c3 > span{
    &:hover{
        color: #E22519;
    }
}

.upCategory > span{
    &:hover{
        background-color: #E22519;
    }
}
</style>