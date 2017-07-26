<template>
        <div class="swiper-slide swiper-slide1">
            <router-link :to="item.link">
            <div class="single_goods">
                <img :src="item.nUrl" alt="">
                <p>{{item.text}}</p>
                <span>{{item.num}}</span>
            </div>
            </router-link>
        </div>

</template>

<script type='text/ecmascript-6'>
    export default {
        props:["item","nums"]
    }
</script>

<style scoped>

</style>