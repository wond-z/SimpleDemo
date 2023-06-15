import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import './assets/css/index.css';  // 引入全局css

Vue.use(dataV)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
