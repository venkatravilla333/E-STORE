import mongoose from 'mongoose'

let userSchema = new mongoose.Schema({
  name: {
    typs: String,
    required: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, { timestamps: true })

export let UserModel = mongoose.model('User', userSchema)