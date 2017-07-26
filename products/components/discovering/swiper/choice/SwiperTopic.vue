<template>
    <div class="topic_discuss">
        <div class="title margin">
            <h4>话题讨论</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="topic margin">
            <img :src="n" key="index" v-for="(n,index) in items" alt="">
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import TopicService from "../../../../service/DiscoveringService/TopicService";
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
                TopicService.gettopic((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>