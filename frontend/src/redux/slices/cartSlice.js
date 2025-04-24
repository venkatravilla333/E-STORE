
import {createSlice} from '@reduxjs/toolkit'



let initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
  cartItems: []
  
}

let cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      let item = action.payload;
      console.log(item)
     let existingItem = state.cartItems.find((x)=> x._id === item._id)
      if (existingItem) {
        state.cartItems = state.cartItems.map((x) => {
        return x._id === existingItem._id ? item : x
       })
      } else {
        state.cartItems = [...state.cartItems, item]
      };
      state.itemsPrice = state.cartItems.reduce((acc, item) => {
        return acc + (item.price * item.qty)
      }, 0);
      
      state.shippingPrice = Number(state.itemsPrice < 100 ? 0 : 30);
      state.taxPrice = Number(state.itemsPrice * 0.1)

      state.totalPrice = Number(
        (state.itemsPrice) + (state.shippingPrice) + (state.taxPrice)
      )
      localStorage.setItem('cart', JSON.stringify(state));
    }
  }
})
 export let {addToCart} = cartSlice.actions

export default cartSlice.reducer