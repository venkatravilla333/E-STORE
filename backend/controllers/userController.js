import  UserModel  from "../models/userModel.js"
import jwt from 'jsonwebtoken'

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
       let token =  jwt.sign({ userId: user._id }, process.env.JWT_SECRETE, {
         expiresIn: '10d'
      })
      console.log(token)
      res.status(201).json({
        user
      })
   }
   
}

// //public
// let loginUser = async(req, res) => {
//    return res.send('login')
// }
// //private
// let logoutUser = async(req, res) => {
//    return res.send('logout')
// }
// //private
// let getUserProfile = async(req, res) => {
//    return res.send('get user profile')
// }
// //private
// let updateUserProfile = async(req, res) => {
//     return res.send('update user profile')
// }
// //private
// let getUsers = async(req, res) => {
//    return res.send('get all users')
// }

// //private
// let getUser = async(req, res) => {
//    return res.send('get single user')
// }
// //private
// let updateUser = async(req, res) => {
//    return res.send('update single user')
// }

// //private
// let deleteUser = async(req, res) => {
//    return res.send('dlete single user')
// }


// export {registerUser}

// export {loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUser, updateUser, deleteUser}
