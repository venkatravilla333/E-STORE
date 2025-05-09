import React, { useEffect, useState } from 'react';
import { saveShippingAddress } from '../redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen() {
 let cart = useSelector((state) => {
    return state.cartReducer
 })
  let { shippingAddress } = cart
  
 let [address, setAddress] =   useState(shippingAddress?.address || '')
 let [city, setCity] =   useState(shippingAddress?.city ||'')
 let [postalCode, setPostalCode] =   useState(shippingAddress?.postalCode ||'')
 let [country, setCountry] = useState(shippingAddress?.country ||'')

  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  let handleSubmit = (e) => {
   e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    navigate('/payment')
  }
  
  return (
    <div>
      <CheckoutSteps step1 step2/>
      <form onSubmit={handleSubmit}>
        <div className='container row mt-5 shadow w-50 p-4 m-auto'>
          <h4 className='text-center'>Shipping Details</h4>
          <div className='col-md-6 m-auto'>
            <input
              type='text'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='address'
              className='my-3 form-control'
            />
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='City'
              className='my-3 form-control'
            />
            <input
              value={postalCode}
              type='text'
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder='postal code'
              className='form-control'
            />
            <input
              value={country}
              type='text'
              onChange={(e) => setCountry(e.target.value)}
              placeholder='country'
              className='form-control my-3'
            />
            <Link to= '/payment'
              type='submit'
              className='btn btn-dark my-3 w-50 d-block m-auto'
            >
              Continue
            </Link>
            
          
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShippingScreen;
