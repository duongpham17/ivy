const mongoose = require('mongoose')

const noticeSchema = new mongoose.Schema({
    message: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Notice = mongoose.model('Notice', noticeSchema)
module.exports = Notice