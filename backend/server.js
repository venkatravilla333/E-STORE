// const express = require('express')
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
let app = express()
import dbCon from './config/db.js'

dbCon()
app.use(cors())
app.use(express.json())

app.use('/api', productRoutes);
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello server')
})


var PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log('Server started in port 5000')
})

