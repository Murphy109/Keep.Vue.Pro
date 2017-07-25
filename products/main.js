"use strict"
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//import Article from "./components/Article.vue";
//import User from "./components/User.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {path:"/",component:Article},
        {path:"/article",component:Article},
        {path:"/user",component:User}
    ]
});

new Vue({
    el: "#app",
    router,
    render: h=> {
        return h(App);
    }
});


