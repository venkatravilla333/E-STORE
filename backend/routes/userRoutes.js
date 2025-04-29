import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js';
// import {loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUser, updateUser, deleteUser} from '../controllers/userController.js'

const router = express.Router();



router.route('/register').post(registerUser);
router.route('/loginuser').post(loginUser);

// router.route('/login').post(loginUser);
// router.route('/logout').post(logoutUser);
// router.route('/profile').get(getUserProfile);
// router.route('/profile').put(updateUserProfile);

// router.route('/getUsers').get(getUsers);
// router.route('/getUser/:id').get(getUser);
// router.route('/updateUser/:id').update(updateUser);
// router.route('/deleteUser/:id').delete(deleteUser);


export default router