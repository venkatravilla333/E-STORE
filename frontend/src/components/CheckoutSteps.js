// components/CheckoutSteps.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav className="d-flex justify-content-around my-4">
       <div>
        {step1 ? (
          <NavLink to="/login" className="text-blue-600">Login</NavLink>
        ) : (
          <span className="text-gray-400">Login</span>
        )}
      </div>
      <div>
        {step2 ? (
          <NavLink to="/shipping" className="text-blue-600">Shipping</NavLink>
        ) : (
          <span className="text-gray-400">Shipping</span>
        )}
      </div>
      <div>
        {step3 ? (
          <NavLink to="/payment" className="text-blue-600">Payment</NavLink>
        ) : (
          <span className="text-gray-400">Payment</span>
        )}
      </div>
      <div>
        {step4 ? (
          <NavLink to="/placeorder" className="text-blue-600">Place Order</NavLink>
        ) : (
          <span className="text-gray-400">Place Order</span>
        )}
      </div>
    </nav>
  );
};

export default CheckoutSteps;
