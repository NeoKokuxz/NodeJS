const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
//This is how to customize the key and values
// const url = 'https://api.darksky.net/forecast/d3d800544c8d0c49eef0241bc39e684e/37.8267,-122.4233?key=value&otherKey=otherValue'
// const url = 'https://api.darksky.net/forecast/d3d800544c8d0c49eef0241bc39e684e/37.8267,-122.4233'

const address = process.argv[2]

if(!address){
    console.log('Please enter an address')
}else{
    geocode(address, (error, {latitude, longitude, location}) => {
        if(error){
            return console.log('Error', error)
        }
        forecast(latitude, longitude, (error, {summary, temperature, precipProbability}) => {
            if(error){
                return console.log('Error', error)
            }
            console.log(location)
            console.log(summary, temperature,precipProbability)
        })
    })
}
