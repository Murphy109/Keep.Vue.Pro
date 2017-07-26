<template>
    <div class="train_banner">
        <div class="swiper-container swiper-container3">
            <div class="swiper-wrapper">
                <div class="swiper-slide" key="index" v-for="(n,index) in items">
                    <img :src="n" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import BannService from "../../../../service/DiscoveringService/BannService";
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
                BannService.getbann((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>