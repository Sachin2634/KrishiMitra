import React from 'react'
import SearchProducts from '../components/SearchProducts'
import Nav_Weather from '../components/Nav_Weather'
import Footer from '../components/Footer'
import Dash_Sidebar from '../components/Dash_Sidebar'

const ConsumerSearch = () => {
  return (
    <div>
        <Nav_Weather/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><Dash_Sidebar/></div>
            <SearchProducts/>
        </div>
        <Footer/>
    </div>
  )
}

export default ConsumerSearch