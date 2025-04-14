import React from 'react';
import products from '../products';
import Rating from './Rating';
import {Link} from 'react-router-dom'


function Main() {
  return (
    <div className='main-div'>
      <div className='row d-flex justify-content-center'>
        {products.map((product) => {
          return (
            <div class='card m-2 shadow-lg p-4' >
            <Link to={`${product._id}`}>
              <img src={product.image} class='card-img-top product-image img-fluid' alt='...' />
              <div class='card-body'>
                <h5 class='card-title'>{product.name}</h5>
                <p class='card-text'>
                  {
                    product.price
                  }
                </p>
                <Rating value={product.rating} text={product.numOfReviews} />
                <div className='my-3 d-flex justify-content-between'>
                <a href='#' class='btn btn-primary px-3'>
                  Add to cart
                </a>
                <a href='#' class='btn btn-primary  px-3'>
                  Buy Now
                </a>
                </div>
                </div>
                </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
