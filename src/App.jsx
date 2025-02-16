import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Service/Service'
import Banner from './Components/Banner/Banner'
import Appstore from './Components/Appstore/Appstore'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className=' bg-gray-900'>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <Appstore/>
      <Footer/>
    </div>
  )
}

export default App