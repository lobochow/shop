import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import router from './router/index'

import checkBox from '@/components/checkBox.vue'
Vue.component(checkBox.name, checkBox);

import ElementUI from 'element-ui';
Vue.use(ElementUI);

import store from './store'

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')