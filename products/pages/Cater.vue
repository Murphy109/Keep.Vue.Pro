<template>
    <div>
        <cater-header></cater-header>
        <cater-general></cater-general>
        <cater-food-material></cater-food-material>
        <cater-cooking></cater-cooking>
    </div>
</template>


<script type='text/ecmascript-6'>
    import "../static/css/catering.css";
    import CaterHeader from "../components/cater/CaterHeader.vue";
    import CaterGeneral from "../components/cater/CaterGeneral.vue";
    import CaterFoodMaterial from "../components/cater/CaterFoodMaterial.vue";
    import CaterCooking from "../components/cater/CaterCooking.vue";
    export default {
        components:{
            CaterHeader,
            CaterGeneral,
            CaterFoodMaterial,
            CaterCooking,
        },
        mounted:function (){
            window.addEventListener("scroll",  function() {
                var lamp=1;
                if(document.body.scrollTop>50){
                    if(lamp){
                        lamp=0;
                        document.querySelector(".bg").style.opacity=1;
                        document.querySelector(".bg").style.transition="1s";
                        document.querySelector(".h3").style.display="block";
                    }
                }else{
                    if(lamp==1){
                        document.querySelector(".bg").style.opacity=0;
                        document.querySelector(".h3").style.display="none";
                    }
                }
            });
        }
    }
</script>

<style scoped>

</style>