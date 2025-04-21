
import express from 'express'
const router = express.Router();

import { createProduct, getAllProducts, getSingleProduct } from '../controllers/productController.js'



router.route('/admin/createProduct').post(createProduct);
router.route('/getAllProducts').get(getAllProducts);
router.route('/getSingleProduct/:id').get(getSingleProduct);

 

export default router


