const request = require('postman-request');

const forecast = (lat,lon,callback ) =>{

    const url ='http://api.weatherstack.com/current?access_key=9d501ba465eaae32b2b540e4b466bdf4&query='+lat+','+ lon ; 
    
    request({url ,json:true}, 
     (error, response, body)=> {
      if(error){
        callback(error,undefined ) 
      }else{
        callback(undefined ,{
            temperature: body.current.temperature,
            feelslike : body.current.feelslike
        } );
      }
    });
}

module.exports = forecast ;