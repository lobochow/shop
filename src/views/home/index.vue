<template>
    <div class="home">
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

export default {
    name: "home",
    components: { topNav, searchArea, area1 },
    data() {
        return {
            cates_1: {}
        }
    },
    mounted(){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4) {
                console.log('readyStateChanged!')
                if(xhr.status == 200){
                    this.cates_1 = JSON.parse(xhr.responseText);
                }else{
                    console.log('Error:', xhr.status, xhr.statusText);
                }
            }
        }
        xhr.open('get', '/v1/category_1', true);
        xhr.send(null);
    }
};
</script>

<style lang="less">
html{
    background-color: rgb(244,244,244);
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