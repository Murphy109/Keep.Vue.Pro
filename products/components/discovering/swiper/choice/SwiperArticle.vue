<template>
    <div class="recommend_article">
        <div class="title margin">
            <h4>达人推荐</h4>
            <img src="http://localhost:3000/img/more.png" alt=""/>
        </div>
        <div class="article margin" key="index" v-for="(n,index) in items">
            <img :src="n.gUrl" alt=""/>
            <p>{{n.title}}</p>
            <span>{{n.con}}</span>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import ArticleService from "../../../../service/DiscoveringService/ArticleService";
    export default {
        data(){
            return {
                items:[]
            }
        },
        created:function(){
            this.initialData();
        },

        methods:{
            initialData:function(){
                ArticleService.getarticle((data)=>{
                    this.items =data;
                })
            }
        }
    }</script>

<style scoped>

</style>