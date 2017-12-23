// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

//导入全局配置
import './globalConfig.js'

//导入路由模块
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter)
// 导入 根组件
import App from './components/App.vue' 
//导入路由规则
import router from './router.js'


//创建实例
const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})