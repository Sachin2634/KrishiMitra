import React from 'react'
import ConsumerHomeNav from '../components/ConsumerHomeNav'
import SearchProducts from '../components/SearchProducts'
import Footer from '../components/Footer'

const ConsumerHomepage = () => {
  return (
    <div>
         <ConsumerHomeNav/>
        <div className='flex'>
            {/* <div className='bg-[#00cc5c]'><ConsumerSideBar/></div> */}
            <SearchProducts/>
        </div>
        <Footer/>
    </div>
  )
}

export default ConsumerHomepage