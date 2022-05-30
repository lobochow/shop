<template>
    <div class="service">
        <span>精选服务</span>
        <ul>
            <li>
                <dropdown title="5年只换不修" :valueList="['5年只换不修']"></dropdown>
            </li>
        </ul>
    </div>
</template>

<script>
import dropdown from '@/components/dropdown'

export default {
    name: 'test',
    components: {dropdown}
}
</script>

<style lang="less" scoped>
.service{
    display: flex;

    >ul{
        list-style: none;

        >li{
            padding: 5px;
        }
    }
}
</style>