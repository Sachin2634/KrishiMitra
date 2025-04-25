import React from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import Img1 from '../assets/Vector 3.png'; // Update with the correct path to your image

const SalesAnalysis = () => {
  return (
    <div className='w-[663px] h-[243px] ml-[43px] mr-[44px] mt-[16px] shadow-xl border border-black/10'>
      <div className='flex flex-row'>
        <div className='pl-[225px] pr-[114px] pt-[5px] jomolhari-regular text-[23px] text-[#006A30]'>
          Sales Analysis
        </div>
        <div className='flex flex-row pt-[13px] text-[18px] joan-regular'>
          <IoMdArrowDropdownCircle
            style={{
              color: "#006A30",
              transform: "translate(0, 5px)",
              marginRight: "5px",
              cursor: "pointer"
            }}
          />
          Sales this week
        </div>
      </div>
      {/* GraphBox */}
      <div className='mt-[71px] ml-[84px]'>
        <img src={Img1} alt="Graph" />
      </div>
    </div>
  );
};

export default SalesAnalysis;