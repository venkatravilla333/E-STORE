// const express = require('express')
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import cookieParser from 'cookie-parser'
dotenv.config()
let app = express()
import dbCon from './config/db.js'

dbCon()
const FRONTEND_ORIGIN = 'http://localhost:3000';

app.use(cors({
  origin: FRONTEND_ORIGIN, // do NOT use '*'
  credentials: true,       // allow cookies to be sent
}));

app.use(express.json()) //body parsing

app.use(cookieParser())

app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use('/api', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello server')
})

mongoose.set('strictPopulate', false);

var PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log('Server started in port 5000')
})

