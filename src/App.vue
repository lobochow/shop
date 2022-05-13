<template>
  <div id="app">
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

import topNav from '../views/topNav'
import searchArea from '../views/searchArea'
import area1 from '../views/area1'

export default {
  name: 'App',
  components:{topNav, searchArea, area1}
}
</script>

<style lang='less'>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    background-color: rgb(244,244,244);
}

#app{
    header{
        min-width: 1000px;
        width: 100vw;
    }

    .content{
        width: 1000px;
        margin: 10px auto;
    }
} 
</style>