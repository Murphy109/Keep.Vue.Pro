<template>
    <div class="hot_new">
        <img :src="pro.imgUrl" alt=""/>
        <p class="over">{{pro.tittle}}</p>
        <div class="hot_new_bottom">
            <div class="left">
                <img :src="pro.imgUser" alt=""/>
                <span>{{pro.userName}}</span>
            </div>
            <div class="right">
                <img src="http://localhost:3000/img/read_count.png" alt=""/>
                <span>{{pro.count}}</span>
            </div>
        </div>
    </div>
</template>


<script type='text/ecmascript-6'>
    export default {
        props:["pro"],
    }
</script>

<style scoped>

</style>