<template>
    <div class="training_item">
        <div class="title">
            <div class="left">我的训练</div>
            <div class="right">
                <img src="../../../static/img/add.png" alt=""/>
                <span>添加训练</span>
            </div>
        </div>
        <div class="items margin" key="index" v-for="(n,index) in items">
            <div class="top">
                <div class="left">{{n.title1}}</div>
                <div class="right">{{n.number}}</div>
            </div>
            <p>{{n.title2}}</p>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import TrainingService from "../../../service/IndexService/TrainingService.js"
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
                TrainingService.getTraining((data)=>{
                        this.items =data;
//                        console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>