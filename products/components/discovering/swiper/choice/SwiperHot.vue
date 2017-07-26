<template>
    <div class="hot_events">
        <div class="title margin">
            <h4>热门活动</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="events margin">
            <img :src="n" key="index" v-for="(n,index) in items" alt="">
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import HotService from "../../../../service/DiscoveringService/HotService";
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
                HotService.gethot((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>