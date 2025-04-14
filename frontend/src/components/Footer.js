import React from 'react'

function Footer() {
  let now = new Date()
  
  return (
     <footer className='footer-div'>
      E-Store &copy; Copy Right {now.getFullYear()}
    </footer>
  )
}

export default Footer