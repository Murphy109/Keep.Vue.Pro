"use strict"
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./static/css/public.css";
import "./static/js/common";
import "./static/css/swiper.min.css";
import "./static/js/swiper.min.js";
import "./static/js/jquery.min";
import index from "./pages/Index.vue";
import DiscoveringPages from "./pages/DiscoveringPages.vue";
import GoodsDetails from "./pages/GoodsDetails.vue"
import ShoppingCart from "./pages/ShoppingCart.vue"
import Mine from "./pages/Mine.vue"
import Status from "./pages/Status.vue"
import Cater from "./pages/Cater.vue"


//import Status from "./pages/Status.vue";

Vue.use(VueRouter);
const router = new VueRouter({
    routes:[
        {path:"/",component:index},
        {path:"/index",component:index},
        {path:"/discovering",component:DiscoveringPages},
        {path:"/Goodslink",component:GoodsDetails},
        {path:"/ShoppingCart",component:ShoppingCart},
        {path:"/Mine",component:Mine},
        {path:"/Status",component:Status},
        {path:"/Cater",component:Cater}

    ]
});
new Vue({
    el: "#app",
    router,
    render: h=> {
        return h(App);
    }
});


