const mongoose = require('mongoose')

  const userSchema = new mongoose.Schema({
    name : {
      type : String
    },
    email : {
      type : String
    },
    password : {
      type : String
    },
    departmentHead : {
      type : Boolean
    },
    streetAddress : {
      type : String
    },

  
    department : [{
      type : mongoose.Schema.ObjectId,
      ref:'departments',
      // require : true
    }],

    roles : [{
      type : mongoose.Schema.ObjectId,
      ref : "designations"
    }]
  })

  const userModel = new mongoose.model('usersdatas',userSchema)
  module.exports =  userModel