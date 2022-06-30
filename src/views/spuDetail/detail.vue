<template>
    <div class="detailWrap">
        <div class="detail">
            <zoomSwiper :swiperImgs="currentSpuInfo.swipers" />

            <div class="rightArea">
                <h5>{{currentSpuInfo.title}}</h5>
                <div class="price">
                    <span>京东价</span>
                    <span>¥{{currentSpuInfo.price}}</span>
                    <span>降价通知</span>
                    <div>
                        <p>累计评价</p>
                        <p>1万+</p>
                    </div>
                </div>
                <p class="weight">
                    <span>重量</span>
                    <span>{{currentSpuInfo.weight}}kg</span>
                </p>

                <div class="skuList" v-for="(attr, index) in attrList" :key="index">
                    <div>{{attr.attrName}}</div>
                    <ul>
                        <li v-for="(attrValueItem,index) in attr.attrValues" :key="index"
                            :class="{'selectedAttr': isAttrSelected(attr.attrName, attrValueItem.value), 'disableSelect': !attrValueItem.selectable}"
                            @click="attrClick(attr.attrName, attrValueItem.value, $event)">
                            <!-- 缩略图
                                <div class="imgWrap"><img :src="skuItem.skuSmallImg" alt="sku"></div>
                             -->
                            <span>{{attrValueItem.value}}</span>
                        </li>
                    </ul>
                </div>

                <!-- <div class="service">
                    <span>精选服务</span>
                    <ul>
                        <li v-for="(skuServiceItem, index) in skuInfo.skuService" :key="index">
                            <dropdown :valueList="skuServiceItem"></dropdown>
                        </li>
                    </ul>
                </div>

                <div class="shopService">
                    <span>京东服务</span>
                    <ul>
                        <li v-for="(shopServiceItem, index) in skuInfo.shopService" :key="index">
                            <dropdown :valueList="shopServiceItem"></dropdown>
                        </li>
                    </ul>
                </div> -->

                <div class="addCart">
                    <input type="number" value="1" min="1" max="10" v-model="buyNum">
                    <span @click="addCart">加入购物车</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'

import { reqSkuInfo, reqSpuInfo } from '@/api/index.js'

import zoomSwiper from '@/views/spuDetail/zoomSwiper'

import { mapState } from 'vuex'

export default {
    name: 'detail',
    components: { dropdown, zoomSwiper },
    data() {
        return {
            skuInfo: {},
            currentSpuInfo: {},
            attrList: [],
            selectedAttr: [],
            buyNum: 1,
        }
    },
    computed: {
        ...mapState('userStore', ['user_id', 'cartList'])
    },
    methods: {
        getTitle(spuInfo) {
            let result = this.skuInfo.description;

            spuInfo.attrList.forEach(attrItem => {
                result += `-${attrItem.attrValue}`;
            })

            return result;
        },
        async init() {
            await this.getSkuInfo();
            await this.getCurrentSpuInfo();
            this.attrFilter();
        },
        async getSkuInfo() {
            let sku_id = this.$route.query.sku_id;
            let result = await reqSkuInfo({ sku_id });
            this.skuInfo = result.data[0];

            this.getAttrList(this.skuInfo);
        },
        async getCurrentSpuInfo() {
            let _id = this.$route.query._id;
            let result = await reqSpuInfo({ _id });
            this.currentSpuInfo = result.data[0];
            this.currentSpuInfo.title = this.getTitle(this.currentSpuInfo);

            this.currentSpuInfo.attrList.forEach(attr => {
                if (attr.attrName !== '品牌') {
                    this.selectedAttr.push({
                        attrName: attr.attrName,
                        attrValue: attr.attrValue
                    });
                }
            })

            this.attrFilter();
        },
        getAttrList(skuInfo) {
            skuInfo.attrList.forEach(attr => {
                let attrShowItem = { attrName: attr, attrValues: [] };

                skuInfo.spuList.forEach(spu => {
                    spu.attrList.forEach(spuAttr => {
                        if (spuAttr.attrName === attr && attrShowItem.attrValues.every(attrItem => attrItem.value !== spuAttr.attrValue)) {
                            attrShowItem.attrValues.push({
                                value: spuAttr.attrValue,
                                selectable: true
                            });
                        }
                    })
                })

                if (attrShowItem.attrValues.length !== 0 && attrShowItem.attrName !== '品牌') {
                    this.attrList.push(attrShowItem);
                }
            })
        },
        isAttrSelected(attrName, attrValue) {
            let result = false;
            let attrItem = this.selectedAttr.find(item => item.attrName === attrName);
            if (attrItem && attrItem.attrValue === attrValue) {
                result = true;
            }
            return result;
        },
        attrFilter() {
            //设定测试条件
            //this.selectedAttr = [{ attrName: '机身内存', attrValue: '128G' }];

            this.attrList.forEach(attrItem => {
                attrItem.attrValues.forEach(attrValueItem => {
                    attrValueItem.selectable = false;
                })
            })

            //this.attrList.splice(0, 0);

            let spuList = this.skuInfo.spuList;
            let filterSpus = [];

            for (let i = 0; i < spuList.length; i++) {
                try {
                    this.selectedAttr.forEach(selectedAttrItem => {
                        spuList[i].attrList.forEach(spuAttrItem => {
                            if (spuAttrItem.attrName === selectedAttrItem.attrName && spuAttrItem.attrValue !== selectedAttrItem.attrValue) {

                                throw new Error('跳出循环');
                            }
                        })
                    })

                    //添加符合要求的spu
                    filterSpus.push(spuList[i]);
                } catch (error) {
                    //console.log(error);
                }
            }

            filterSpus.forEach(filterSpu => {
                filterSpu.attrList.forEach(attrItem => {
                    let attrRow = this.attrList.find(oneOfAllAttrItem => oneOfAllAttrItem.attrName === attrItem.attrName);
                    if (attrRow) {
                        attrRow.attrValues.find(row => row.value === attrItem.attrValue).selectable = true;
                    }
                })
            })

            if (filterSpus.length === 1) {
                this.currentSpuInfo = filterSpus[0];
            }
        },
        attrClick(attrName, attrValue, e) {
            //console.log(e.path);
            if (e.currentTarget.classList.contains('disableSelect')) {
                //console.log('disableSelect');
            } else if (e.currentTarget.classList.contains('selectedAttr')) {
                e.currentTarget.classList.remove('selectedAttr');
                let deleteIndex = this.selectedAttr.findIndex(selectedAttrItem => selectedAttrItem.attrName === attrName);
                delete this.selectedAttr.splice(deleteIndex, 1);
                this.attrFilter();
            } else {
                this.selectedAttr.push({
                    attrName,
                    attrValue
                })
                this.attrFilter();
            }
        },
        async addCart() {
            
            if (!this.user_id) {
                this.$message({
                    type: 'warning',
                    message: '请先登陆！'
                })
            } else {

                let targetGoodList = this.cartList?.map(item => ({
                    count: item.count,
                    spu_id: item.spuInfo._id
                }));
                
                //检测销售属性是否全选
                if(this.selectedAttr.length < this.attrList.length) {
                    this.$message({
                        type: 'warning',
                        message: '请选择完整的属性!'
                    })
                    return;
                }

                let hasGood = targetGoodList.find(item => item.spu_id === this.currentSpuInfo._id);
                if (hasGood) {
                    hasGood.count += this.buyNum;
                } else {
                    targetGoodList.push({
                        spu_id: this.currentSpuInfo._id,
                        count: this.buyNum
                    });
                }

                try {
                    this.$store.dispatch('userStore/acAddCart', {
                        user_id: this.user_id,
                        goodsList: targetGoodList
                    })
                    this.$message({
                        type: 'success',
                        message: '已加入购物车!'
                    })
                } catch (error) {
                    this.$message({
                        type: 'waring',
                        message: error.message
                    })
                }
            }
        }
    },
    mounted() {
        this.init();
    }

}
</script>

<style lang="less">
@import "@/styles/variables.less";

.detailWrap {
    width: 100%;
    min-width: 1000px;
    background-color: white;
    .detail {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        margin: 0 auto;

        .rightArea {
            width: 550px;
            height: 400px;

            h5 {
                color: #666666;
            }

            .price {
                margin-top: 10px;
                padding: 10px;

                background-color: #f3f3f3;
                > :nth-child(1) {
                    font-size: 10px;
                    letter-spacing: 5px;
                    color: #999999;
                }

                > :nth-child(2) {
                    margin-left: 10px;
                    color: #e2231a;
                }

                > :nth-child(3) {
                    margin-left: 10px;
                    font-size: 12px;
                    color: #007bbd;
                }

                > :nth-child(4) {
                    border-left: solid 1px #ccc;
                    margin: 0px 10px 0px 0px;
                    float: right;
                    font-size: 10px;
                    p {
                        width: 100%;
                        text-align: center;
                        margin: 0px 10px 0px 0px;
                    }
                }
            }

            .weight {
                padding: 10px;
                * {
                    font-size: 10px;
                }

                > :nth-child(1) {
                    color: #999999;
                    letter-spacing: 20px;
                }
            }

            .skuList {
                display: flex;

                padding: 10px;

                font-size: 10px;

                > :nth-child(1) {
                    flex-shrink: 0;

                    color: #999999;
                    vertical-align: middle;
                }

                ul {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    margin: 0px;
                    padding-left: 10px;
                    max-width: 100%;

                    list-style: none;

                    li {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        margin-right: 10px;
                        margin-bottom: 10px;

                        border: #cccccc 1px solid;
                        background-color: @bg-gray;

                        > .imgWrap {
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            width: 30px;
                            height: 30px;

                            background-color: white;

                            > img {
                                max-width: 30px;
                                max-height: 30px;
                                vertical-align: middle;
                            }
                        }

                        span {
                            margin: 0px 10px;
                            flex-shrink: 0;
                        }

                        &:hover,
                        &.selectedAttr {
                            border: #e2231a 1px solid;
                        }

                        &.disableSelect {
                            cursor: not-allowed;
                            border: #999999 1px dotted;
                            color: #ccc;
                        }
                    }
                }
            }

            .service,
            .shopService {
                padding: 10px;
                display: flex;
                align-items: center;

                > span {
                    font-size: 10px;
                    color: #999999;
                }

                > ul {
                    display: flex;

                    padding-left: 10px;

                    list-style: none;

                    > li {
                        margin-right: 10px;
                    }
                }
            }

            .addCart {
                margin-left: 10px;
                margin-top: 40px;

                > input {
                    font-size: 32px;
                    width: 60px;
                    text-align: center;
                    vertical-align: middle;
                    border: 1px solid #ccc;

                    &::-webkit-inner-spin-button,
                    &::-webkit-outer-spin-button {
                        opacity: 1;
                    }

                    &:focus {
                        outline: none;
                    }
                }

                > span {
                    margin-left: 10px;
                    display: inline-block;
                    background-color: #e2231a;
                    color: white;
                    height: 40px;
                    padding: 5px 15px;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>