import mongoose from "mongoose"


let reviewSchema = new mongoose.Schema({

   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  })


let productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  seller: {
      type: String,
      required: true,
  },
  category: {
      type: String,
      required: true, 
  },
   description: {
      type: String,
      required: true, 
  },
  reviews: [reviewSchema],

    price: {
      type: Number,
      required: true,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      required: true,
      default: 0,
  },
     rating: {
      type: Number,
      required: true,
      default: 0,
    },
    
    countInStock: {
      type: Number,
      required: true,
      default: 0,
  },
     user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // the admin or user who created it
  },
  },  { timestamps: true }
)
  
let Productmodel = mongoose.model('Product', productsSchema)
 
export default Productmodel