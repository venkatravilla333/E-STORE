// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../redux/slices/userApiSlice';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  // const { userInfo, loading, error } = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    } 
    dispatch(register({ name, email, password }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container row mt-5 border border-2 w-50 p-4 m-auto'>
        <h4 className='text-center'>Register</h4>
        <div className='col-md-6 m-auto'>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            className='my-3 form-control'
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='my-3 form-control'
          />
          <input
            value={password}
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='form-control'
          />
          <input
            value={confirmPassword}
            type='password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='confirmPassword'
            className='form-control my-3'
          />
          <button
            type='submit'
            className='btn btn-dark my-3 w-50 d-block m-auto'
          >
            Register
          </button>
          <p className='text-center'>
            <Link to='/login'>Already having account ?</Link>
          </p>
          {/* {error && <p>{error}</p>}
      {userInfo && <p>Welcome {userInfo.name}</p>} */}
        </div>
      </div>
    </form>
  );
};

export default RegisterScreen;
