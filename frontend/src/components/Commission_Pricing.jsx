import React from 'react'
import comm_img from '../assets/image (6).png'
import pricingtable from '../assets/Group 23.png'
import CommissionTable from './CommisionTable'
const Commission_Pricing = () => {
  return (
    <div>
        <div className='flex pt-[153px] pl-[20px] md:pl-[78px]'>
            <div className='jomolhari-regular text-[45px] md:text-[92px] text-[#006A30] mr-[100px] md:mr-[215px]'>
                Commision Rate
            </div>
            <div>
                <img src={comm_img} alt="" className='w-[60%] md:w-[100%]'/>
            </div>
        </div>
        
            <img src={pricingtable} alt="" className='ml-[20px] md:ml-[71px] '/>
        {/* <CommissionTable/> */}
    </div>
  )
}

export default Commission_Pricing