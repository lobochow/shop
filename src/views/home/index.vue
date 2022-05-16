<template>
    <div class="home">
        <header>
            <!-- 顶部导航栏 -->
            <topNav />

            <!-- 搜索框区域 -->
            <searchArea />
        </header>

        <!-- 内容区 -->
        <div class="content">
            <area1 />
        </div>
    </div>
</template>

<script>
import topNav from "@/components/topNav";
import searchArea from "@/components/searchArea";
import area1 from "@/views/home/area1";

export default {
    name: "home",
    components: { topNav, searchArea, area1 },
};
</script>

<style lang="less">
html{
    background-color: rgb(244,244,244);
}

.home {
    header {
        min-width: 1000px;
        width: 100vw;
    }

    .content {
        width: 1000px;
        margin: 10px auto;
    }
}
</style>