import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Header() {
  
 let cart = useSelector((state) => {
     return state.cartReducer
 })
  let {cartItems} = cart
  return (
    <header>
      <div className=''>
        
        <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div class='container-fluid'>
            <a class='navbar-brand' href='#'>
             E-Store
            </a>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div class='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto'>
                <li class='nav-item'>
                  <Link class='nav-link' aria-current='page' to='/cart'>
                    Cart 
                    {
                      cartItems.length > 0 && (
                        <span class="badge rounded-pill bg-primary">
                          {
                            cartItems.reduce((a, c) => {
                              return a+ c.qty
                            }, 0)
                          }
                        </span>
                      )
                    }
                  </Link>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
