<template>
    <div class="imgWrap" :style="itemStyle" @click="testtest">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'swiperItem',
    data() {
        return {
            itemStyle: {
                transform: '',
                transition: '',
                visibility: 'hidden',
                "--distrance": ''
            }
        }
    },
    methods: {
        testtest(){
            console.log(1);
        },
        initItem(activedIndex, index) {
            if (activedIndex == index) {
                this.itemStyle.visibility = 'visible';
            }
        },
        translateItem(flag, newIndex, oldIndex, index) {
            if (index == newIndex) {
                if (flag == 'left') {
                    // this.onAnimation();
                    // this.translateCenter();
                    this.$el.className = 'imgWrap ltc';
                    this.itemStyle.visibility = 'visible';
                }
                if (flag == 'right') {
                    // this.offAnimation();
                    // this.translateRight();
                    // setTimeout(() => {
                    //     this.onAnimation();
                    //     this.translateCenter();
                    // }, 10);
                    this.$el.className = 'imgWrap rtc';
                    this.itemStyle.visibility = 'visible';
                }
            } else if (index == oldIndex) {
                if (flag == 'left') {
                    this.$el.className = 'imgWrap ctr';
                    //this.translateRight();
                }
                if (flag == 'right') {
                    this.$el.className = 'imgWrap ctl';
                    //this.translateLeft();
                }
            } else {
                this.$el.className = 'imgWrap';
                this.itemStyle.visibility = 'hidden';
            }
        }
    },
    mounted(){
        this.itemStyle['--distrance'] = this.$el.offsetWidth + 'px';
    }
}
</script>

<style lang="less" scoped>
.imgWrap {
    --animation-time: 0.25s;
    width: 580px;
    height: 470px;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        max-width: 580px;
        max-height: 470px;
    }
}

.ltc{
    animation: ltc var(--animation-time) forwards linear;
}

.ctl{
    animation: ctl var(--animation-time) forwards linear;
}

@keyframes ltc{
    from{
        transform: translateX(calc(-1 * var(--distrance)));
    }
    to{
        transform: translateX(0px);
    }
}

@keyframes ctl{
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(calc(-1 * var(--distrance)));
    }
}

.rtc{
    animation: rtc var(--animation-time) forwards linear;
}

.ctr{
    animation: ctr var(--animation-time) forwards linear;
}

@keyframes rtc{
    from{
        transform: translateX(var(--distrance));
    }
    to{
        transform: translateX(0px);
    }
}

@keyframes ctr{
    from{
        transform: translateX(0px);
    }
    to{
        transform: translateX(var(--distrance));
    }
}
</style>