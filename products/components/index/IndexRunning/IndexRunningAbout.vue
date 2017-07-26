<template>
    <div class="running_about">
        <index-running-about-title></index-running-about-title>
        <index-running-about-abouts></index-running-about-abouts>
    </div>
</template>

<script type='text/ecmascript-6'>
    import IndexRunningAboutTitle from "./IndexRunningAboutTitle.vue"
    import IndexRunningAboutAbouts from "./IndexRunningAboutAbouts.vue"
    export default {
        components:{
            IndexRunningAboutTitle,
            IndexRunningAboutAbouts
        }
    }
</script>

<style scoped>

</style>