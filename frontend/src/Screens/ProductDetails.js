import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/slices/productSlice';
import Loader from '../components/Loader';
import { addToCart } from '../redux/slices/cartSlice';



function ProductDetails() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  const data = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...data.product, qty }));
    navigate('/cart')

  };

  return (
    <div className='container my-5'>
      <div className='row'>
        {data.loading ? (
          <Loader />
        ) : data.error ? (
          <h3>{data.error}</h3>
        ) : (
          <>
            <div className='col-6 border border-1 d-flex justify-content-center p-4' >
              <img
                style={{ maxHeight: '350px', objectFit: 'contain' }}
                src={data.product.image}
                alt={data.product.name}
                className='img-fluid'
              />
            </div>

            <div className='col-6 border border-1 px-5  py-4'>
              <h5>Name: {data.product.name}</h5>
              <h5 className='my-3'>Price: ${data.product.price}</h5>
              <h5 className='my-3'>Rating: {data.product.rating}</h5>
              <h5>
                In stock:{' '}
                {data.product.countInStock > 0 ? (
                  <span style={{ color: 'green' }}>In Stock</span>
                ) : (
                  <span style={{ color: 'red' }}>Out of Stock</span>
                )}
              </h5>
              
              {data.product.countInStock > 0 && (
                <div className='mt-4 d-flex justify-content-around align-items-center'>
                  <button
                    className='btn btn-primary px-4'
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </button>

                  <select 
                    id='quantity'
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(data.product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>

                  <button className='btn btn-primary px-4'>Buy now</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
