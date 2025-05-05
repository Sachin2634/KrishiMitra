import React from 'react'
import Weatherclouds from '../assets/Group 66.png'
import locn from '../assets/Vector (4).png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
const Nav_Weather = () => {
  return (
    <div className='flex justify-between w-full h-[117px] bg-[#00CC5C] pl-[5.5vw] pr-[5.5vw]'>
        <div className='text-[40px] mt-[29px] inter-regular'>logo</div>
        <div className='flex justify-between inter-regular bg-white mt-[11px] rounded-[9.5px] w-[356px] h-[96px] pl-[14.24px] pr-[31.24px]'>
            <div className='mt-[17.8px]'>
                <div className='flex text-[28.5px] h-[38px] mb-[14.7px]'>
                    24 
                    <div className='text-[17.8px] flex items-end'>°C</div> 
                </div>
                <div className='whitespace-pre text-[#4f4f4f] text-[12.5px]'>
                    High 28    Low 22</div>
            </div>
            <div className='mt-[19px]'>
                <img src={Weatherclouds} alt="" />
            </div>
            <div>
                <div className='flex mt-[25.5px] text-[14.24px] mb-[15px]'>
                    <img src={locn} alt="" style={{width:'15.5px', height:'22px', marginRight:'4.75px'}}/>
                    Punjab
                </div>
                <div className='text-[11.3px]'>
                    Mostly Sunny
                </div>
            </div>
        </div>
        <div className='flex mt-[34px]'>
            <MdOutlineShoppingCart style={{color:'white', width:'48px', height:'48px'}} />
            <IoIosNotificationsOutline style={{color:'white', width:'48px', height:'48px', marginLeft:'51px'}} />
        </div>
    </div>
  )
}

export default Nav_Weather