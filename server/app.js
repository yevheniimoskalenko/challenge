const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routers = require('./routers/rout.routers')
const app = express()

require('dotenv').config()
mongoose
  .connect(process.env.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    /* eslint-disable no-console */
    console.log('connect has started...')
  })
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use('/api/', routers)
module.exports = app
