<template>
<div>
  <div class="goodlist">
      <router-link class="good" v-for="item in goodlist" :key="item.id" :to="'/home/goodinfo/'+item.id">
          <img :src="item.img_url" alt="">
          <h1 class="title">{{item.title}}</h1>
          <div class="info">
              <p class="price">
                  <span class="new">{{item.market_price}}</span>
                  <span class="old">{{item.sell_price}}</span>                  
              </p>
              <p class="cell">
                  <span>热卖中</span>
                  <span>剩余{{item.stock_quantity}}件</span>
              </p>
          </div>
      </router-link>
  </div>
  <button class="mint-button mint-button--danger mint-button--large is-plain" @click="loadMore">点击加载更多...</button>
</div>
</template>
<script>
    export default {
        data(){
            return {
                goodlist:[],
                page:1
            }
        },
        methods:{
            async getgoodlist(){
                const {data} = await this.$http('/api/getgoods?pageindex='+this.page)
                if(data.status===0) return this.goodlist = this.goodlist.concat(data.message)
            },
            loadMore(){
                this.page++
                this.getgoodlist()
            }
        },
        created(){
            this.getgoodlist()
        }
    }
</script>
<style lang="scss" scoped>
.goodlist{
    display: flex;
    flex-wrap: wrap;//换行显示
    justify-content: space-between;//两侧地址
    padding: 10px;
    padding-bottom: 0;
    .good {
        border: 1px solid #ccc;
        width: 49%;
        margin-bottom: 10px;
        box-shadow: 0 0 7px #ccc;
        padding: 3px;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
    }
}
</style>
