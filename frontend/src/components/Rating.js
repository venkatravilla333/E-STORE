import React from 'react'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
function Rating({value, text}) {
  return (
    <div>
      <span className='text-warning'>{value >=1 ? <FaStar/> : value >=0.5 ? <FaStarHalfAlt/> : <FaRegStar/> }</span>
      <span className='text-warning'>{value >=2 ? <FaStar/> : value >=1.5 ? <FaStarHalfAlt/> : <FaRegStar/> }</span>
      <span className='text-warning'>{value >=3 ? <FaStar/> : value >=2.5 ? <FaStarHalfAlt/> : <FaRegStar/> }</span>
      <span className='text-warning'>{value >=4 ? <FaStar/> : value >=3.5 ? <FaStarHalfAlt/> : <FaRegStar/> }</span>
      <span className='text-warning'>{value >=5 ? <FaStar/> : value >=4.5 ? <FaStarHalfAlt/> : <FaRegStar/> }</span>
      <span className='mx-3'>{`${text && text} Reviews`}</span>
    </div>
  )
}

export default Rating