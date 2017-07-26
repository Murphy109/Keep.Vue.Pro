<template>
    <div>
        <drink-title key="index" :num="index" :pro="n" v-for="(n,index) in items"></drink-title>
    </div>
</template>

<script type='text/ecmascript-6'>
    import DrinkTitle from "./DrinkTitle.vue"
    export default {
        props:["items"],
        components:{
            DrinkTitle
        }
    }
</script>

<style scoped>

</style>