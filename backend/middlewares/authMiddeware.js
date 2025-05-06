
import jwt from 'jsonwebtoken'
import UserModel  from '../models/userModel.js'


export let protect = async(req, res, next) => {
  // let token 
  //get token from cookies
  var token = req.cookies.token
  console.log('token:', token)
  if (token) {
    try {
      let decode = jwt.verify(token, process.env.JWT_SECRETE)
      console.log(decode)
       req.user = await UserModel.findById(decode.userId).select('-password')
      next()
    } catch (error) {
      res.status(401)
      // throw new Error('Invalid token')
      console.log('no token')
    }

  } else {
    res.status(401)
    throw new Error('No token available')
  }
}
