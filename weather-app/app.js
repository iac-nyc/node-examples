const request = require('request')

const url = 'https://api.darksky.net/forecast/secretky'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})