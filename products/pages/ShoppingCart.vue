<template>
    <div>
        <header-nav></header-nav>
        <shop-cart-contain :Count="SumCart" :lists="lists"></shop-cart-contain>
        <footer-account :tm="totalMoney" :tq="totalQal"></footer-account>
    </div>
</template>

<script type='text/ecmascript-6'>
    import "../static/css/shopping_cart.css";
    import HeaderNav from "../components/ShoppingCart/HeaderNav.vue";
    import FooterAccount from "../components/ShoppingCart/FooterAccount.vue";
    import ShopCartContain from "../components/ShoppingCart/ShopCartContain.vue";
    import ShopCartService from "../service/DiscoveringService/ShopCartService.js";

    export default {
        components:{
            HeaderNav,
            ShopCartContain,
            FooterAccount

        },
        data(){
            return {
                lists:[],
                totalMoney:0,
                totalQal:0
            }
        },
        methods:{
            SumCart:function(){
                this.totalMoney =0;
                this.totalQal = 0;
                this.lists.forEach((n,index)=>{
                    this.totalMoney += n.price * n.qal;
                    this.totalQal += n.qal;

                })
            },
            initCounter:function(data){
                data.forEach((n,index)=>{
                    this.totalMoney += n.price * n.qal;
                    this.totalQal += n.qal;
                })
            },

            initData(){
                ShopCartService.getGoodsInfo((data)=>{
                    this.lists=data;
                })
            }
        },
        created:function(){
            this.initData()
        }

    }
</script>

<style scoped>

</style>