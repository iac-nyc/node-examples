const request = require('request')

const url = 'https://api.darksky.net/forecast/5642395f9c6f6567e0f7d0be3e9efeb8/22.356852,91.783180?lang=bn&units=si'



request({ url:url, json:true }, (error, response) => {
    //console.log(response.body.currently)
    console.log(response.body.daily.data[0].summary
                +"\nIt is currently "
                +response.body.currently.temperature
                +" degrees Celcius out.\nThere is " 
                +response.body.currently.precipProbability +"% chance of rain.")
  
})


// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})