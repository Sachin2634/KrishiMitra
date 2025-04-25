import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const TopPerformingProd = () => {
  return (
    <div className='w-[380px] h-[330px] ml-[108px] mt-[16px] shadow-xl border border-black/10'>
      <div className='pl-[17px] pt-[15px] jomolhari-regular text-[23px] text-[#006A30]'>
        Top Performing Products
      </div>
      {/* ITEMS */}
      <div className='mt-[37px]'>
        {[1, 2, 3].map((item, index) => (
          <div key={index} className='flex flex-row mb-[14px]'>
            <div className='w-[48px] h-[48px] bg-black/40 rounded-full ml-[22px] mr-[18px]'></div>
            <div className='joan-regular mr-[152px]'>
              <div className='text-[20px]'>Wheat</div>
              <div className='text-[12px]'>Avg 10kg</div>
            </div>
            <div className='joan-regular'>
              <div className='text-[20px]'>550</div>
              <div className='text-[12px]'>10kg</div>
            </div>
          </div>
        ))}
        <div className='flex justify-center'>
          <button className='bg-[#006A30] text-white itim-regular flex flex-row rounded-[7px] pl-[13px] pt-[7px] pb-[7px] pr-[7px] cursor-pointer'>
            View More <FaArrowRight style={{ transform: "translate(0, 5px)", marginLeft: "12px", cursor: "pointer" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPerformingProd;