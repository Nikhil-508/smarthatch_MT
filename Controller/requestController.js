const userModel = require("../Model/userModel")
const requestModel = require('../Model/requestModel')

const isDepartmenthead = async(req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        console.log(user,"user gott");

        if(!user.departmentHead){
            res.status(401).json({message : "not department head"})
        }
        next()
        
    }catch(error){
        console.log("erorrr",error)
    }
}

const checkingRequest = async(req,res) => {
    try {
        const request = await requestModel.findById(req.params.id)
        if(!request){
            return res.status(401).json({message: "reqst not found"})
        }
        res.json(request)
    } catch (error) {
        res.status(500).json({message : "request not found error"})
    }
}

module.exports = {isDepartmenthead,checkingRequest}