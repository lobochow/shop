import VueRouter from 'vue-router'

let originPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //相同点：都可调用函数一次，纂改上下文一次
        //不同点：call参数逗号隔开,apply方法传递数组
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

const router = new VueRouter({
    routes: [
        {
            //路由命名
            name: 'home',
            path: '/',
            component: () => import('@/views/home')
        },
        {
            name: 'search',
            path: '/search',
            component: () => import('@/views/search')
        },
        {
            name: 'spuDetail',
            path: '/spuDetail',
            component: () => import('@/views/spuDetail')
        },
        {
            name: 'cart',
            path: '/cart',
            component: () => import('@/views/cart')
        },
        {
            name: 'payBill',
            path: '/payBill',
            component: () => import('@/views/payBill.vue')
        },
        {
            name: 'billRecord',
            path: '/billRecord',
            component: () => import('@/views/billRecord.vue')
        },
        {
            name: 'comment',
            path: '/comment',
            component: () => import('@/views/comment.vue')
        },
        {
            name: 'register',
            path: '/register',
            component: () => import('@/views/register/index.vue')
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/login.vue')
        }
    ]
})

export default router;