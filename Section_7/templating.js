const hbs = require('hbs')
const path = require('path')

const partialsPath = path.join(__dirname,'./templates/partials')
hbs.registerPartials(partialsPath)