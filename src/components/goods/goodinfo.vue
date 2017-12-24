<template>
  <div>
      <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
                <lunbotu :lunbotu='lunbo' :imgname="'src'"></lunbotu>
            </div>
        </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodinfo.title}}</div>
            <div class="mui-card-content">
                <p class="price">
                    <span class="old">市场价:{{}}</span>
                    <span class="old">销售价:{{}}</span>                    
                </p>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
  </div>
</template>
<script>
import lunbotu from '../sub-components/lunbotu.vue'
    export default {
        data(){
            return {
                goodinfo:{},
                lunbo:[]
            }
        },
        props:['id'],
        methods:{
            async getgoodinfo(){
                const {data} = await this.$http("/api/goods/getdesc/"+this.id)
                console.log(data.message)
                if(data.status===0) return this.goodinfo = data.message[0]
            },
            async getlunbotu(){
                const {data} = await this.$http("/api/getthumimages/"+this.id)
                if(data.status===0) return this.lunbo = data.message
            }
        },
        created(){
            this.getgoodinfo()
            this.getlunbotu()
        },
        components:{
            lunbotu
        }
    }
</script>
<style lang="scss" scoped>

</style>
