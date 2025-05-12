// src/screens/OrderScreen.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../redux/slices/orderSlice';
import { useParams } from 'react-router-dom';

const OrderDetailsScreen = () => {
  const dispatch = useDispatch();
  const { id: orderId } = useParams();

  const { loading, order, error } = useSelector((state) => state.orderReducer);
  console.log(order)

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <div className="container my-4">
      <h2 className="mb-4">Order Details - #{orderId}</h2>
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : (
        order && (
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header">Shipping</div>
                <div className="card-body">
                  <p><strong>Name:</strong> {order.user.name}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${order?.user?.email}`}>{order.user.email}</a></p>
                  <p><strong>Address:</strong> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">Payment Method</div>
                <div className="card-body">
                  <p>{order.paymentMethod}</p>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">Order Items</div>
                <ul className="list-group list-group-flush">
                  {order.orderItems.map((item) => (
                    <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <img src={item.image} alt={item.name} width="50" className="me-2" />
                        {item.name} (x{item.qty})
                      </div>
                      <div>${(item.qty * item.price)}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-header">Order Summary</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Items</span>
                    <span>${order.itemsPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>${order.shippingPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tax</span>
                    <span>${order.taxPrice}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${order.totalPrice}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default OrderDetailsScreen;
