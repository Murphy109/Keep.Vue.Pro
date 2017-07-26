<template>
    <div>
        <div class="daily" key="index" v-for="(n,index) in items">
            <div class="title margin">{{n.title}}</div>
            <div class="sport_lists margin">
                <img :src="n.url" alt=""/>
                <p class="over">{{n.title1}}</p>
                <span>{{n.title2}}</span>
            </div>
        </div>
    </div>
</template>
<script type='text/ecmascript-6'>
    import DailyService from "../../../service/IndexService/DailyService.js"
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
                DailyService.getDaily((data)=>{
                    this.items =data;
//           console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>