
import {configureStore} from '@reduxjs/toolkit'
import  getAllProducts  from './slices/productSlice'

export let store = configureStore({
  reducer: {
    getAllProducts: getAllProducts
  }
})