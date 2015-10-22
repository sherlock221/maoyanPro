/**
 * 猫眼数据服务
 */


var API_URL = require("../config").API;


var  json =  function(response) {
    return response.json();
}



var status = function(response) {
    //成功200
    if (response.status >= 200 && response.status < 300) {
        return response
    }

    //出现错误404 500
    throw new Error(response.statusText)
}


var MaoYanService   = {
    //查出首页电影列表
    getMovieList : function(type){

        return fetch(API_URL+"/movie/list.json?type=hot&offset=0&limit=1000")
                    .then(status)
                    .then(json);
    },
    //查出电影详情
    getMovieDetail : function(movieId){
        return  fetch(API_URL+"/movie/"+movieId+".json")
                    .then(status)
                    .then(json);
    },

    //查处影院
    getMovieHome : function(){
        return fetch(API_URL+"/cinemas.json")
            .then(status)
            .then(json);
    }

}



module.exports = MaoYanService;
