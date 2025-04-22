
import {createSlice} from '@reduxjs/toolkit'



let initialState = localStorage.getItem('cart') ? JSON.stringify(localStorage.getItem('cart')) : {
  cartItems: []
}

let cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {}
})

export default cartSlice.reducer