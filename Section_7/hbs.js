const express = require('express')

const app = express()
app.set('view engine', 'hbs')

app.get('', (req, res) => {
    res.render('index', {
    title: 'My title',
    name: 'Panji JF'
    })
   })
app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})