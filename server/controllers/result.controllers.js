const Base64 = require('js-base64').Base64
const TelegramBot = require('node-telegram-bot-api')
const sha1 = require('sha1')
const Pay = require('../model/pay.model')
require('dotenv').config()
module.exports = (req, res) => {
  const { signature, data } = req.body
  const sign = Base64.encode(
    sha1(process.env.liqprivate_key + data + process.env.liqprivate_key)
  )
  if (signature !== sign) {
    const datas = JSON.parse(Base64.decode(data))
    const candidat = JSON.parse(Base64.decode(datas.dae))
    const pay = new Pay({
      amount: candidat.amount,
      payment_id: datas.payment_id,
      status: datas.status,
      order_id: datas.order_id,
      UAH: candidat.UAH,
      vite: candidat.vite,
      card: candidat.card,
      memo: candidat.memo,
      firstName: candidat.firstName,
      lastName: candidat.lastName,
      email: candidat.email
    })
    pay.save()

    const bot = new TelegramBot(process.env.tBot, { polling: false })
    const message = `<strong>Нава конвертація валюти </strong>

<i>На суму: <b>${candidat.UAH}</b></i>
<i>В монетах це:  <b>${candidat.amount}</b></i>
<i>На адрес: <b>${candidat.vite}</b></i>
    `
    if (datas.status === 'success') {
      bot.sendMessage(458568640, message, { parse_mode: 'HTML' })
    }
  }
  return res.json('OK')
}
