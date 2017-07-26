<template>
        <div class="recording">
            <index-running-recording-top></index-running-recording-top>
            <index-running-recording-center></index-running-recording-center>
            <index-running-recording-bottom></index-running-recording-bottom>
            <index-running-recording-tab></index-running-recording-tab>
        </div>
</template>

<script type='text/ecmascript-6'>
    import IndexRunningRecordingTop from "./IndexRunningRecordingTop.vue"
    import IndexRunningRecordingCenter from "./IndexRunningRecordingCenter.vue"
    import IndexRunningRecordingBottom from "./IndexRunningRecordingBottom.vue"
    import IndexRunningRecordingTab from "./IndexRunningRecordingTab.vue"
    export default {
        components:{
            IndexRunningRecordingTop,
            IndexRunningRecordingCenter,
            IndexRunningRecordingBottom,
            IndexRunningRecordingTab
        }
    }
</script>

<style scoped>

</style>