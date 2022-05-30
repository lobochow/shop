<template>
    <div class="spuListWrap">
        <div class="spuItem" v-for="(item, index) in spuList" :key="index" @click="goSpuDetail(item.id)">
            <div class="imgWrap">
                <img :src="item.posterUrl" alt="iphone">
            </div>
            <div class="priceWrap">
                <span>¥{{item.price}}</span>
            </div>
            <div class="descriptionWrap">
                <span>{{item.title}}</span>
            </div>
            <div class="commentsNumWrap">
                <span><b>{{item.commentCount}}</b>条评价</span>
            </div>
            <div class="operateWrap">
                <div class="compare">
                    <input type="checkbox">
                    <span>对比</span>
                </div>
                <div class="like">
                    <i class="iconfont icon-shoucang"></i>
                    <span>关注</span>
                </div>
                <div class="addCart">
                    <i class="iconfont icon-gouwuchekong"></i>
                    <span>加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'spuList',
    props: ['spuList'],
    methods: {
        goSpuDetail(id) {
            this.$router.push({
                path: '/spuDetail',
                query: {id}
            })
        }
    }
}
</script>

<style lang="less">
.spuListWrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    width: 1000px;
    padding: 10px 0px;
    margin: 0px auto;

    .spuItem {
        width: 240px;
        padding: 10px;
        margin-top: 20px;

        background-color: white;
        border: 1px solid transparent;

        * {
            margin-bottom: 5px;
        }

        .imgWrap {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 220px;
            img {
                max-width: 180px;
                max-height: 220px;
            }
        }
        .priceWrap {
            font-size: 20px;
            color: #e4393c;
        }
        .descriptionWrap {
            font-size: 10px;
            color: #666666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .commentsNumWrap {
            font-size: 10px;
            span {
                b {
                    color: #646fb0;
                    font-size: 14px;
                }
            }
        }
        .operateWrap {
            display: flex;
            * {
                font-size: 12px;
            }

            > * {
                border: 1px solid #dddddd;
                padding: 5px 5px 2px 5px;
                flex-shrink: 0;
            }

            .compare {
                color: #666666;
                input {
                    margin-top: 2px;
                }
                span {
                    vertical-align: top;
                }

                &:hover {
                    color: #e4393c;
                    border-color: #e4393c;
                }
            }

            .like {
                color: #666666;
                &:hover {
                    color: #e4393c;
                    border-color: #e4393c;
                }
            }

            .addCart {
                color: #e4393c;
                &:hover {
                    border-color: #e4393c;
                }
            }
        }

        &:hover {
            border: 1px solid #ccc;
            box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
        }
    }
}
</style>