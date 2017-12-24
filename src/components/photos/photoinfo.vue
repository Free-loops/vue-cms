<template>
    <div class="photoinfo">
        <h1>{{imageInfo.title}}</h1>
        <p><span>发表时间:{{imageInfo.add_time}}</span><span>点击次数:{{imageInfo.click}}</span></p>
        <hr>
        <img class="preview-img" v-for="(item, index) in list" :src="item.src" :height="100" @click="$preview.open(index, list)" :key="index">
        <div class="content" v-html='imageInfo.content'></div>
        <comment :newsId='id' ></comment>
    </div>
</template>

<script>
import comment from '../sub-components/comment.vue'
    export default {
        data(){
            return {
                imageInfo:{},
                 list: []
            }
        },
        props:['id'],
        methods:{
            async getimageInfo(){
                const {data} = await this.$http('/api/getimageInfo/'+this.id)
                if(data.status===0) return this.imageInfo = data.message[0]
            },
            async getpgotoinfo(){
                const {data} = await this.$http('/api/getthumimages/'+this.id)
                console.log(data)
                for(var i=0;i<data.message.length;i++){
                    data.message[i].w=600
                    data.message[i].h=400
                }
                if(data.status===0) return this.list = data.message
            }
        },
        created(){
            this.getimageInfo()
            this.getpgotoinfo()
        },
        components:{
           comment
        }
    }
</script>

<style lang="scss" scoped>
.photoinfo{
    padding: 5px;
   
    h1{
        font-size: 14px;
    }
    p{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
}
</style>

