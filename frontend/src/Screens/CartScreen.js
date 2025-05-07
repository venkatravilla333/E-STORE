import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../redux/slices/cartSlice';

function CartScreen() {
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cartReducer;
  });
  let { cartItems } = cart;

  let addToCartHandler = (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  let removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  let proceedToCheckout = () => {
    console.log('proceed');
  };

  return (
    <div className='container mt-5'>
      <div className='row my-3'>
        <div className='col-md-8'>
          <h4 className='my-4'>Shopping Cart Items</h4>
          {cartItems.length === 0 ? (
            <h5>
              Your Cart is Empty <Link to='/'>Back to Home</Link>
            </h5>
          ) : (
            <ul class='list-group list-group-flush'>
              {cartItems.map((item) => {
                return (
                  <div className='row'>
                    <li class='list-group-item col-md-3 d-flex justify-content-center'>
                      <img
                        src={item.image}
                        alt=''
                        width='100px'
                        height='100px'
                      />
                    </li>
                    <li class='list-group-item col-md-3 d-flex justify-content-center align-items-center'>
                      {item.name}
                    </li>
                    <li class='list-group-item col-md-2 d-flex justify-content-center align-items-center'>
                      {item.price}
                    </li>
                    <li class='list-group-item col-md-2  d-flex justify-content-center align-items-center'>
                      <select
                        class='form-select'
                        id='quantity'
                        value={item.qty}
                        onChange={(e) =>
                          addToCartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </li>
                    <li class='list-group-item col-md-2 d-flex justify-content-center align-items-center'>
                      <button
                        className='border border-none'
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <FaTrash />
                      </button>
                    </li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className='col-md-4 mt-5'>
          <div class='list-group'>
            <button type='button' class='list-group-item' aria-current='true'>
              <h4>
                Sub total:{' '}
                {cartItems.reduce((acc, item) => {
                  return acc + item.qty;
                }, 0)}{' '}
                Items
              </h4>
            </button>
            <button type='button' class='list-group-item '>
              <h5>
                Total :{' '}
                {cartItems.reduce((acc, item) => {
                  return acc + item.qty * item.price;
                }, 0)}
              </h5>
            </button>
            <button type='button' class='list-group-item'  onClick={proceedToCheckout}>
             
                <Link to = '/shipping'
                  className='btn btn-primary py-2 px-3'
                  
                >
                  Proceed To CheckOut
                </Link>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
