const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    roleName : String,
    type : mongoose.Schema.ObjectId
    // createdAt : {
    //     type : Date,
    //     default :Date.now()
    // },
    // updatedAt : {
    //     type : Date,
    //     default : Date.now()
    // }
    
})

const roleModel = new mongoose.model('designations',roleSchema)
module.exports = roleModel