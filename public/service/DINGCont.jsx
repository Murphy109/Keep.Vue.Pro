"use strict"
import callApi from "../utils/fetchApi";
import DINGCommon from "../constants/DINGCommon";


module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getDingCont:function(cb){
        let url = DINGCommon.DingURLLINK;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.conts);
            })
        })
    }

}