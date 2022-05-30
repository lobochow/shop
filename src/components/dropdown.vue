<template>
    <div class="dropdown" :style="style">
        <span>
            {{title || valueList[0]}}
        </span>
        <div class="dropdownList">
            <ul>
                <li>
                    <input type="checkbox" v-if="checkbox">5年只换不修
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
    position: relative;
    display: flex;

    font-size: 12px;

    > span {
        position: relative;

        padding: 2px;

        border: 1px solid @border-gray;
    }

    &:hover {
        >span{
            z-index: 1;

            border-bottom: 1px solid white;
        }

        > .dropdownList {
            visibility: visible;
        }
    }
}

.dropdownList {
    position: absolute;

    left: 0px;
    top: calc(var(--titleOffsetY) - 1px);

    border: 1px solid @border-gray;

    > ul {
        list-style: none;

        > li {
            padding: 2px;
            white-space: nowrap;
        }
    }

    visibility: hidden;
}
</style>