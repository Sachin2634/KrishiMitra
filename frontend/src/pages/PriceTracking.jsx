import React from 'react'
import Dash_Sidebar from '../components/Dash_Sidebar'
import Tracking from '../components/Tracking'
import Footer from '../components/Footer'

const PriceTracking = () => {
  return (
    <>
        <div className='flex'>
            <Dash_Sidebar/>
            <div className='w-full'>
                <div className='w-full flex justify-center items-center bg-[#acacac] h-[135px] inter-regular text-[40px]'>logo</div>
                <div>
                    <Tracking/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default PriceTracking