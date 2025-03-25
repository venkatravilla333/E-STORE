
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

let App = express()

var dbURL = process.env.dbURL

mongoose.connect(dbURL)
  .then(() => {
  console.log('db connected successfully')
  }).catch((err) => {
   console.log('Error while conecting with DB', err)
})
var PORT = process.env.PORT || 5500

App.listen(PORT, () => {
  console.log('Server started in port 5000')
})

