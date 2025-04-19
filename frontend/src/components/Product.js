import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  console.log(product)
  return (
    <div class='card shadow my-3 p-2 d-flex justify-content-center' style={{ width: "264px"}}>
      <Link to={`/product/${product._id}`}>
        <img src={`${product.image}`} class='card-img-top' alt='...' className='product-image' width="100%" height="200px"/>
      </Link>
      
      <div class='card-body'>
         <Link to={`/product/${product._id}`}>
          <h6 class='card-title'>{product.name}</h6>
          </Link>
        <h6 class='card-title mt-2'> Price: {product.price}</h6>
        <Rating value={product.rating} text={product.numOfReviews} />
        <div className='mt-3 d-flex justify-content-between'>
        <a href='#' class='btn btn-sm btn-primary px-2' >
          Add to cart
        </a>
        <a href='#' class='btn btn-sm btn-primary px-3'>
          Buy now
        </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
