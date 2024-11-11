const departmentModel = require('../Model/departmentModel')

const fetchDepartments = async(req,res)=> {
    try {
        const departments = await departmentModel.find()
        res.status(200).json({message :"departments data",departments})
    } catch (error) {
        res.status(500).json({message :"error in detching dptmntss"})
    }
}

module.exports = {fetchDepartments}