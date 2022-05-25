<template>
    <div class="imgWrap" :style="itemStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'swiperItem',
    data() {
        return {
            transform: '',
            transition: ''
        }
    },
    computed: {
        itemStyle(){
            let {transform, transition} = this;
            return {
                transform,
                transition
            }
        }
    },
    methods: {
        initItem(activedIndex, index){
            if(activedIndex != index){
                this.translateLeft();
            }
        },
        translateItem(flag, newIndex, oldIndex, index){
            if(index == newIndex){
                if(flag == 'left'){
                    this.onAnimation();
                    this.translateCenter();
                }
                if(flag == 'right'){
                    this.translateRight();
                    this.$nextTick(()=>{
                        this.translateCenter();
                        this.onAnimation();
                    })
                }
            }else if(index == oldIndex){
                if(flag == 'left'){
                    this.translateRight();
                }
                if(flag == 'right'){
                    this.translateLeft();
                }
            } else{
                this.offAnimation();
                this.translateLeft();
            }
        },
        translateLeft(){
            this.transform = `translateX(${-this.$el.offsetWidth}px)`;
        },
        translateRight(){
            this.transform = `translateX(${+this.$el.offsetWidth}px)`;
        },
        translateCenter(){
            this.transform = `translateX(0px)`;
        },
        onAnimation(){
            this.transition = '0.25s';
        },
        offAnimation(){
            this.transition = 'none';
        }
    },
}
</script>

<style lang="less" scoped>
    .imgWrap {
        width: 580px;
        height: 470px;
        display: flex;
        justify-content: center;
        align-items: center;
        >* {
            max-width: 580px;
            max-height: 470px;
        }
    }
</style>