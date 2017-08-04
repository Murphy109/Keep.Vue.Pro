<template>
        <div>
            <div class="sport_time">
                <div class="cont margin">
                    <div class="title">本周运动时长（分钟）<img src="../../../static/img/more.png" alt=""/></div>
                    <div class="time">10</div>
                    <div class="chart">
                        <div class="chart_component" ker="index" v-for="(n,index) in items">
                            <div class="shape change"></div>
                            <p>{{n.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <div class="rank_cont margin"><span>本周好友运动排行</span><i>2</i></div>
            </div>
        </div>
</template>

<script type='text/ecmascript-6'>
    import BannerService from "../../../service/IndexService/BannerService.js"
    export default {
        data(){
            return {
                items:[],
            }
        },
        created:function(){
            this.initialData();
        },
        updated:function(){
            var list=$(".chart").children();
            for(var i=0;i<list.length;i++){
                list.eq(i).children().eq(0).stop().animate({
                            height:this.items[i].number+"rem",
                            marginTop:(2.12-this.items[i].number)+"rem"
                        },
                        1000)
//                list.eq(i).children().eq(0).css("height",this.items[i].number+"rem");
            }
        },
        methods:{
            initialData:function(){
                BannerService.getBanner((data)=>{
                    this.items =data;
//                    console.log(this.items)
                })
            }
        }
    }
</script>

<style scoped>

</style>