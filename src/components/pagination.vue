<template>
  <div class="paginationContainer">
      <button :class="{disabled : currentPage == 1}" @click="getPage(currentPage-1,$event)">上一页</button>
      <span v-show="currentPage > 1" class="page" @click="getPage(1,$event)">1</span>
      <span class="paginationDot" v-show="currentPage > 3" >...</span>
      <span v-show="currentPage > 2" class="page" @click="getPage(currentPage-1,$event)">{{currentPage-1}}</span>
      <span class="current page" @click="getPage(currentPage,$event)">{{currentPage}}</span>
      <span v-show="currentPage+1 < sumPage" class="page" @click="getPage(currentPage+1,$event)">{{currentPage+1}}</span>
      <span class="paginationDot" v-show="currentPage+2 < sumPage">...</span>
      <span v-show="sumPage > currentPage" class="page" @click="getPage(sumPage,$event)">{{sumPage}}</span>
      <button :class="{disabled : currentPage == sumPage}" @click="getPage(currentPage+1, $event)">下一页</button>
  </div>
</template>

<script>
export default {
    name: 'pagination',
    data() {
        return {
            currentPage:1,
            sumPage: 10,
            allRecords: 100,
            pageSize: 5
        }
    },
    methods: {
        getPage(page, e){
            if(!e.target.classList.contains('disabled')){
                this.currentPage = page;
            }
        }   
    }
}
</script>

<style lang="less" scoped>
    .paginationContainer{
        display: flex;
        justify-content: end;
        margin-top: 10px;
        >*:not(:nth-child(1)){
            margin-left: 10px;
        }

        >*{
            font-size: 16px;
            border: 1px solid #CCCCCC;
            padding: 2px 7px;
            border-radius: 5px;
        }

        .paginationDot{
            border: none;
        }

        .current{
            border: none;
            color: rgb(210, 13, 13);
        }

        >button{
            &.disabled{
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }
</style>