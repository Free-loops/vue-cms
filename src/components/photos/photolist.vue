<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <span v-for="item in imgcategory" :key='item.id' :class="['mui-control-item',item.id==0?'mui-active':'']" @click.prevent='getimginfo(item.id)'>
                        {{item.title}}
                    </span>
                </div>
            </div>
        </div>  
        <ul class="photo-list" style="list-style:none">
            <router-link tag='li' v-for="(item,i) in photolist" :key="i" :to="'/home/photoinfo/'+item.id">
                <img :src="item.img_url" alt="">
            </router-link>
        </ul>
    </div> 
</template>
<script>
import mui from '../../../lib/mui/js/mui.min.js'
    export default {
        data(){
            return {
            imgcategory:[],
            photolist: []
            }
        },
        props:['id'],
        created(){
            this.getimgcategory()
            this.getimginfo(0)
        },
        methods:{
            async getimgcategory() {
                const {data} = await this.$http('/api/getimgcategory')
                data.message.unshift({ title:'全部', id:0 })
                if(data.status===0) return this.imgcategory = data.message
            },
            async getimginfo(id){
                const {data} = await this.$http('/api/getimages/'+id)
                if(data.status===0) return this.photolist = data.message
            }
        },
        mounted(){
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>
<style lang="scss" scoped>
    ul,li{
        list-style: none;
        margin: 0;
        padding:10px;
        padding-bottom: 0;
    }
    .photo-list {
        li{
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            padding: 0;
            img {
                width: 100%;
                vertical-align: middle;
            }
        }
    }
   .mui-scroll{ touch-action: pan-y;}
</style>
