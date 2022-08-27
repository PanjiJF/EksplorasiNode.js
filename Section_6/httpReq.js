const request = require('request')

const httpReq = (country, callback) => {
    const url ='https://covid19.mathdro.id/api/countries/'+ country
    request({url: url, json:true}, (error, response)=>{
        if(error) {
            callback(console.error(error),undefined)
        } else {
            // const data = JSON.parse(response.body)
            // console.log(response.body.confirmed)
            callback(undefined, {
                confirmed: response.body.confirmed.value,
                recovered: response.body.recovered.value,
                deaths: response.body.deaths.value
            })
        } 
    })
}
module.exports = httpReq