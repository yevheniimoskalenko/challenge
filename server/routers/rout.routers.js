const { Router } = require('express')
const task = require('../controllers/task.controllers')

const router = Router()
router.post('/exchange/', task)

module.exports = router
