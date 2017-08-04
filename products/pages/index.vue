<template>
    <div>
        <index-header></index-header>
        <index-swiper></index-swiper>
        <keep-footer></keep-footer>
    </div>
</template>
<script type='text/ecmascript-6'>
    import "../static/css/index.css";
    import indexHeader from "../components/index/indexHeader.vue"
    import indexSwiper from "../components/index/indexSwiper.vue"
    import KeepFooter from "../components/KeepFooter.vue"
    export default {
        components: {
            indexHeader,
            indexSwiper,
            KeepFooter
        },
        mounted: function () {
            window.onload=function(){
                $(".swiper-wrapper").css("height","100%");
            }
            var mySwiper = new Swiper ('.swiper-container', {
                autoHeight: true,
                observer:true,
                observeParents:true
            })
            $(".swiper-wrapper").css("height","100%");
            document.querySelector(".mainindex").addEventListener("touchend",  function() {
                var lis = document.querySelector(".index_nav").children[0].children;
                var lisArr = [];
                for (var i = 0; i < lis.length; i++) {
                    if (lis[i].nodeType == 1) {
                        lisArr.push(lis[i]);
                    }
                }
                for (var j = 0; j < lisArr.length; j++) {
                    lisArr[j].style.borderBottom = "0.06rem solid #fff";
                    if(j==mySwiper.activeIndex){
                        lisArr[mySwiper.activeIndex].style.borderBottom = "0.06rem solid #584f60";
                    }
                }

            })
            jQuery(".index_nav ul").on("click","li",function(){
                jQuery(this).css("border-bottom", "0.06rem solid #584f60")
                jQuery(this).siblings().css("border-bottom", "0.06rem solid #fff")
                var num=jQuery(this).index();
                mySwiper.slideTo(num, 1000, false);
            })

        }
    }
</script>

<style scoped>

</style>