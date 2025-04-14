import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

function HomeScreen() {
  return (
    <div className='container-div'>
      <Header />
      <div className='main-div'>
      <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeScreen