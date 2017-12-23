<template>
  <div class="newsinfo">
      <h3>{{newsInfo.title}}</h3>
      <p class="mui-ellipsis">
          <span>发表时间:{{newsInfo.add_time}}</span>
          <span>点击次数:{{newsInfo.click}}</span>
      </p>
      <hr>
      <div v-html="newsInfo.content"></div>
      <comment :commentId='id'></comment>
  </div>
</template>

<script>
import comment from '../sub-components/comment.vue'
    export default {
        data(){
            return {
                newsInfo:{}
            }
        },
        created(){
            this.getNewsInfo()
        },
        methods:{
            async getNewsInfo(){
                const {data} = await this.$http('/api/getnew/'+this.id)
                if(data.status===0) return (this.newsInfo = data.message[0])
            }
        },
        props:['id'],
        components:{
            comment
        }
    }
</script>

<style lang="scss" scoped>
.newsinfo{
    padding: 0 4px;
    h3{
        font-size: 14px;
        color:red;
    }
    .mui-ellipsis {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
}
</style>

