import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import Product from './Components/Product'
import Newsletter from './Components/Newsletter'
import MyFooter from './Components/MyFooter'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Newsletter />
      <MyFooter />
    </>
  )
}

export default App