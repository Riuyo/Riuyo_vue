import Vue from 'vue'
import 'lib-flexible/flexible'
import router from './router'
import App from './App.vue'
//将api暴露的所有内容全部打包到API,将发请求所有的方法挂载到vue的原型上
import * as API from './api'

Vue.config.productionTip = false

//给对象添加了一个属性,在组件所有的实例,通过原型链都可以找到vue的原型对象
Vue.prototype.$API = API


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
