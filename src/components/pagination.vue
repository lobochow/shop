<template>
    <div class="paginationContainer">
        <button :class="{disabled : currentPage == 1}" @click="getPage(currentPage-1,$event)">上一页</button>
        <span v-show="currentPage > 1" class="page" @click="getPage(1,$event)">1</span>
        <span class="paginationDot" v-show="currentPage > 3">...</span>
        <span v-show="currentPage > 2" class="page" @click="getPage(currentPage-1,$event)">{{currentPage-1}}</span>
        <span class="current page" @click="getPage(currentPage,$event)">{{currentPage}}</span>
        <span v-show="currentPage+1 < sumPage" class="page"
              @click="getPage(currentPage+1,$event)">{{currentPage+1}}</span>
        <span class="paginationDot" v-show="currentPage+2 < sumPage">...</span>
        <span v-show="sumPage > currentPage" class="page" @click="getPage(sumPage,$event)">{{sumPage}}</span>
        <button :class="{disabled : currentPage == sumPage}" @click="getPage(currentPage+1, $event)">下一页</button>
        <select @change="pageSizeChange" v-model="selectPageSize">
            <option v-for="(pageSizeOption, index) in pageSizes" :key="index" :value="pageSizeOption">{{`${pageSizeOption}条/页`}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'pagination',
    props: ['currentPage', 'pageSize', 'total', 'pageSizes'],
    data() {
        return {
            selectPageSize: 0
            //currentPage:1,
            //sumPage: 10,
            //pageSize: 5
        }
    },
    computed: {
        sumPage() {
            return Math.ceil(this.total / this.pageSize);
        }
    },
    methods: {
        getPage(page, e) {
            if (!e.target.classList.contains('disabled')) {
                this.$emit('pageChange', page);
            }
        },
        pageSizeChange() {
            this.$emit('pageSizeChange', this.selectPageSize);
        }
    },
    mounted() {
        this.selectPageSize = this.pageSize;
    },
}
</script>

<style lang="less" scoped>
.paginationContainer {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    > *:not(:nth-child(1)) {
        margin-left: 10px;
    }

    > * {
        font-size: 16px;
        border: 1px solid #cccccc;
        padding: 2px 7px;
        border-radius: 5px;
    }

    .paginationDot {
        border: none;
    }

    .current {
        border: none;
        color: rgb(210, 13, 13);
    }

    > button {
        &.disabled {
            cursor: not-allowed;
            color: #ccc;
        }
    }
}
</style>