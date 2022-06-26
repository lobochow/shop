<template>
    <div class="home">
        <top-nav></top-nav>
        <header>
            <!-- 搜索框区域 -->
            <searchArea />
        </header>

        <!-- 内容区 -->
        <div class="content">
            <area1 :cates_1="cates_1" />
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav";
import searchArea from "@/components/searchArea";
import area1 from "@/views/home/area1";

//引入ajax请求api
import { getCategoryList } from '@/api/index.js'

export default {
    name: "home",
    components: { topNav, searchArea, area1 },
    data() {
        return {
            cates_1: {}
        }
    },
    methods: {
        async setCategoryList() {
            try {
                this.cates_1 = await getCategoryList();
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.setCategoryList();
    }
};
</script>

<style lang="less">
html {
    background-color: rgb(244, 244, 244);
}

.home {
    header {
        min-width: 1000px;
        width: 100%;
    }

    .content {
        width: 1000px;
        margin: 10px auto;
    }
}
</style>