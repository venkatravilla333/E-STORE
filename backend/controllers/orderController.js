import OrderModel from "../models/orderModel.js";

let addOrderItems = async(req, res) => {

  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  console.log(req.body)

  // Validate required fields

  if (!orderItems || orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  }

   // Fix: Ensure each order item includes `product` field (ObjectId)
   const processedOrderItems = orderItems.map(item => ({
    ...item,
    product: item._id,
  }));

  const newOrder = {
    user: req.user._id, // Assumes req.user is populated from auth middleware
    orderItems: processedOrderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  };

  const createdOrder = await OrderModel.create(newOrder);
  res.status(201).json(createdOrder);
};
    

let getMyOrders = async(req, res) => {
  const orders = await OrderModel.find({ user: req.user._id });
  res.status(200).json(orders);
  
}

const getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id).populate('User', 'name email');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


let updateOrderToPaid = (req, res) => {
  res.send('update order to paid')
  
}
let updateOrderToDelivered = (req, res) => {
  res.send('update order to deliver')
  
}
let getOrders = (req, res) => {
  res.send('get all orders by admin')
  console.log('get all')
  
}

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};