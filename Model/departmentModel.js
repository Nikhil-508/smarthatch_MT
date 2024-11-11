const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
    departmentName : String,
    type : mongoose.Schema.ObjectId
    
})

const departmentModel = new mongoose.model('departments',departmentSchema)
module.exports =  departmentModel