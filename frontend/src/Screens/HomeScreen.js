import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'


function HomeScreen() {

  let [products, setProducts] = useState([])
  
  useEffect(() => {
    axios.get('/api/products')
      .then((res) => {
        setProducts(res.data)
      })
  }, [])
  return (
    <div>
      <Header />
      <main className='container'>
        <div className='row'>
         {
          products.map((product) => {
            return <div className='d-flex justify-content-center col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
                       <Product product={product} />
                   </div>
          })
          }
           </div>
      </main>
      <Footer/>
    </div>
  )
}

export default HomeScreen