<template>
    <div>
        <div class="course" key="index" v-for="(n,index) in items">
            <div class="title margin">{{n.title}}</div>
            <div class="sport_lists">
                <img :src="n.url" alt=""/>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import CourseService from "../../../service/IndexService/CourseService.js"
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
                CourseService.getCourse((data)=>{
                    this.items =data;
//                    console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>