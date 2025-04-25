import React from 'react'
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Img1 from "../assets/Vector 3.png"
import RecentOrders from './RecentOrders';
import SalesAnalysis from './SalesAnalysis';
import TopPerformingProd from './TopPerformingProd';
import ProductPerformance from './ProductPerformance';
import Announcement from './Announcement';
const Dashboarddataboxes = () => {


  return (
    <div>
        <div className='text-[40px] ml-[443px] inter-regular pt-[41px]'>logo</div>
        <div className='ml-[82px] mt-[50px] flex'>
        <div className='bg-[#00cc5c] w-[197px] h-[114px] pr-[16px] mr-[74px] pl-[17px] pt-[7px] text-white flex'>
            <div className='mr-[15px]'>
                <div className='jomolhari-light text-[18px] mb-[3px]'>Total Sales</div>
                <div className='joan-regular text-[18px] mb-[19px]'>₹10,000</div>
                <div className='joan-regular text-[18px]'>15% Last Week</div>
            </div>
            
            <div className='bg-grey rounded-full w-[36px] h-[36px] bg-black/40'>
                {/* <img src="" alt="img" /> */}
            </div>
        </div>
        <div className='bg-[#00cc5c] w-[197px] h-[114px] pr-[16px] mr-[74px] pl-[17px] pt-[7px] text-white flex'>
            <div className='mr-[15px]'>
                <div className='jomolhari-light text-[18px] mb-[3px]'>Total Sales</div>
                <div className='joan-regular text-[18px] mb-[19px]'>₹10,000</div>
                <div className='joan-regular text-[18px]'>15% Last Week</div>
            </div>
            
            <div className='bg-grey rounded-full w-[36px] h-[36px] bg-black/40'>
                {/* <img src="" alt="img" /> */}
            </div>
        </div>
        <div className='bg-[#00cc5c] w-[197px] h-[114px] pr-[16px] mr-[74px] pl-[17px] pt-[7px] text-white flex'>
            <div className='mr-[15px]'>
                <div className='jomolhari-light text-[18px] mb-[3px]'>Total Sales</div>
                <div className='joan-regular text-[18px] mb-[19px]'>₹10,000</div>
                <div className='joan-regular text-[18px]'>15% Last Week</div>
            </div>
            
            <div className='bg-grey rounded-full w-[36px] h-[36px] bg-black/40'>
                {/* <img src="" alt="img" /> */}
            </div>
        </div>
        <div className='bg-[#00cc5c] w-[197px] h-[114px] pr-[16px] mr-[74px] pl-[17px] pt-[7px] text-white flex'>
            <div className='mr-[15px]'>
                <div className='jomolhari-light text-[18px] mb-[3px]'>Total Sales</div>
                <div className='joan-regular text-[18px] mb-[19px]'>₹10,000</div>
                <div className='joan-regular text-[18px]'>15% Last Week</div>
            </div>
            
            <div className='bg-grey rounded-full w-[36px] h-[36px] bg-black/40'>
                {/* <img src="" alt="img" /> */}
            </div>
        </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
        <SalesAnalysis/>
        <RecentOrders/>
        </div>
        
        
        
        {/* Top Performing Products */}
        <div>
        <TopPerformingProd/>
        <ProductPerformance/>
        <Announcement/>
        </div>
        </div>  
    </div>
    
  )
}

export default Dashboarddataboxes