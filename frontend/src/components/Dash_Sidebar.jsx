import React from 'react'
import { Link } from 'react-router'

const Dash_Sidebar = () => {
  return (
    <div className='bg-[#00CC5C] w-[230px] h-[1035px] pl-[10px] mr-0 flex flex-col flex-shrink-0'>
        <div className='text-[black] text-[36px] mb-[33px] mt-[43px] jomolhari-light'>Menu</div>
        <Link to ='/dashboard'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light'>Dashboard</div>
        </Link>
        <Link to ='/blogs'>
        <div className='text-[rgb(255,255,255)] text-[30px] mb-[52px] jomolhari-light'>Blogs</div>
        </Link>
        <Link to ='/product'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light w-[230px]'>My product</div>
        </Link>
        <Link to ='/pricetracking'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light'>Pricing Tracking</div>
        </Link>
        <Link to ='/rental'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light'>Rent Equipments</div>
        </Link>
        <Link to ='/account'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light'>Account Settings</div>
        </Link>
        <Link to ='/'>
        <div className='text-[white] text-[30px] mb-[52px] jomolhari-light'>Sign Out</div>
        </Link>
    </div>
  )
}

export default Dash_Sidebar