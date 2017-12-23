<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in lunbo" :key='i'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
          <img src="../../images/menu1.png" alt="">
          <div class="mui-media-body">Home</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">Email</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">Chat</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">location</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">Search</div></router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">Phone</div></router-link>
        </li>
    </ul> 
  </div>
  
</template>
<script>
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
      }
    }
</script>
<style lang="scss" scoped>
  .mint-swipe{
    height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
  }
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
