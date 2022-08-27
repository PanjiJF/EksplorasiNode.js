const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const publicDirPath = path.join(__dirname, './templates/views/index.hbs')
const partialsPath = path.join(__dirname,'./templates/partials')

app.set('views', publicDirPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))


app.get('/weather',(req, res) => {
    res.send({
        forecast: 'Mendung ges',
        location: 'Bandung'
    })
})
app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})