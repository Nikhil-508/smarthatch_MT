const requestModel = require('../Model/requestModel')
const userModel = require('../Model/userModel')


const sendRequest = async(req,res)=>{
    try {
        const {requestId,detail,status} = req.body
        const newRequest = new requestModel({
            requestId,
            detail ,
            status
        })
        await newRequest.save()
        res.status(201).json({message :"req pending ",newRequest})
    } catch (error) {
        res.status(500).json({message : "send reqst error"})
    }
    
}


const requestApproval = async(req,res) => {
    try {
        const id = req.params.id
        console.log(id,"iddd");
        
        const request = await requestModel.findById(id)
        console.log(request,"reqsttt");
        
        if(!request){
            return res.status(401).json({message :"reqst not find"})
        }
        
        request.status = "approved"
        console.log("approveddd");
        
        await request.save()
        res.status(200).json({message :"reqst approved success"})
    } catch (error) {
        res.status(500).json({message :"error in rqst approval"})
    }
}


const getApproval = async(req,res) => {
    try {
        const getApprovalRequest = await userModel.aggregate([
            {$match : {"departmentHead" : true}},
            
            {
                $lookup : {
                from : "departments",
                localField : "department_id",
                foreignField : "_id",
                as : "department_info"
            }},
            {$unwind :{path : "$department_info"}},
            {
                $project: {
                    _id :1,
                    name : 1,
                    email :1,
                    streetAddress :1,
                    departmentHead : 1
                }
            }
        ])
        
        res.json({
            getApprovalRequest
        })
    } catch (error) {
        res.status(500).json({message :"erorr"})
    }
}


const getApprovedRequest = async(req,res) => {
    try {
        const approvedrequests = await requestModel.find({status : "approved"})
        res.status(200).json({message : "got the approved requests",approvedrequests})
    } catch (error) {
        res.status(500).json({message : "approved reqst not getting"})
    }
}

module.exports = {sendRequest,requestApproval,getApproval,getApprovedRequest}