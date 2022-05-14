import VueRouter from 'vue-router'

import home from '@/views/home'

export default new VueRouter({
    routes: [
        {
            //路由命名
            name: 'home',
            path: '/',
            component: home
        }
    ]
})