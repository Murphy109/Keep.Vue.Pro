<template>
    <footer>
        <span>￥{{tm}}</span>
        <div class="account">
            <p>结算</p>
            <i> ({{tq}}) </i>

        </div>
    </footer>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["tm","tq"]
    }
</script>

<style scoped>

</style>