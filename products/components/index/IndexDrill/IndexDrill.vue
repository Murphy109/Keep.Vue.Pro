<template>
    <div class="swiper-slide swiper-slide1">
        <index-drill-banner></index-drill-banner>
        <index-drill-training></index-drill-training>
        <index-drill-recommend></index-drill-recommend>
        <index-drill-daily></index-drill-daily>
        <index-drill-course></index-drill-course>
    </div>
</template>

<script type='text/ecmascript-6'>
    import IndexDrillBanner from "./IndexDrillBanner.vue"
    import IndexDrillTraining from "./IndexDrillTraining.vue"
    import IndexDrillRecommend from "./IndexDrillRecommend.vue"
    import IndexDrillDaily from "./IndexDrillDaily.vue"
    import IndexDrillCourse from "./IndexDrillCourse.vue"
    export default {
        components:{
            IndexDrillBanner,
            IndexDrillTraining,
            IndexDrillRecommend,
            IndexDrillDaily,
            IndexDrillCourse
        }
    }
</script>

<style scoped>

</style>