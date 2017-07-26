<template>
    <div class="couple_t_shirt" >
        <div class="title margin">
            <h4>{{pro.title}}</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="couple_t_shirts">
            <div class="swiper-container swiper-container5">
                <div class="swiper-wrapper">
                    <single-goods key="j" :nums="j" :item="i" v-for="(i,j) in pro.single" ></single-goods>
                </div>
            </div>
        </div>
        <div class="description margin">{{pro.desc}}</div>
    </div>

</template>
<script type='text/ecmascript-6'>
    import SingleGoods from "./SingleGoods.vue";
    export default {
        props:["pro","num"],
        components:{
            SingleGoods
        }
    }
</script>

<style scoped>

</style>