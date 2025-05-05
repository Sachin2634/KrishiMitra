import React from 'react'
import Nav_Weather from '../components/Nav_Weather'
import Dash_Sidebar from '../components/Dash_Sidebar'
import KrishiLearn from '../components/KrishiLearn'
import Footer from '../components/Footer'
const Blogs = () => {
  return (
    <div>
        <Nav_Weather/>
        <div className='flex'>
            <div className='bg-[#00cc5c]'><Dash_Sidebar/></div>
            <KrishiLearn/>
        </div>
        <Footer/>
    </div>
  )
}

export default Blogs