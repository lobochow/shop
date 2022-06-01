<template>
    <ul>
        <li v-for="item in 10" :key="item">
            {{item}}
        </li>
    </ul>
</template>

<script>
import dropdown from '@/components/dropdown'

export default {
    name: 'test',
    components: { dropdown }
}
</script>

<style lang="less" scoped>
ul{
    position: absolute;
    display: flex;
    flex-wrap: wrap;

    max-width: 500px;

    list-style: none;
    border: 1px solid red;

    > li{
        border: 1px solid black;
        width: 50px;
        margin-right: 10px;
    }
}
</style>