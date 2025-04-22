
import {configureStore} from '@reduxjs/toolkit'
import getAllProducts from './slices/productSlice'
import cartSlice from './slices/cartSlice'


export let store = configureStore({
  reducer: {
    productsReducer: getAllProducts,
    cartReducer : cartSlice
  }
})