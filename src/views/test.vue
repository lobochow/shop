<template>
    <div class="outside">
        <div class="inside"></div>
    </div>
</template>

<script>
export default {
name:'test'
}
</script>

<style lang="less" scoped>
.outside{
    width: 300px;
    height: 300px;
    margin-left: 10px;

    border: 1px solid black;
}

.inside{
    width: 100px;
    height: 100px;
    margin-top: auto;
    margin-bottom: 0px;

    border: 1px solid black;
}
</style>