const request = require('postman-request');

const geocode = (address , callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2FyYXNoYWFiYW43NTciLCJhIjoiY2w4a2FqdHdvMTRwYjNwbzV4cDBha3poeiJ9.2f695-ouDj0IGXLoBm2reA&limit=1'
    request({url , json:true}, 
     (error, response, body)=> {
        if(error){
            callback('Unable to connect to location service',undefined)
        }
        else if(!body.features || body.features.length === 0  ){
           callback('Location not found', undefined)
        }
        else{
           callback(undefined,
            {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0]
            }
           )
        }
    });
}


module.exports = geocode