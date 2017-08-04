<template>
    <div>
        <goods-detail-header></goods-detail-header>
        <clothes-banner></clothes-banner>
        <goods-msg></goods-msg>
        <notes></notes>
        <specification></specification>
        <keep-says></keep-says>
        <submit></submit>
    </div>
</template>

<script type='text/ecmascript-6'>
    import "../static/css/goods_details.css";
    import GoodsDetailHeader from "../components/GoodsDetails/GoodsDetailHeader.vue";
    import ClothesBanner from "../components/GoodsDetails/ClothesBanner.vue";
    import GoodsMsg from "../components/GoodsDetails/GoodsMsg.vue";
    import Notes from "../components/GoodsDetails/Notes.vue";
    import Specification from "../components/GoodsDetails/Specification.vue";
    import KeepSays from "../components/GoodsDetails/KeepSays.vue";
    import Submit from "../components/GoodsDetails/Submit.vue";
    export default {
        components:{
            GoodsDetailHeader,
            ClothesBanner,
            GoodsMsg,
            Notes,
            Specification,
            KeepSays,
            Submit
        },
        mounted:function(){
            var mySwiper99 = new Swiper('.swiper-container99', {
                autoHeight: true,
            });
            window.onscroll=function() {
                var lamp=1;
                if(document.body.scrollTop>50){
                    if(lamp){
                        lamp=0;
                        document.querySelector(".bg").style.opacity=1;
                        document.querySelector(".bg").style.transition="1s";
                        document.querySelector(".h3").style.display="block";
                        document.querySelector(".cdup").style.background="inherit";
                        document.querySelector(".home").style.background="inherit";
                        document.querySelector(".share").style.background="inherit";
                    }
                }else{
                    if(lamp==1){
                        document.querySelector(".bg").style.opacity=0;
                        document.querySelector(".h3").style.display="none";
                        document.querySelector(".cdup").style.background="#584f60";
                        document.querySelector(".home").style.background="#584f60";
                        document.querySelector(".share").style.background="#584f60";
                    }
                }
            };
        }
    }
</script>

<style scoped>

</style>