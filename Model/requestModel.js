const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({
    requestId: {
        type : mongoose.Schema.ObjectId,
        ref : 'requestdatas'
    },
    status : ['pending','approved','denied'],
    detail: String,
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const requestModel = new mongoose.model('requestdatas',requestSchema)
module.exports = requestModel