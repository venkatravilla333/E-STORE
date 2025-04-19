// const express = require('express')
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
dotenv.config()
let app = express()
import dbCon from './config/db.js'
import Productmodal from './models/productModel.js'

dbCon()
app.use(cors())
app.use(express.json())

app.use('/api', productRoutes);



app.get('/', (req, res) => {
  res.send('Hello server')
})



// App.get('/api/products', async(req, res) => {
//  let products = await Productmodal.find()
//   res.json(products)
// })

// App.get('/api/products/:id', (req, res) => {
//   let product = products.find((product) => {
//     return product._id === req.params.id
//   })
//   res.json(product)
// })

var PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log('Server started in port 5000')
})

