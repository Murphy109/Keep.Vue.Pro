<template>
    <div class="abouts margin">
        <img :src="n" alt="" key="index" v-for="(n,index) in items" alt="">
    </div>
</template>

<script type='text/ecmascript-6'>
    import AboutService from "../../../service/IndexService/AboutService.js"
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
                AboutService.getAbout((data)=>{
                    this.items =data;
//                    console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>