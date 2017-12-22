// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'

//导入mint-ui
import MintUi from 'mint-ui'
//导入mint-ui的样式表
import 'mint-ui/lib/style.css'
Vue.use(MintUi)

//导入mui
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

//导入axios
import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: 'http://39.106.32.91:3000/'
})
//导入路由模块
import VueRouter from 'vue-router'

//安装路由模块
Vue.use(VueRouter)

// 导入 根组件
import App from './components/App.vue' 

//导入路由规则
import router from './router.js'



const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router
})