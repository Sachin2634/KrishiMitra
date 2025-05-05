import React from 'react'
import Products from '../components/Products'
import Nav_Weather from '../components/Nav_Weather'
import Footer from '../components/Footer'
import Dash_Sidebar from '../components/Dash_Sidebar'
const YourProducts = () => {
  return (
    <div>
        <Nav_Weather/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><Dash_Sidebar/></div>
            <Products/>
        </div>
        <Footer/>
    </div>
  )
}

export default YourProducts