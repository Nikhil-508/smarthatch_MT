const express = require('express')
const router = express.Router()
const {sendRequest,requestApproval,getApproval,getApprovedRequest} = require('../Controller/departmentHeadController')


router.post('/sendrequest',sendRequest)
router.post('/requestApproval/:id',requestApproval)
router.get('/getApprovedRequest',getApprovedRequest)
router.get('/getApproval',getApproval)

module.exports = router