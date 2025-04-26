export let updateCart = (state) => {
  state.itemsPrice = state.cartItems.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);

  state.shippingPrice = Number(state.itemsPrice < 100 ? 0 : 30);

  state.taxPrice = Number(state.itemsPrice * 0.1);

  state.totalPrice = Number(
    state.itemsPrice + state.shippingPrice + state.taxPrice
  );
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};
