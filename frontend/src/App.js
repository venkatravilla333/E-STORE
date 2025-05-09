import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductDetails from './Screens/ProductDetails';
import PageNotFound from './Screens/PageNotFound';
import { store } from './redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import CartScreen from './Screens/CartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/cart' element={<CartScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='' element={<PrivateRoute />}>
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/placeorder' element={<PlaceOrderScreen />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
