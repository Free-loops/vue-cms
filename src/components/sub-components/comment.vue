<template>
  <div>
      <h4>发表评论</h4>
      <hr>
      <textarea rows="2" placeholder='最多bb120个字' maxlength='120' v-model="msg"></textarea>
      <button class="mint-button mint-button--primary mint-button--large" @click="large">发表评论</button>
      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
              <h6>第{{i+1}}楼  用户：{{item.user_name}}  发表时间:{{item.add_time|formatTime}}</h6>
              <p>{{item.content}}</p>
          </div>
      </div>
      <button class="mint-button mint-button--danger mint-button--large is-plain" @click="loadMore">加载更多</button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                commentList:[],
                page:1,//默认显示第一页的评论
                msg:''
            }
        },
        created(){
            this.getComment()
        },
        methods:{
            async getComment(){
                const {data} = await this.$http('/api/getcomments/'+this.commentId+'?pageindex='+this.page)
                if(data.status===0) return this.commentList = this.commentList.concat(data.message)//concat 将两个数组拼接成一个
            },
            loadMore(){
                this.page++
                this.getComment()
            },
            async large(){
                if(this.msg.trim().length<=0) return Toast('请填写评论内容')
                const {data} = await this.$http.post('/api/postcomment/'+this.commentId,{
                    content:this.msg
                })
                if(data.status===0) {
                    this.commentList.unshift({
                        user_name:'匿名用户',
                        add_time:new Date(),
                        content:this.msg.trim()
                    })
                }
            }
        },
        props:['commentId']
    }
</script>
<style lang="scss" scoped>
textarea {
    margin-bottom: 2px;
    font-size: 14px;
}
.cmt-list {
    h6{
        background-color: #ccc;
        height: 30px;
        line-height: 30px;
    }
}
</style>
