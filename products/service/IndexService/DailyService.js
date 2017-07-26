"use strict"
//import callApi from "../utils/fetchApi";
import KeepCommon from "../../constants/KeepCommon";


module.exports = {
    getDaily:function(cb){
        let url = KeepCommon.DAILY;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }

}