
import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/orderController.js';

import { protect } from '../middlewares/authMiddeware.js';

// Create a new order
router.route('/createOrder').post(protect, addOrderItems);

// Get logged-in user's orders
router.route('/myorders').get(protect, getMyOrders);

// Get order by ID
router.route('/:id').get(protect, getOrderById);

// Mark order as paid
router.route('/:id/pay').put(protect, updateOrderToPaid);

// Mark order as delivered
router.route('/:id/deliver').put(protect, updateOrderToDelivered);

// Get all orders (admin)
router.route('/getorders').get(protect,   getOrders);

export default router;

