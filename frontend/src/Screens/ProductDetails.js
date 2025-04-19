import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'
import axios from 'axios'

function ProductDetails() {
  let { id } = useParams()
  console.log(id)

  // let product = products.find((product) => {
  //   return product._id === id
  // })

  // console.log(product)

   let [product, setProduct] = useState({})
  
  useEffect(() => {
    axios.get(`/api/products/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
  }, [])

  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-6 border border-2'>
          <img src={product.image} alt="" />
        </div>
        <div className='col-6 border border-2'>
          <h5>Name: {product.name}</h5>
          <h5>Price: { product.price}</h5>
          <h5>Rating: { product.rating}</h5>
          <h5>In stock: {product.stock}</h5>
        </div>
       </div>
    </div>
  )
}

export default ProductDetails