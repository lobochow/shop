import VueRouter from 'vue-router'

import home from '@/views/home'
import search from '@/views/search'
import spuDetail from '@/views/spuDetail'
import cart from '@/views/cart'
import payBill from '@/views/payBill.vue'
import billRecord from '@/views/billRecord.vue'

export default new VueRouter({
    routes: [
        {
            //路由命名
            name: 'home',
            path: '/home',
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
            path: '/',
            component: billRecord
        }
    ]
})