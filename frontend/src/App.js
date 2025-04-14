import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import HomeScreen from './Screens/HomeScreen'
import './index.css'
import ProductScreen from './Screens/ProductScreen'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomeScreen/> } />
        <Route path=':id' element={<ProductScreen/>} />
        <Route path='*' element={<PageNotFound/> } />
      </Routes>
     
    </div>
  )
}

export default App