<template>
    <div class="swiper-slide swiper-slide2">
        <index-running-recording></index-running-recording>
        <index-running-routes></index-running-routes>
        <index-running-about></index-running-about>
    </div>
</template>
<script type='text/ecmascript-6'>
    import IndexRunningRecording from "./IndexRunningRecording.vue"
    import IndexRunningRoutes from "./IndexRunningRoute.vue"
    import IndexRunningAbout from "./IndexRunningAbout.vue"
    export default {
        components: {
            IndexRunningRecording,
            IndexRunningRoutes,
            IndexRunningAbout
        }
    }
</script>

<style scoped>

</style>