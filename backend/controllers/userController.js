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

   if (user && user.comparePassword(password)) {
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

// let logoutUser = async(req, res) => {
//    return res.send('logout')
// }

// private

// let getUserProfile = async(req, res) => {
//    return res.send('get user profile')
// }

// private

// let updateUserProfile = async(req, res) => {
//     return res.send('update user profile')
// }

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
