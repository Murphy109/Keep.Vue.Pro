<template>
    <div class="cold_drink">
        <div class="title margin">
            <h4>{{pro.title}}</h4>
            <img src="http://localhost:3000/img/more.png" alt="">
        </div>
        <div class="cold_drinks">
            <div class="swiper-container swiper-container5">
                <div class="swiper-wrapper">
                    <drink-img key="j" :nums="j" :item="i" v-for="(i,j) in pro.imgs"></drink-img>
                </div>
            </div>
        </div>
        <div class="description margin">{{pro.con}}</div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import DrinkImg from "./DrinkImg.vue"
    export default {
        props:["pro","num"],
        components:{
            DrinkImg
        }
    }
</script>

<style scoped>

</style>