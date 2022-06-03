<template>
    <div class="dropdown" :style="style">
        <span class="title">
            {{title || valueList[0] || null}}
        </span>
        <div class="dropdownListWrap">
            <ul class="dropdownList" :class="direction || 'column'">
                <li v-for="(item, index) in valueList" :key="index">
                    <input type="checkbox" v-if="checkbox">{{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropdown',
    props: ['title', 'valueList', 'checkbox', 'direction'],
    data() {
        return {
            style: {
                '--titleOffsetX': '',
                '--titleOffsetY': ''
            }
        }
    },
    mounted() {
        this.style["--titleOffsetX"] = this.$el.offsetWidth + 'px';
        this.style["--titleOffsetY"] = this.$el.offsetHeight + 'px';
    },
}
</script>

<style lang="less" scoped>
@import "@/styles/variables.less";

.dropdown {
    font-size: 12px;

    > span {
        padding: 2px;

        border: 1px solid @border-gray;
    }

    .dropdownListWrap {
        visibility: hidden;
        position: absolute;

        border: 1px solid @border-gray;
        background-color: white;

        transform: translateY(2px);

        .dropdownList {
            display: flex;

            max-width: 300px;

            list-style: none;

            > li {
                padding: 2px;

                white-space: nowrap;
            }

            &.row{
                justify-content: space-between;
                flex-wrap: wrap;

                > li{
                    margin-right: 10px;
                }
            }

            &.column{
                flex-direction: column;
            }
        }
    }

    &:hover {
        > .title {
            background-color: #f3f3f3;
        }

        > .dropdownListWrap {
            visibility: visible;
        }
    }
}
</style>