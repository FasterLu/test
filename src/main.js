import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponent from '@/components/component-G' //这是引入的一个全局组件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(globalComponent)
Vue.use(VueAxios,axios)

//这是定义的一个全局的过滤器
Vue.filter('upperCase',(val) => {
  return val.toUpperCase()
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
