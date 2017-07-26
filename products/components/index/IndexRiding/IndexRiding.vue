<template>
    <div class="swiper-slide swiper-slide3">
        <div class="cyc_recording">
            <index-riding-top></index-riding-top>
            <index-riding-center></index-riding-center>
            <index-riding-tab></index-riding-tab>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import IndexRidingTop from "./IndexRidingTop.vue"
    import IndexRidingCenter from "./IndexRidingCenter.vue"
    import IndexRidingTab from "./IndexRidingTab.vue"
    export default {
        components:{
            IndexRidingTop,
            IndexRidingCenter,
            IndexRidingTab
        }
    }
</script>

<style scoped>

</style>