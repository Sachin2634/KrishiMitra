import React from 'react'

const SellerNavbar = () => {
  return (
    <div className='flex p-[43px] bg-green-500 items-center w-full '>
        <div id="logo" className='text-[40px] font-medium pl-[76px] pr-[169px]'>logo</div>
        <div className='flex text-[32px] text-white'>
        <div className='pr-[48px]'>Start</div>
        <div className='pr-[48px]'>Pricing</div>
        <div className='pr-[48px]'>FAQ</div>
        <div className=''>Contact Us</div>
        <div className='pr-[51px] pl-[105px]'>Login</div>
        </div>
        <button className='px-[28px] py-[10px] bg-[#006A30] text-[32px] text-white rounded-[22px]'>Start Selling</button>
    </div>
  )
}

export default SellerNavbar