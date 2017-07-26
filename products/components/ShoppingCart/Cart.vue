<template>
    <section class="goods_msg">
        <div class="goods_pic">
            <img :src="pro.picUrl" alt="">
        </div>
        <div class="describe">
            <div class="describe_msg">
                <h3>{{pro.title}} {{pro.color}} {{pro.size}}</h3>
                <p>
                    <i>颜色：{{pro.color}}；</i>
                    <span>尺码：{{pro.size}}</span>
                </p>
            </div>
            <div class="price">
                <p>￥{{pro.price}}</p>
                <div class="add_sub">
                    <img @click="Sub" src="http://localhost:3000/img/sub_btn.png" alt="">
                    <span> {{pro.qal}} </span>
                    <img @click="Add" src="http://localhost:3000/img/add_btn.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script type='text/ecmascript-6'>
    export default {
        props:["pro","num"],
        methods:{
            Add:function(){
                this.pro.qal++;
                this.$emit("countEvent")
                console.log("comming....")
            },
            Sub:function(){
                if(this.pro.qal >1){
                    this.pro.qal--
                    this.$emit("countEvent")
                }

            }
        },
        created:function(){
            this.$emit("countEvent")
        }
    }
</script>

<style scoped>

</style>