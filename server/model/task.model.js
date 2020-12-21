const { Schema, model } = require('mongoose')

const task = new Schema({
  action: {
    type: String,
    required: true
  },
  typeAction: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: '#409EFF'
  }
})
module.exports = model('task', task)
