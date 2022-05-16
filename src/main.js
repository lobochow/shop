import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import router from '../router/index'

import checkBox from '@/components/checkBox.vue'
Vue.component(checkBox.name, checkBox);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//test git