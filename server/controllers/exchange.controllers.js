const axios = require('axios')
module.exports = async (req, res) => {
  const { UAH } = req.body

  const usdt = await axios({
    method: 'get',
    url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3'
  }).then((res) => res.data[2].buy)
  const vite = await axios({
    method: 'get',
    url: 'https://api.binance.com/api/v3/ticker/price?symbol=VITEUSDT'
  }).then((res) => res.data.price)
  const amount = await (UAH / usdt / vite).toFixed(3)

  return await res.json(amount)
}
