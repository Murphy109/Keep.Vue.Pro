<template>
    <div class="mainindex">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <index-drill></index-drill>
                <index-running></index-running>
                <index-riding></index-riding>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import IndexDrill from "./IndexDrill/IndexDrill.vue"
    import IndexRunning from "./IndexRunning/IndexRunning.vue"
    import IndexRiding from "./IndexRiding/IndexRiding.vue"
    export default {
        components: {
            IndexDrill,
            IndexRunning,
            IndexRiding
        }
    }
</script>

<style scoped>

</style>