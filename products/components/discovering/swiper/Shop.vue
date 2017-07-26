<template>
    <div class="swiper-slide swiper-slide4">
        <shop-banner></shop-banner>
        <shop-lib-nav></shop-lib-nav>
        <shop-notice></shop-notice>
        <athletic-undergarment></athletic-undergarment>
        <leisure-t-shirt></leisure-t-shirt>
        <couple-t-shirt ></couple-t-shirt>
        <t-shirt-contain :lists="lists"></t-shirt-contain>
    </div>

</template>

<script type='text/ecmascript-6'>
    import "../../../static/css/discovering.css";
    import ShopBanner from "./Shop/ShopBanner.vue";
    import ShopLibNav from "./Shop/ShopLibNav.vue";
    import ShopNotice from "./Shop/ShopNotice.vue";
    import AthleticUndergarment from "./Shop/AthleticUndergarment.vue";
    import LeisureTShirt from "./Shop/LeisureTShirt.vue";
    import CoupleTShirt from "./Shop/CoupleTShirt.vue";
    import TShirtContain from "./Shop/TShirtContain.vue";
    import ShopService from "../../../service/DiscoveringService/ShopService.js";

    export default {
        components:{
            ShopBanner,
            ShopLibNav,
            ShopNotice,
            AthleticUndergarment,
            LeisureTShirt,
            CoupleTShirt,
            TShirtContain
        },
        data(){
            return {
                lists:[],
            }
        },
        methods:{
            initData(){
                ShopService.getGoods((data)=>{
                    this.lists=data;
                })
            }
        },
        created:function(){
            this.initData()

        },
        updated: function () {
            var mySwiper1 = new Swiper ('.swiper-container1', {
                autoplay:3000,
                loop:true,
            });
            var mySwiper2 = new Swiper ('.swiper-container2', {
                autoHeight: true,
            });
            var mySwiper3 = new Swiper ('.swiper-container3', {
                autoplay:3000,
                loop:true
            });
            var mySwiper4 = new Swiper ('.swiper-container4', {
                freeMode:true,
                freeModeMomentum:false,
                slidesPerView : 1.4,
                slidesOffsetBefore:25,
                slidesOffsetAfter:10
            });
            var mySwiper5 = new Swiper ('.swiper-container5', {
                freeMode:true,
                freeModeMomentum:false,
                slidesPerView : 2.7,
                slidesOffsetBefore:25,
                slidesOffsetAfter:10
            });
            var mySwiper6 = new Swiper ('.swiper-container6', {
                autoplay:3000,
                direction: 'vertical',
                loop:true
            });
        }
    }
</script>

<style scoped>

</style>