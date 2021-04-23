const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    type: String,
    images: [],
})

const Gallery = mongoose.model('Gallery', gallerySchema)
module.exports = Gallery