<template>
    <div class="the_new">
        <div class="title margin">
            <h4>{{pro.title}}</h4>
            <img src="http://localhost:3000/img/more.png" alt=""/>
        </div>
        <div class="the_news">
            <div class="swiper-container swiper-container4">
                <div class="swiper-wrapper">
                    <news-img key="j" :nums="j" :item="n" v-for="(n,j) in pro.imgs" ></news-img>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import NewsImg from "./NewsImg.vue"
    export default {
        props:["pro","num"],
        components:{
            NewsImg
        }
    }
</script>

<style scoped>

</style>