import jwt from 'jsonwebtoken'

let generateToken = (res, userid) => {
  let token =  jwt.sign({ userId: userid }, process.env.JWT_SECRETE, {
         expiresIn: '10d'
       })
      console.log('token', token)
      res.cookie('token', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV !== 'development',
         sameSite: 'strict',
         maxAge: 10 * 24 * 60 * 60 *1000
      })
}

export {generateToken}