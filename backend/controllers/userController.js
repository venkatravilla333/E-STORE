import  UserModel  from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import { generateToken } from "../utils/generateToken.js"

//public

export let registerUser = async (req, res) => {
   console.log(req.body)

   let {name, email, password } = req.body
   
   let existuser = await UserModel.findOne({ email })
   
   if (existuser) {
      res.status(400)
      throw new Error('User already exist')
   }

  let user = await UserModel.create({
      name,
      email,
      password
  })

   if (user) {
      generateToken(res, user._id)
      res.status(201).json({
         user
      })
   }   
}

// public

export let loginUser = async(req, res) => {
   let { email, password } = req.body

   let user = await UserModel.findOne({ email })

   if (user && await user.comparePassword(password)) {
       generateToken(res, user._id)
     return res.status(200).json({
         user
      })
      
   } else {
      res.status(401)
      throw new Error('Invalid email or password')
   }
   

}

// private

export let logoutUser = async(req, res) => {
   res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict'
   })
   return res.status(200).json({
      message: 'User logout suucessfully'
   })
}

// private

export let getUserProfile = async(req, res) => {
   let userProfile = await UserModel.findById(req.user._id)
   console.log(userProfile)
   if (userProfile) {
      res.status(200).json({
         userProfile
      })
   } else {
      console.log('User not found')
      res.status(404)
      throw new Error('User not found')
   }
}

// private

export let updateUserProfile = async (req, res) => {
   
   let user = await UserModel.findById(req.user._id)
    console.log(user)
   if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email

      if (req.body.password) {
         user.password = req.body.password
      }
      let updateUser = await user.save()
      res.status(200).send({
         updateUser
      }) 
   } else {
      res.status(404)
      throw new Error('User not found')

   }
    
}

// private

// let getUsers = async(req, res) => {
//    return res.send('get all users')
// }

// private

// let getUser = async(req, res) => {
//    return res.send('get single user')
// }

// private

// let updateUser = async(req, res) => {
//    return res.send('update single user')
// }

//private

// let deleteUser = async(req, res) => {
//    return res.send('dlete single user')
// }


// export {registerUser}

// export {loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUser, updateUser, deleteUser}
