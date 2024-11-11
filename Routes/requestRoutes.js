const express = require('express')
const router = express.Router()
const {isDepartmenthead,checkingRequest} = require('../Controller/requestController')

router.get('/:id',isDepartmenthead,checkingRequest)

module.exports = router
