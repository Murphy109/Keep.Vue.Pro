"use strict"
import KeepCommon from "../../constants/KeepCommon.js";


module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getban:function(cb){
        let url = KeepCommon.SWIPERBAN;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }

}