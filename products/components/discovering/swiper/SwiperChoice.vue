<template>
    <div class="swiper-slide swiper-slide1">
        <swiper-banner></swiper-banner>
        <swiper-strategy></swiper-strategy>
        <swiper-topic></swiper-topic>
        <swiper-hot></swiper-hot>
        <swiper-groups></swiper-groups>
        <swiper-intelligent></swiper-intelligent>
        <swiper-article></swiper-article>
    </div>
</template>

<script type='text/ecmascript-6'>
    import SwiperBanner from "./choice/SwiperBanner.vue"
    import SwiperStrategy from "./choice/SwiperStrategy.vue"
    import SwiperTopic from "./choice/SwiperTopic.vue"
    import SwiperHot from "./choice/SwiperHot.vue"
    import SwiperGroups from "./choice/SwiperGroups.vue"
    import SwiperIntelligent from "./choice/SwiperIntelligent.vue"
    import SwiperArticle from "./choice/SwiperArticle.vue"
    export default {
        components: {
            SwiperBanner,
            SwiperStrategy,
            SwiperTopic,
            SwiperHot,
            SwiperGroups,
            SwiperIntelligent,
            SwiperArticle
        }

    }
</script>

<style scoped>

</style>