<template>
    <div class="swiper-slide swiper-slide3">
        <swiper-banner></swiper-banner>
        <swiper-nav></swiper-nav>
        <swiper-drink :items="items"></swiper-drink>
    </div>
</template>

<script type='text/ecmascript-6'>
    import SwiperBanner from "./diet/SwiperBanner.vue"
    import SwiperNav from "./diet/SwiperNav.vue"
    import SwiperDrink from "./diet/SwiperDrink.vue"
    import DietService from "../../../service/DiscoveringService/DietService"

    export default {
        components:{
            SwiperBanner,
            SwiperNav,
            SwiperDrink
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
                DietService.getdiet((data)=>{
                    this.items =data;
                })
            }
        }
    }
</script>

<style scoped>

</style>