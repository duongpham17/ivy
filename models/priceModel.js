const mongoose = require('mongoose')

const priceSchema = new mongoose.Schema({
    type: String,
    price: []
})

const Price = mongoose.model('Price', priceSchema)
module.exports = Price