<template>
            <div class="swiper-slide">
                <router-link :to="item.link">

                <div class="single_goods">
                    <div class="clothes_box">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p>{{item.style}}</p>
                    <span>￥ {{item.price}}</span>
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