"use strict"
import KEEPCommon from "../constants/KEEPCommon";

//状态页面获取数据
module.exports = {

    /**
     * 返回首页的ad列表
     * @returns {Promise.<TResult>}
     */
    getStatus:function(cb){
        let url = KEEPCommon.STATUSLINK;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.Items);
            })
        })
    }

};
