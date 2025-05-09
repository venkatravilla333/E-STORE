import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { useSelector, useDispatch } from 'react-redux';
import { savePaymentMethod } from '../redux/slices/cartSlice';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const navigate = useNavigate();
  let dispatch = useDispatch();
  let cart = useSelector((state) => {
    return state.cartReducer;
  });
  let { shippingAddress } = cart;

  useEffect(() => {
    if (!shippingAddress) {
      navigate('shipping');
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // Save payment method to Redux or context here
    dispatch(savePaymentMethod(paymentMethod));

    navigate('/placeorder');
  };

  return (
    <div className='mt-5'>
      <CheckoutSteps step1 step2 step3 />
      <h4 className='text-center my-4'>Payment</h4>
      <div className='d-flex justify-content-center my-4'>
        <form onSubmit={submitHandler}>
          <div className='my-3'>
            <label>
              <input
                type='radio'
                name='paymentMethod'
                value='PayPal'
                checked={paymentMethod === 'PayPal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{' '}
              PayPal
            </label>
          </div>
          <div className='my-3'>
            <label>
              <input
                type='radio'
                name='paymentMethod'
                value='Stripe'
                checked={paymentMethod === 'Stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />{' '}
              Stripe
            </label>
          </div>
          <div className='mt-4'>
            <button type='submit' className='btn btn-dark'>
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentScreen;
