const { Schema, model } = require('mongoose')

const Pay = new Schema({
  UAH: {
    type: Number
  },
  amount: {
    type: String
  },
  vite: {
    type: String
  },
  payment_id: {
    type: Number
  },
  status: {
    type: String
  },
  order_id: {
    type: String
  },
  memo: {
    type: String
  },
  card: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('pay', Pay)
