const express = require('express')
const router = express.Router()
const {fetchDepartments} = require('../Controller/departmentController')

router.get('/fetchdept',fetchDepartments)

module.exports = router