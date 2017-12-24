<template>
  <div>
    <lunbotu :lunbotu="lunbo" :imgname="'img'"></lunbotu>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist/0">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></router-link>
        </li>
    </ul> 
  </div>
  
</template>
<script>
import lunbotu from '../sub-components/lunbotu.vue'
    export default {
      data(){
        return {
          lunbo:[]
        }
      },
      created(){
        this.getLunBo()
      },
      methods:{
       async getLunBo(){
          const {data} = await this.$http("/api/getlunbo")
          if(data.status===0)return this.lunbo = data.message
        }
      },
      components:{
        lunbotu
      }
    }
</script>
<style lang="scss" scoped>
  .mui-grid-view {
    border:none;
    background-color: #fff;
    .mui-media {
      border: none;
      img {
        width:60px;
      }
    }
  }
</style>
