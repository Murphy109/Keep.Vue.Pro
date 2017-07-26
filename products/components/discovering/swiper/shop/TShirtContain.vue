<template>
    <div>
        <t-shirt key="index" :num="index" :pro="n" v-for="(n,index) in lists"></t-shirt>
    </div>
</template>

<script type='text/ecmascript-6'>
    import TShirt from "./TShirt.vue";
    export default {
        props:["lists"],
        components:{
            TShirt
        }
    }
</script>

<style scoped>

</style>