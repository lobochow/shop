<template>
    <span>
        <i class="iconfont icon-xingxing1" ref="rateStar" v-for="index in 5" :key="index" :class="{'pointed': index <= point}" 
        @click="changePoint(index)"
        @mouseenter="turnRed(index)" 
        @mouseleave="turnWhite"></i>
    </span>
</template>

<script>
export default {
    name: 'rate',
    data() {
        return {
            point: 0
        }
    },
    methods: {
        changePoint(index){
            this.point = index;
            this.$emit('changePoint', index);
        },
        turnRed(index){
            let stars = this.$refs["rateStar"];
            for(let i = 0; i < index; i++){
                stars[i].classList.add('selected');
            }
        },
        turnWhite(){
            this.$refs["rateStar"].forEach(item => item.classList.remove('selected'));
        }
    },
}
</script>

<style lang="less" scoped>
i {
    color: white;
    text-shadow: 0px 0px 1px black;

    cursor: pointer;
}

i.selected, i.pointed {
    color: #e43c3f;
}
</style>