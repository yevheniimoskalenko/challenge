const LiqPay = require('liqpayjs-sdk')
const { Base64 } = require('js-base64')
require('dotenv').config()
module.exports = (req, res) => {
  const { UAH, amount, vite, card, memo, firstName, lastName, email } = req.body
  const candidate = Base64.encode(
    JSON.stringify({
      UAH,
      amount,
      vite,
      card,
      memo,
      firstName,
      lastName,
      email
    })
  )
  const liqpay = new LiqPay(
    process.env.liqpublic_key,
    process.env.liqprivate_key
  )
  const html = liqpay.cnb_form({
    action: 'pay',
    amount: UAH,
    currency: 'UAH',
    description: `Придбання криптовалюти ${amount} на суму ${UAH}`,
    order_id: Math.floor(Math.random() * 99999),
    version: '3',
    dae: candidate
  })
  return res.send(html)
}
