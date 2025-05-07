import React from 'react'
import SearchProducts from '../components/SearchProducts'
import Footer from '../components/Footer'
import ConsumerNavbar from '../components/ConsumerNavbar'
import ConsumerSideBar from '../components/ConsumerSideBar'

const ConsumerSearch = () => {
  return (
    <div>
        <ConsumerNavbar/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><ConsumerSideBar/></div>
            <SearchProducts/>
        </div>
        <Footer/>
    </div>
  )
}

export default ConsumerSearch