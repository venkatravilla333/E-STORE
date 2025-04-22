import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../redux/slices/productSlice';
import Loader from '../components/Loader';

function ProductDetails() {
  let { id } = useParams();
  console.log(id);

  // let product = products.find((product) => {
  //   return product._id === id
  // })

  // console.log(product)

  //  let [product, setProduct] = useState({})
  
  let data = useSelector((state) => {
            return  state.productsReducer;
  });
  let dispatch = useDispatch();

  useEffect(() => {
    // axios.get(`/api/getSingleProducts/${id}`)
    //   .then((res) => {
    //     setProduct(res.data)
    //   })
    dispatch(getSingleProduct(id));
  }, []);

  return (
    <div className='container my-5'>
      <div className='row'>
        {data.loading ? (
          <Loader />
        ) : data.error ? (
          <h3>{data.error}</h3>
        ) : (
          <>
            <div className='col-6 border border-2'>
              <img src={data.product.image} alt='' />
            </div>
            <div className='col-6 border border-2'>
              <h5>Name: {data.product.name}</h5>
              <h5>Price: {data.product.price}</h5>
              <h5>Rating: {data.product.rating}</h5>
              <h5>In stock: {data.product.stock}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
