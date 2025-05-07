import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { user } = useSelector((state) => state.authReducer);
  
 
    return user?.user?.name ? <Outlet/> : <Navigate to='/login'/>
  
}

export default PrivateRoute