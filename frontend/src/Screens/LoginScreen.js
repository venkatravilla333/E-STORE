// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/slices/userApiSlice';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const { userInfo, loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container row mt-5 border border-2 w-50 p-4 m-auto'>
        <h4 className='text-center'>Login</h4>
        <div className='col-md-6 m-auto'>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='my-3 form-control'
          />
          <br />
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='form-control'
          />
          <br />
          <button
            type='submit'
            className='btn btn-dark my-3 w-50 d-block m-auto'
          >
            Login
          </button>
          <p className='text-center'>
            <Link to='/register'>New User ?</Link>
          </p>
          {/* {error && <p>{error}</p>}
      {userInfo && <p>Welcome {userInfo.name}</p>} */}
        </div>
      </div>
    </form>
  );
};

export default LoginScreen;
