<template>
    <div class="swiper-slide swiper-slide2">
        <swiper-banner></swiper-banner>
        <swiper-nav></swiper-nav>
        <swiper-new :items="items"></swiper-new>
    </div>
</template>

<script type='text/ecmascript-6'>
    import SwiperBanner from "./train/SwiperBanner.vue"
    import SwiperNav from "./train/SwiperNav.vue"
    import SwiperNew from "./train/SwiperNew.vue"
    import NewsService from  "../../../service/DiscoveringService/NewsService";
    export default {
        components:{
            SwiperBanner,
            SwiperNav,
            SwiperNew
        },
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
                NewsService.getnews((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>