// const express = require('express')
import express from 'express'
import cors from 'cors'
// const mongoose = require('mongoose')


// require('dotenv').config()
import dotenv from 'dotenv'
import products from './data.js'

dotenv.config()

let App = express()

App.use(cors())

// var dbURL = process.env.dbURL

// mongoose.connect(dbURL)
//   .then(() => {
//   console.log('db connected successfully')
//   }).catch((err) => {
//    console.log('Error while conecting with DB', err)
// })

App.get('/', (req, res) => {
  res.send('Hello server')
})

App.get('/api/products', (req, res) => {
  res.json(products)
})

// App.get('/api/products/:id', (req, res) => {
//   let product = products.find((product) => {
//     return product._id === req.params.id
//   })
//   res.json(product)
// })

var PORT = process.env.PORT || 5500

App.listen(PORT, () => {
  console.log('Server started in port 5000')
})

