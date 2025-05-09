import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Link } from 'react-router-dom';

const PlaceOrderScreen = () => {
  const placeOrderHandler = () => {
    // Dispatch order creation action here
    alert('Order placed!');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <h2>Place Order</h2>
      {/* Show shipping, payment, order summary here */}
      <Link to= '/placeorder' onClick={placeOrderHandler}>Place Order</Link>
    </div>
  );
};

export default PlaceOrderScreen;
