<template>
    <div class="choiceness_banner">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" key="index" v-for="(n,index) in items">
                    <img :src="n" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>


<script type='text/ecmascript-6'>
    import BannerService from "../../../../service/DiscoveringService/BannerService";
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
                BannerService.getbanner((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>