<template>
    <div class="status">
        <div class="swiper-container swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide1">
                    <status-body-one-audio></status-body-one-audio>
                    <status-body-one-list></status-body-one-list>
                </div>
            </div>
        </div>
    </div>

</template>


<script type='text/ecmascript-6'>
    import StatusBodyOneAudio from "./StatusBody/StatusBodyOneAudio.vue";
    import StatusBodyOneList from "./StatusBody/StatusBodyOneList.vue";
    export default {
        components:{
            StatusBodyOneAudio,
            StatusBodyOneList,
        }
    }
</script>

<style scoped>

</style>