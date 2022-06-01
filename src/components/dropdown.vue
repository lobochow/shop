<template>
    <div class="dropdown" :style="style">
        <span class="title">
            {{title || valueList[0] || null}}
        </span>
        <div class="dropdownListWrap" :class="size">
            <ul class="dropdownList">
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
    props: ['title', 'valueList', 'checkbox'],
    data() {
        return {
            style: {
                '--titleOffsetX': '',
                '--titleOffsetY': ''
            },
            size: 'large'
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
    position: relative;
    display: flex;

    font-size: 12px;

    > span {
        position: relative;

        padding: 2px;

        border: 1px solid @border-gray;
    }

    .dropdownListWrap {
        position: absolute;

        left: 0px;
        top: calc(var(--titleOffsetY) - 1px);

        border: 1px solid @border-gray;
        background-color: white;

        > ul {
            list-style: none;

            > li {
                padding: 2px;
                white-space: nowrap;
            }
        }

        visibility: hidden;

        &.small{
            .dropdownList{
                display: flex;
                flex-direction: column;
            }
        }
        
        &.medium{
            .dropdownList{
                display: flex;
                flex-wrap: wrap;

                max-width: 300px;

                >li{
                    margin-right: 10px;
                    min-width: 50px;
                }
            }         
        }

        &.large{
            .dropdownList{
                display: flex;
                flex-wrap: wrap;

                max-width: 500px;

                >li{
                    margin-right: 10px;
                    min-width: 50px;
                    flex-grow: 1;
                }
            }         
        }
    }

    &:hover {
        >.title{
            background-color: #F3F3F3;
        }

        > .dropdownListWrap {
            visibility: visible;
        }
    }
}
</style>