import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './Screens/PageNotFound'
import HomeScreen from './Screens/HomeScreen'
import './index.css'
// import ProductScreen from './Screens/ProductScreen'
import ProductDetails from './Screens/ProductDetails'
// import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/> } />
        <Route path='*' element={<PageNotFound/> } />
        <Route path='/product/:id' element={<ProductDetails/> } />
      </Routes>
     
    </div>
  )
}

export default App