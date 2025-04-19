
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import ProductDetails from './Screens/ProductDetails'
import PageNotFound from './Screens/PageNotFound'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default App