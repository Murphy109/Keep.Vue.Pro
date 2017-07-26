<template>
    <div class="strategy">
        <div class="title margin">
            <h4>推荐攻略</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="strategy_bar margin">
            <img :src="n" alt="" key="index" v-for="(n,index) in items">
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import StrategyService from "../../../../service/DiscoveringService/StrategyService";
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
                StrategyService.getStrategy((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>