<template>
    <div>
        <div class="routes" key="index" v-for="(n,index) in items">
            <p>{{n.title1}}</p>
            <div class="second">
                <span>{{n.title2}}</span>
                <span>{{n.number}}</span>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import RoutesService from "../../../service/IndexService/RoutesService.js"
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
                RoutesService.getRoutes((data)=>{
                    this.items =data;
//                    console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>