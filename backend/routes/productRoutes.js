
import express from 'express'
const router = express.Router();

import { createProduct, getProducts, getProduct } from '../controllers/productController.js'



router.route('/admin/product').post(createProduct);
router.route('/getproducts').get(getProducts);
router.route('/getproduct/:id').get(getProduct);

 

export default router


