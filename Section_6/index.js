const covid = require('./httpReq.js')

covid('ID', (error,data) => {
    console.log('Error',error)
    console.log('Data', data)
})
