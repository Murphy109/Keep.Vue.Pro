<template>
    <div>
        <status-header></status-header>
        <status-body></status-body>
        <keep-footer></keep-footer>
    </div>
</template>


<script type='text/ecmascript-6'>
    import KeepFooter from "../components/KeepFooter.vue"
    import "../static/css/status.css";
    import StatusHeader from "../components/status/StatusHeader.vue";
    import StatusBody from "../components/status/StatusBody.vue"
    export default {
       components:{
           StatusHeader,
           StatusBody,
           KeepFooter
       },
        mounted:function (){
           window.onload=function () {
               $(".swiper-wrapper").css("height","100%");
           };
            var mySwiper1 = new Swiper ('.swiper-container1', {
                autoHeight: true
            });
            $(".swiper-wrapper").css("height","100%");
            var mySwiper2 = new Swiper ('.swiper-container2', {
                autoplay:3000,
                loop:true
            });

            document.querySelector(".status").addEventListener("touchend",  function() {
                var lis = document.querySelector(".status_nav").children[0].children;
                var lisArr = [];

                for (var i = 0; i < lis.length; i++) {
                    if (lis[i].nodeType == 1) {
                        lisArr.push(lis[i]);
                    }
                }
                for (var j = 0; j < lisArr.length; j++) {

                    lisArr[j].style.borderBottom = "0.08rem solid #fff";
                    if(j==mySwiper1.activeIndex){
                        lisArr[mySwiper1.activeIndex].style.borderBottom = "0.08rem solid #584f60";
                    }
                };
                jQuery(".status_nav ul").on("click","li",function(){
                    jQuery(this).css("border-bottom", "0.06rem solid #584f60");
                    jQuery(this).siblings().css("border-bottom", "0.06rem solid #fff");
                    var num=jQuery(this).index();
                    mySwiper1.slideTo(num, 1000, false);
                })
            });
        }
    }
</script>

<style scoped>

</style>