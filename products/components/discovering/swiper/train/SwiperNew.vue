<template>
    <div>
        <swiper-news key="index" :num="index" :pro="i" v-for="(i,index) in items"></swiper-news>
    </div>

</template>

<script type='text/ecmascript-6'>
    import SwiperNews from "./SwiperNews.vue"
    export default {
        props:["items"],
        components:{
            SwiperNews
        }
    }
</script>

<style scoped>

</style>