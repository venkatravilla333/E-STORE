
import Productmodel from "../models/productModel.js"
// @desc    Create a new product
// @route   POST /api/products
// @access  Private (Admin only)

// const createProduct = async (req, res) => {
//   console.log(req.body)
//   try {
//     const { name, description, price, category, countInStock, image, rating, noOfReviews, seller  } = req.body;

//     // Validation (optional)
//     if (!name || !price) {
//       return res.status(400).json({ message: 'Name and price are required' });
//     }

//     const product = {
//       name,
//       description,
//       price,
//       category,
//       seller,
//       countInStock,
//       image,
//       noOfReviews,
//       rating
     
//     };

//     const savedProduct = await Productmodel.create(product);
//     console.log('hello', savedProduct)
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };
// export default createProduct


export let createProduct = async (req, res) => {
  // console.log(req.body)
   try {
    let {  name,
      description,
      price,
      category,
      seller,
      stock,
      image,
      numOfReviews,
      rating } = req.body
    if (!name || !image || !description || !seller || !category || !price || !stock || !rating || !numOfReviews) {
      return res.status(401).send('please enter all fields')
    }

    let newProduct = {
      name,
      image,
      description,
      seller,
      category,
      price,
      stock, 
      rating,
      numOfReviews
    }

    let product = await Productmodel.create(newProduct)
    
    console.log(product)
    return res.status(201).json(product)

  } catch (error) {
     return res.status(500).send('Internal server Error')
  }
}


export let getAllProducts = async(req, res) => {
  let products = await Productmodel.find({})
  console.log(products)
  return res.status(200).json(products)
}

export let getSingleProduct = async (req, res) => {
  console.log(req.params.id)
  
  let product = await Productmodel.findById(req.params.id)
  console.log(product)
  return res.status(200).json(product)
}


