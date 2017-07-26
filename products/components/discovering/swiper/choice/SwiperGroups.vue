<template>
    <div class="recommend_groups">
        <div class="title margin">
            <h4>热门活动</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="groups margin">
            <div class="group"  key="index" v-for="(n,index) in items">
                <img :src="n.gUrl" alt="">
                <div class="head">
                    <img :src="n.gUrl1" alt="">
                </div>
                <p>{{n.title}}</p>
                <span>{{n.con}}</span>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import GroupsService from "../../../../service/DiscoveringService/GroupsService";
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
                GroupsService.getgroups((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>