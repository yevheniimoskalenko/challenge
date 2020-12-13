const { Router } = require('express')
const exchange = require('../controllers/exchange.controllers')
const payCoin = require('../controllers/pay.controllers')
const resultPay = require('../controllers/result.controllers')

const router = Router()
router.post('/exchange/', exchange)
router.post('/pay/', payCoin)
router.post('/result', resultPay)

module.exports = router
