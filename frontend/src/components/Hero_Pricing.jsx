import React from 'react'
import '../index.css';
import pricinghero from '../assets/image (5).png';
import { Link } from 'react-router';

const Hero_Pricing = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] flex flex-col md:flex-row mb-[25px]">
      <div className="p-4 md:p-[80px] md:pr-[15vw]">
        <div className="jomolhari-regular text-[28px] md:text-[51px] text-[#006A30] font-black w-full md:w-[476px] h-auto md:h-[140px] mb-[77px]">
        Transparent Pricing, Maximum Profits!
        </div>
        <div className="joan-regular mt-4 md:mt-[49px] w-full md:w-[627px] h-auto md:h-[120px] text-[18px] md:text-[31px]">
        Know how much you earn with every sale. No hidden fees, just fair and transparent commissions.
        </div>
        <Link to ='/signup'>
        <button className="jomolhari-light mt-6 md:mt-[59px] p-4 md:p-[10px] md:pl-[40px] md:pr-[40px] bg-[#006A30] text-[20px] md:text-[40px] text-white rounded-[30px] md:rounded-[22px] cursor-pointer">
          Start Selling
        </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={pricinghero} alt="Herosecn_img" className="w-0 md:w-auto" />
      </div>
    </div>
  )
}

export default Hero_Pricing