<template>
    <div >
        <Cart @countEvent="Count" key="index" :num="index" :pro="n" v-for="(n,index) in lists"></Cart>
    </div>
</template>

<script type='text/ecmascript-6'>
    import Cart from "./Cart.vue";

    export default {
        props:["lists","Count"],
        components:{
            Cart
        }
    }
</script>

<style scoped>

</style>