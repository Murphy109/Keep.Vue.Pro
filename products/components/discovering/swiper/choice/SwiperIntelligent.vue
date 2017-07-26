<template>
    <div class="recommend_intelligent">
        <div class="title margin">
            <h4>达人推荐</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="intelligents">
            <div class="intelligent" key="index" v-for="(n,index) in items">
                <img :src="n.gUrl" alt="">
                <div class="cont">
                    <p>{{n.name}}</p>
                    <span class="over">{{n.title}}</span>
                </div>
                <div class="attention">关注</div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import IntelligentService from "../../../../service/DiscoveringService/IntelligentService";
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
                IntelligentService.getintelligent((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>