<template>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in lunbotu" :key='i'>
        <img :src="item[imgname]" alt="" :class="[imgname=='src'?'src':'img']">
      </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        data(){
            return {}
        },
        props:['lunbotu','imgname'],
        methods:{}
    }
</script>
<style lang="scss" scoped>
  .mint-swipe{
    height: 180px;
    text-align: center;
    .img {
      width: 100%;
      height: 100%;
    }
    .src{
        height: 100%;
    }
  }
</style>
