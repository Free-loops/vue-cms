<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in lunbo" :key='i'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h1>home</h1>
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
          if(data.status==0)this.lunbo = data.message
          console.log(this.lunbo)
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
</style>
