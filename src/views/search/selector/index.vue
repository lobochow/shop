<template>
    <div class="selectorContainer">
        <div class="brand">
            <span class="title">品牌：</span>
            <div class="brandImgContainer">
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/huawei.png"
                        alt="huawei"
                    />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/apple.png"
                        alt="apple"
                    />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/honor.png"
                        alt="honor"
                    />
                </div>
                <div class="imgContainer">
                    <img src="@/assets/images/phoneBrand/lg.png" alt="lg" />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/meizu.png"
                        alt="meizu"
                    />
                </div>
                <div class="imgContainer">
                    <img src="@/assets/images/phoneBrand/oppo.png" alt="oppo" />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/nokia.png"
                        alt="nokia"
                    />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/samsung.png"
                        alt="samsung"
                    />
                </div>
                <div class="imgContainer">
                    <img src="@/assets/images/phoneBrand/sony.png" alt="sony" />
                </div>
                <div class="imgContainer">
                    <img
                        src="@/assets/images/phoneBrand/xiaomi.png"
                        alt="xiaomi"
                    />
                </div>
                <div class="imgContainer">
                    <img src="@/assets/images/phoneBrand/zte.png" alt="zte" />
                </div>
            </div>
            <div class="more">
                更多
                <i class="iconfont icon-xiangxia"></i>
            </div>
        </div>

        <div class="attribute flod" ref="flodList">
            <span class="title">电脑组件：</span>
            <div class="listContainer">
                <ul class="attributeList">
                    <li><input type="checkbox" v-show="multiSelectStatus">显示器</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">显示器配件</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">组装电脑</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">显卡</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">特殊商品</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">主板</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">机箱</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">散热器</li>
                    <li><input type="checkbox" v-show="multiSelectStatus">装机配件</li>
                </ul>
                <div class="buttons">
                    <button>确定</button>
                    <button @click="toggleMultiSelect">取消</button>
                </div>
            </div>
            <div class="more" @click="unflodList" v-show="!multiSelectStatus">
                更多
                <i class="iconfont icon-xiangxia"></i>
            </div>
            <div class="multiSelect" @click="toggleMultiSelect" v-show="!multiSelectStatus">
                多选
                <i class="iconfont icon-xiangxia"></i>
            </div>
        </div>

        <div class="senior">
            <div class="title"><span>高级选项：</span></div>
            <ul class="attrList">
                <li @mouseenter="toggleSeniorDetail('visible')" @mouseleave="toggleSeniorDetail('hidden')">类型<i class="iconfont icon-xiangxia"></i></li>
                <li>面板<i class="iconfont icon-xiangxia"></i></li>
                <li>屏幕比例<i class="iconfont icon-xiangxia"></i></li>
                <li>接口<i class="iconfont icon-xiangxia"></i></li>
                <li>特性<i class="iconfont icon-xiangxia"></i></li>
                <li>HDR<i class="iconfont icon-xiangxia"></i></li>
                <li>响应时间<i class="iconfont icon-xiangxia"></i></li>
                <li>特征<i class="iconfont icon-xiangxia"></i></li>
                <li>升降台<i class="iconfont icon-xiangxia"></i></li>
                <li>支架屏数<i class="iconfont icon-xiangxia"></i></li>
            </ul>
            <div class="seniorDetail" ref="seniorDetail" @mouseenter="toggleSeniorDetail('visible')"
            @mouseleave="toggleSeniorDetail('hidden')">
                <ul>
                    <li>曲面屏</li>
                    <li>直面屏</li>
                    <li>触控屏</li>
                    <li>大屏显示器</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "selector",
    data() {
        return {
            multiSelectStatus: false,
            seniorDetailTimer: -1
        }
    },
    methods:{
        unflodList(){
            this.$refs.flodList.classList.toggle('flod');
        },
        toggleMultiSelect(e){
            this.unflodList(e);
            this.multiSelectStatus = !this.multiSelectStatus;
        },
        toggleSeniorDetail(status){
            if(this.seniorDetailTimer == -1){
                this.seniorDetailTimer = setTimeout(() => {
                    this.$refs.seniorDetail.style.visibility = status;
                    this.seniorDetailTimer = -1;
                }, 150);
            }else{
                clearTimeout(this.seniorDetailTimer);
                this.seniorDetailTimer = -1;
            }
            console.log(this.seniorDetailTimer);
        }
    }
};
</script>

<style lang="less">
.selectorContainer {
    width: 1000px;
    margin: 10px auto 0px auto;
    border-top: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    .brand {
        display: flex;

        .title {
            flex-shrink: 0;
            font-size: 12px;
            font-weight: bold;
            width: 100px;
            background-color: #f3f3f3;
            padding: 10px;
        }
        .brandImgContainer {
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            padding: 10px 10px 0px 10px;
            margin-bottom: 10px;
            height: 49px;
            box-sizing: content-box;
            overflow: hidden;

            .imgContainer {
                width: 150px;
                height: 50px;
                text-align: center;
                border: 1px solid #dddddd;
                margin: -1px 0 0 -1px;

                img {
                    max-width: 100%;
                    max-height: 100%;
                }
            }

            &.unflod {
                height: auto;
                overflow: auto;
            }
        }

        .more {
            font-size: 12px;
            border: 1px solid #dddddd;
            flex-shrink: 0;
            align-self: flex-start;
            padding: 3px;
            margin: 7px;

            i {
                color: #ddd;
            }
        }
    }

    .attribute {
        display: flex;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;

        .title {
            font-size: 12px;
            font-weight: bold;
            width: 100px;
            flex-shrink: 0;
            background-color: #f3f3f3;
            padding: 10px;
        }
        
        .listContainer{
            overflow: hidden;
            .attributeList {
                list-style: none;
                width: 800px;
                background-color: white;
                display: flex;
                flex-wrap: wrap;
                li {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    min-width: 150px;
                    white-space: nowrap;
                    font-size: 12px;
                    color: #005aa0;
                }
            }

            .buttons{
                text-align: center;
                button{
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

            &:hover{
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

            &:hover{
                cursor: pointer;
            }
        }

        &.flod {
            height: 40px;
        }
    }

    .senior {
        display: flex;
        font-size: 12px;
        border-bottom: 1px solid #dddddd;
        position: relative;

        .title {
            width: 100px;
            background-color: #f3f3f3;
            padding: 10px;
            span {
                font-weight: bold;
                line-height: 30px;
            }
        }

        .attrList {
            list-style: none;
            display: flex;
            flex-grow: 1;
            align-items: center;
            background-color: white;
            justify-content: space-between;
            padding: 10px;
            li {
                color: #005aa0;
                border: 1px solid #dddddd;
                padding: 5px;
                i {
                    vertical-align: middle;
                    color: #c1c1c1;
                }
            }
        }

        .seniorDetail {
            visibility: hidden;
            position: absolute;
            left: 0px;
            top: 40px;
            width: 980px;
            border: 1px solid rgba(0, 0, 0, 0.4);
            background-color: white;
            box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.2);
            ul {
                list-style: none;
                display: flex;
                li {
                    color: #005aa0;
                    padding: 5px;
                    margin-right: 30px;
                }
            }
        }
    }
}
[type=checkbox]{
    margin-top: 1px;
}
</style>