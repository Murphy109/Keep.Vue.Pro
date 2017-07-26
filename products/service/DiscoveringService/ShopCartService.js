"use strict"
import KEEPCommon from "../../constants/KEEPCommon";


module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getGoodsInfo:function(cb){
        let url = KEEPCommon.SHOPCARURLLINK;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data);
                console.log(data)
            })
        })
    }

}