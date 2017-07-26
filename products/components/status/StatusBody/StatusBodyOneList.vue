<template>
    <div class="hot_news">
        <status-body-one-goods key="index" :pro="n" v-for="(n,index) in lists"></status-body-one-goods>
    </div>
</template>


<script type='text/ecmascript-6'>
    import StatusBodyOneGoods from "./StatusBodyOneGoods.vue";
    import StatusService from "../../../service/StatusService";
    export default {
        components:{
            StatusBodyOneGoods,
        },
        data(){
            return {
                lists:[]
            }
        },
        created:function(){
            this.initialData();
        },
        methods:{
            initialData:function(){
                StatusService.getStatus((data)=>{
                    this.lists=data;
                    console.log(data)
                })
            }
        }
    }
</script>

<style scoped>

</style>