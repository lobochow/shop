import VueRouter from 'vue-router'

import home from '@/views/home'
import search from '@/views/search'
import spuDetail from '@/views/spuDetail'
import cart from '@/views/cart'
import payBill from '@/views/payBill.vue'
import billRecord from '@/views/billRecord.vue'
import comment from '@/views/comment.vue'
import login from '@/views/login.vue'
import register from '@/views/register.vue'
import test from '@/views/test.vue'

export default new VueRouter({
    routes: [
        {
            //路由命名
            name: 'home',
            path: '/',
            component: home
        },
        {
            name: 'search',
            path: '/search',
            component: search
        },
        {
            name: 'spuDetail',
            path: '/spuDetail',
            component: spuDetail
        },
        {
            name: 'cart',
            path: '/cart',
            component: cart
        },
        {
            name: 'payBill',
            path: '/payBill',
            component: payBill
        },
        {
            name: 'billRecord',
            path: '/billRecord',
            component: billRecord
        },
        {
            name: 'comment',
            path: '/comment',
            component: comment
        },
        {
            name: 'register',
            path: '/register',
            component: register
        },
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'test',
            path: '/test',
            component: test
        }
    ]
})