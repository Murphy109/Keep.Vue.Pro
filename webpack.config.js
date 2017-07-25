"use strict"
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:[path.resolve(__dirname,"components/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"components")
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    module:{
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader",exclude:/node_modules/},
            {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/}
        ]
    }
}

