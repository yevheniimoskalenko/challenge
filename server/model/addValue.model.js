const { Schema, model } = require('mongoose')

const add = Schema({
  typeAction: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  id_task: {
    type: Schema.Types.ObjectId
  }
})

module.exports = model('add', add)
