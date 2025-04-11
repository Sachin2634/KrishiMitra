// 

import React from 'react';
import '../index.css';
import Img from '../assets/Mask group (2).png';
import { Link } from 'react-router';

const HeroSection = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] flex flex-col md:flex-row pb-[25px] border-b-[2px]">
      <div className="p-4 md:p-[80px] md:pr-[15vw]">
        <div className="jomolhari-regular text-[28px] md:text-[51px] text-[#006A30] font-black w-full md:w-[456px] h-auto md:h-[158px]">
          Begin your Journey with KrishiMitra
        </div>
        <div className="joan-regular mt-4 md:mt-[49px] w-full md:w-[334px] h-auto md:h-[152px] text-[18px] md:text-[31px]">
          “Your Gateway to Fair Prices, Direct Market Access, and a Brighter Future in Farming!"
        </div>
        <Link to ='/signup'>
        <button className="jomolhari-light mt-6 md:mt-[70px] p-4 md:p-[10px] md:pl-[40px] md:pr-[40px] bg-[#006A30] text-[20px] md:text-[40px] text-white rounded-[30px] md:rounded-[22px] cursor-pointer">
          Start Selling
        </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <img src={Img} alt="Herosecn_img" className="w-0 md:w-auto" />
      </div>
    </div>
  );
};

export default HeroSection;