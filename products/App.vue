<template>
    <div>
        <router-view>
            <index></index>
        </router-view>
    </div>
</template>

<script type='text/ecmascript-6'>
    import index from "./pages/Index.vue"
    import DiscoveringPages from "./pages/DiscoveringPages.vue"
    export default {
        components:{
            index
        }
    }
</script>

<style scoped>

</style>