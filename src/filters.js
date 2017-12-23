import Vue from 'vue'
import moment from 'moment'

//定义全局的时间过滤器
Vue.filter('formatTime',function(dataStr,formatStr='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(formatStr)
})