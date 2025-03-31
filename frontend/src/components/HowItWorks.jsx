import React from 'react'
import numberline from '../assets/Group 18 (1).png' 
import Stepper from './Stepper'

const HowItWorks = () => {
  return (
    <div className='pb-[240px]'>
        <div className='pt-[80px] pb-[180px] jomolhari-regular text-[51px] text-[#006A30] font-black  text-center'>How It Works</div>
        <div className='flex'>
            <div className='ml-[25px] mr-[222px]'>
                <div className='itim-regular text-[24px]'>Create Account</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[256px] h-auto pl-[6px] pr-[12px] pt-[2px] pb-[6px] text-[12px] leading-tight'>
                    All you need is :
                    <ul className='list-disc list-inside'>
                        <li>GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)</li>
                        <li>Bank Account</li>
                    </ul>
                    </div>
            </div>
            <div className='mr-[245px]'>
                <div className='itim-regular text-[24px]'>Get Orders</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[256px] h-[61px] pl-[6px] pr-[27px] pt-[8px] pb-[6px] text-[12px] leading-loose'>
                Start getting orders from crores of customers actively shopping on our platform.
                </div>
            </div>
            <div>
                <div className='itim-regular text-[24px]'>Learning Hub</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[212px] h-[61px] pl-[5px] pr-[10px] pt-[4px] pb-[10px] text-[12px]'>
                Our platform provides a community learning enviroment for better yield and more sustainability.
                </div>
            </div>
        </div>
        <Stepper/>
        <div className='flex'>
            <div className='ml-[258px] mr-[222px]'>
                <div className='itim-regular text-[24px]'>List Products</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[256px] h-[61px] pl-[3px] pr-[9px] pt-[12px] pb-[18px] text-[12px] leading-tight'>
                List the products you want to sell to your expected customers or distributors.
                    </div>
            </div>
            <div className='mr-[245px]'>
                <div className='itim-regular text-[24px]'>Rent Farm Equipments</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[256px] h-[61px] pl-[6px] pr-[7px] pt-[8px] pb-[22px] text-[12px] leading-tight'>
                Start getting farming community equipments at a really low cost.
                </div>
            </div>
            <div>
                <div className='itim-regular text-[24px]'>Receive Payments</div>
                <div className='joan-regular bg-[#00CC5C] text-white w-[212px] h-auto pl-[5px] pr-[0px] pt-[7px] pb-[7px] text-[12px]'>
                Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery.
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks