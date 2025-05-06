import express from 'express'
import { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddeware.js';


const router = express.Router();


//normal user routes

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(protect, logoutUser);
router.route('/getProfile').get(protect, getUserProfile);
router.route('/updateProfile').put(protect, updateUserProfile);

// admin routes

// router.route('/getUsers').get(getUsers);
// router.route('/getUser/:id').get(getUser);
// router.route('/updateUser/:id').update(updateUser);
// router.route('/deleteUser/:id').delete(deleteUser);


export default router