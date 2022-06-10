//DEPENDENCIES
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

//GET
baker.get('/data/seed', (req, res) => {
    console.log(bakerSeedData)
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})






//EXPORTS
module.exports = baker