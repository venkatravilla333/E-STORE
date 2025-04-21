import React from 'react'

function Loader() {
  return (
    <div className='d-flex justify-content-center'>
     <div class="spinner-border row" role="status">
     <span class="visually-hidden">Loading...</span>
    </div>
    </div>
  )
}

export default Loader