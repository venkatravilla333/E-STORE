
//public
let loginUser = async(req, res) => {
   return res.send('login')
}
//public
let registerUser = async(req, res) => {
    return res.send('register')
}
//private
let logoutUser = async(req, res) => {
   return res.send('logout')
}
//private
let getUserProfile = async(req, res) => {
   return res.send('get user profile')
}
//private
let updateUserProfile = async(req, res) => {
    return res.send('update user profile')
}
//private
let getUsers = async(req, res) => {
   return res.send('get all users')
}

//private
let getUser = async(req, res) => {
   return res.send('get single user')
}
//private
let updateUser = async(req, res) => {
   return res.send('update single user')
}

//private
let deleteUser = async(req, res) => {
   return res.send('dlete single user')
}


export {loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUser, updateUser, deleteUser}
