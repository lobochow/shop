<template>
  <div class="spuContainer">
        <div class="imgWrap">
            <img src="@/assets/images/spuImg/2060.png" alt="iphone">
        </div>
        <div class="priceWrap">
            <span>¥1799.00</span>
        </div>
        <div class="descriptionWrap">
            <span>微星（MSI）万图师 GeForce RTX 2060 VENTUS 12G OC 超频版 电竞游戏设计专业电脑显卡</span>
        </div>
        <div class="commentsNumWrap">
            <span><b>5</b>条评价</span>
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
</template>

<script>
export default {
    name: 'spuList'
}
</script>

<style lang="less">
.spuContainer{
    width: 240px;
    background-color: white;
    padding: 10px;
    border: 1px solid transparent;

    *{
        margin-bottom: 5px;
    }

    .imgWrap{
        text-align: center;
        img{
            max-width: 180px;
            max-height: 220px;
        }
    }
    .priceWrap{
        font-size: 20px;
        color: #E4393C;
    }
    .descriptionWrap{
        font-size: 10px;
        color: #666666;
    }
    .commentsNumWrap{
        font-size: 10px;
        span{
            b{
                color: #646FB0;
                font-size: 14px;
            }
        }
    }
    .operateWrap{
        display: flex;
        *{
            font-size: 12px;
        }

        >*{
            border: 1px solid #DDDDDD;
            padding: 5px 5px 2px 5px;
            flex-shrink: 0;
        }

        .compare{
            color: #666666;
            input{
                margin-top: 2px;
            }
            span{
                vertical-align: top;
            }

            &:hover{
                color: #E4393C;
                border-color: #E4393C;
            }
        }

        .like{
            color: #666666;
            &:hover{
                color: #E4393C;
                border-color: #E4393C;
            }
        }

        .addCart{
            color: #E4393C;
            &:hover{
                border-color: #E4393C;
            }
        }
    }

    &:hover{
        border: 1px solid #CCC;
        box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.3);
    }
}
</style>