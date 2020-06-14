import Vue from 'vue'
import App from './App.vue'

import router from './router'

// https://cn.vuejs.org/v2/api/#productionTip
Vue.config.productionTip = false

new Vue({
  el: '#app',
  // render 是渲染函数, 记住是套路用法就可以
  render: h => h(App),
  // 通过 router 参数指定路由, 这样整个 App 都可以使用路由功能
  router: router,
})
