import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../redux/slices/orderApiSlice';
import { clearCartItems } from '../redux/slices/cartSlice';

const PlaceOrderScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cartReducer);
  const { cartItems, shippingAddress, paymentMethod, totalPrice, shippingPrice, taxPrice, itemsPrice } = cart;

  console.log(cart)
  
  const { order, success, error } = useSelector((state) => state.orderReducer);

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch((clearCartItems()));
    }
  }, [success, dispatch, navigate, order]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <div className="container mt-4">
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="row">
        <div className="col-md-8">
          <h3>Shipping</h3>
          <p>
            <strong>Address: </strong>
            {shippingAddress.address}, {shippingAddress.city},{' '}
            {shippingAddress.postalCode}, {shippingAddress.country}
          </p>

          <h3>Payment Method</h3>
          <p>
            <strong>Method: </strong>
            {paymentMethod}
          </p>

          <h3>Order Items</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="50"
                      height="50"
                      className="me-2"
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>
                    {item.qty} x Rs {item.price} = Rs {item.qty * item.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header"><strong>Order Summary</strong></div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Items: Rs {itemsPrice}</li>
              <li className="list-group-item">Shipping: Rs {shippingPrice}</li>
              <li className="list-group-item">Tax: Rs {taxPrice}</li>
              <li className="list-group-item">Total: Rs {totalPrice}</li>
            </ul>
            {/* {error && <div className="alert alert-danger mt-2">{error}</div>} */}
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={placeOrderHandler}
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderScreen;
