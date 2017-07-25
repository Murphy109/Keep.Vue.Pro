"use strict"
import callApi from "../utils/fetchApi";
import DINGCommon from "../constants/DINGCommon";


module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getBlocks:function(cb){
        let url = DINGCommon.BlockURLLINK;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.lists);
            })
        })
    }

}