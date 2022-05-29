const express = require('express')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to and Awesome App about Breads!')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Listen
app.listen(PORT, () => {
    console.log('nomming at port', PORT);
})