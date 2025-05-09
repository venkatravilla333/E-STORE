

let addOrderItems = (req, res) => {
  res.send('create order')
}
let getMyOrders = (req, res) => {
  res.send('my orders')
}

let getOrderById = (req, res) => {
  res.send('get order by id')
  
}

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