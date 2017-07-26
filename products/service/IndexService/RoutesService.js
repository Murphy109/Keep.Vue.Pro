"use strict"
//import callApi from "../utils/fetchApi";
import KeepCommon from "../../constants/KeepCommon";


module.exports = {
    getRoutes:function(cb){
        let url = KeepCommon.ROUTES;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }

}