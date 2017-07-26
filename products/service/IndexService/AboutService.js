"use strict"
//import callApi from "../utils/fetchApi";
import KeepCommon from "../../constants/KeepCommon";


module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getAbout:function(cb){
        let url = KeepCommon.ABOUT;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }

}
