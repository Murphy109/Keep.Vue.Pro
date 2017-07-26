"use strict"
//import callApi from "../utils/fetchApi";
import KeepCommon from "../../constants/KeepCommon";


module.exports = {
    getTraining:function(cb){
        let url = KeepCommon.TRAINING;
        fetch(url).then((response)=>{
            response.json().then((data)=>{
                cb(data.items);
            })
        })
    }

}