const request = require('request')
//Reusable function
const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia29rdWJ5YWt1aW4iLCJhIjoiY2sxZ3dmNGIyMTk2ejNjcDdoYnhyZzR0YyJ9.Y_k-ap3jT-BBAy3mkUnONw&limit=1'
    request({url : url, json : true}, (error,response)=>{
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location, Try other location', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name,
            })
        }
    })
}

// Usable example
// geocode('New York', (error, data) => {
//     console.log('Error', error, 'Data', data)
// })

module.exports = geocode