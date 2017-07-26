<template>
    <div class="running_routes">
        <index-running-route-title></index-running-route-title>
        <index-running-route-routes></index-running-route-routes>
        <index-running-route-findmore></index-running-route-findmore>
    </div>
</template>
<script type='text/ecmascript-6'>
    import IndexRunningRouteTitle from "./IndexRunningRouteTitle.vue"
    import IndexRunningRouteRoutes from "./IndexRunningRouteRoutes.vue"
    import IndexRunningRouteFindmore from "./IndexRunningRouteFindmore.vue"
    export default {
        components:{
            IndexRunningRouteTitle,
            IndexRunningRouteRoutes,
            IndexRunningRouteFindmore
        }
    }
</script>

<style scoped>

</style>