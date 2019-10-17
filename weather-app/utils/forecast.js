const request = require('request')


const forecast = (latitude, longtitude, callback) => {

    const url = 'https://api.darksky.net/forecast/d3d800544c8d0c49eef0241bc39e684e/' + encodeURIComponent(latitude) +','+ encodeURIComponent(longtitude)
    // console.log(url)
    //(error, response) => (error, {body})
    //destructure, and only use the body from response
    request({ url, json : true}, (error, {body}) =>{
        if(error){
            callback('Unable to connect to service!', undefined)
        }else if(body.code === 400){
            callback(body.error, undefined)
        }else{
            callback(undefined, {
                summary : body.currently.summary,
                temperature : body.currently.temperature,
                precipProbability : body.currently.precipProbability,
            })
        }
    })
}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = forecast