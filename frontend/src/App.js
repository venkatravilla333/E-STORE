import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductDetails from './Screens/ProductDetails';
import PageNotFound from './Screens/PageNotFound';
import { store } from './redux/store';
import React from 'react';
import {Provider} from 'react-redux'
import Header from './components/Header';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
    <Provider store={store}>
      <Header />
       <Routes>
         <Route path='/' element={<HomeScreen />} />
         <Route path='/product/:id' element={<ProductDetails />} />
         <Route path='*' element={<PageNotFound />} />
         <Route path='/cart' element={<CartScreen />} />
       </Routes>
     </Provider>
  );
}

export default App;
