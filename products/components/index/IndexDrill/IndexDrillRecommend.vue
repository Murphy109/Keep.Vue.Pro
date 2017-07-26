<template>
    <div class="recommend_sport">
        <div class="title margin">今日推荐运动</div>
        <div class="sport_lists margin">
            <img :src="n" alt="" key="index" v-for="(n,index) in items"/>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import RecommendService from "../../../service/IndexService/RecommendService.js"
    export default {
        data(){
            return {
                items:[],
            }
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                RecommendService.getRecommend((data)=>{
                    this.items =data;
//                    console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>