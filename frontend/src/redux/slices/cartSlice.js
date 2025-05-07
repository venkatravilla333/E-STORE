
import {createSlice} from '@reduxjs/toolkit'
import { updateCart } from '../../Utils/cartUtils';



let initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {
  cartItems: [],
  shippingAddress: {},
  itemsPrice: 0,
  shippingPrice: 0,
  taxPrice: 0,
  totalPrice: 0
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
     return updateCart(state)
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => {
        return x._id !== action.payload
      })
       return updateCart(state)
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload
      return updateCart(state)
    }
     
  }
})
 export let {addToCart, removeFromCart, saveShippingAddress} = cartSlice.actions

export default cartSlice.reducer