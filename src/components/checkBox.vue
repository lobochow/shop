<template>
  <div class="checkBox" ref="checkbox">
      <i class="iconfont icon-duigou"></i>
  </div>
</template>

<script>
export default {
    name: 'checkBox',
    props: ['checkedColor'],
    data() {
        return {
            defaultColor: '',
            status: 0
        }
    },
    methods:{
        enter(checkedColor){
            this.$refs.checkbox.style.borderColor = checkedColor;
            this.res.checkbox.style.color = checkedColor;
        },
        leave(){
            this.$refs.checkbox.style.borderColor = this.defaultColor;
            this.res.checkbox.style.color = this.defaultColor;
        }
    },
    mounted(){
        this.defaultColor = window.getComputedStyle(this.$refs.checkbox,null).borderColor;
    }
}
</script>

<style lang="less">

.checkBox{
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    margin-right: 2px;
    i{
        font-size: 8px;
        text-align: center;
    }
}
</style>