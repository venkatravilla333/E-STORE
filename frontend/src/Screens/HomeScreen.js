import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
// import products from '../products'
import Product from '../components/Product'
import axios from 'axios'
import Loader from '../components/Loader'

import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function HomeScreen() {

  // let [loading, setLoading] = useState(false)
  // let [products, setProducts] = useState([])
  // let [error, setError] = useState(null)
 let data = useSelector((state) => {
    return state.getAllProducts
  })
  let dispatch = useDispatch()
  useEffect(() => {
    // setLoading(true)
    // axios.get('/api/getAllProducts')
    //   .then((res) => {
    //     console.log(res.data)
    //     setLoading(false)
    //     setProducts(res.data)
    //   }).catch((err) => {
    //     console.log(err.message)
    //     setLoading(false)
    //     setError(err.message)
    //   })
   dispatch(getAllProducts())
  }, [])
  return (
    <div>
      <Header />
      <main className='container'>
        <div className='row'>
          {
            data.loading ? <Loader /> : data.error ? <h4>{data.error}</h4> : 
          
            data.products.map((product) => {
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