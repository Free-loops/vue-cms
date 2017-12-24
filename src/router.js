//导入路由模块
import VueRouter from 'vue-router'
import home from './components/tabbars/home.vue'
import member from './components/tabbars/member.vue'
import search from './components/tabbars/search.vue'
import shopcar from './components/tabbars/shopcar.vue'
import news from './components/news/news.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'

const router = new VueRouter({ 
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/search',component:search},
        {path:'/shopcar',component:shopcar},
        {path:'/home/news',component:news},
        {path:'/home/newsinfo/:id',component:newsinfo,props:true},
        {path:'/home/photolist/:id',component:photolist,props:true}
    ],
    linkActiveClass:'mui-active'
})

export default router