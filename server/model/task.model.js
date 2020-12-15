const { Schema, model } = require('mongoose')

const task = new Schema({
  action: {
    type: String,
    required: true
  },
  typeAction: {
    type: String,
    required: true
  }
})
module.exports = model('task', task)
