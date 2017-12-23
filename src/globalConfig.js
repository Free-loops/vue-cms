import Vue from 'vue'

//导入moment
import moment from 'moment'
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
//导入全局的过滤器
import './filters'