<template>
    <div class="attribute" :class="{'unflod': !flod}">
        <span class="title">{{title}}：</span>
        <div class="listContainer">
            <ul class="attributeList">
                <li v-for="(attrVaule, index) in attrList" :key="index">
                    <input type="checkbox" v-show="multiSelectStatus">
                    <span @click="selectOneAttrValue(attrVaule)" class="attrValue">{{attrVaule}}</span>
                </li>
            </ul>
            <div class="buttons">
                <button v-show="multiSelectStatus">确定</button>
                <button v-show="multiSelectStatus" @click="toggleMultiSelect">取消</button>
            </div>
        </div>
        <!-- <div class="more" v-show="!multiSelectStatus" @click="toggleFlod">
            更多
            <i class="iconfont icon-xiangxia"></i>
        </div>
        <div class="multiSelect" v-show="!multiSelectStatus" @click="toggleMultiSelect">
            多选
            <i class="iconfont icon-xiangxia"></i>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'normalAttrRow',
    props: ['title', 'attrList'],
    data() {
        return {
            multiSelectStatus: false,
            flod: true,
            rowItemNum: 5
        }
    },
    methods: {
        toggleFlod(){
            this.flod = !this.flod;
        },
        toggleMultiSelect(){
            this.multiSelectStatus = !this.multiSelectStatus;
            this.flod = !this.flod;
        },
        selectOneAttrValue(attrVaule){
            this.$emit('selectAttr', attrVaule);
        }
    },
}
</script>

<style lang="less" scoped>
.attribute {
    display: flex;

    height: 40px;

    &:nth-child(2) {
        border-top: 1px solid #dddddd;
    }

    border-bottom: 1px solid #dddddd;

    .title {
        font-size: 12px;
        font-weight: bold;
        width: 100px;
        flex-shrink: 0;
        background-color: #f3f3f3;
        padding: 10px;
    }

    .listContainer {
        overflow: hidden;
        .attributeList {
            list-style: none;
            width: 800px;
            background-color: white;
            display: flex;
            flex-wrap: wrap;
            >li {
                display: flex;
                align-items: center;
                padding: 10px;
                min-width: 150px;
                white-space: nowrap;
                font-size: 12px;
                color: #005aa0;

                .attrValue{
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }

        .buttons {
            text-align: center;
            button {
                margin: 5px;
                font-size: 12px;
                text-align: center;
                width: 40px;
            }
        }
    }

    .more {
        font-size: 12px;
        border: 1px solid #dddddd;
        flex-shrink: 0;
        align-self: flex-start;
        padding: 3px;
        margin: 7px;
        user-select: none;

        i {
            color: #ddd;
        }

        &:hover {
            cursor: pointer;
        }
    }

    .multiSelect {
        font-size: 12px;
        border: 1px solid #dddddd;
        flex-shrink: 0;
        align-self: flex-start;
        padding: 3px;
        margin: 7px;
        user-select: none;

        i {
            color: #ddd;
        }

        &:hover {
            cursor: pointer;
        }
    }

    &.unflod {
        height: auto;
    }
}
</style>