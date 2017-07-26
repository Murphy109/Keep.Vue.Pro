<template>
    <div class="discover">
        <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
                <swiper-choice></swiper-choice>
                <swiper-train></swiper-train>
                <swiper-diet></swiper-diet>
                <shop></shop>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import SwiperChoice from "./swiper/SwiperChoice.vue"
    import SwiperTrain from "./swiper/SwiperTrain.vue"
    import SwiperDiet from "./swiper/SwiperDiet.vue"
    import Shop from "./swiper/Shop.vue"
    export default {
        components:{
            SwiperChoice,
            SwiperTrain,
            SwiperDiet,
            Shop
        }
    }

</script>

<style scoped>

</style>