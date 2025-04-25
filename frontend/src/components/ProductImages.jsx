import React from 'react';

const ProductImages = () => {
  return (
    <div className="p-4 border border-black/20 shadow-xl rounded-[16px] mt-[98px] mb-[84px]">
      <h3 className="jomolhari-regular text-center text-[27px] mt-[18px] mb-[46px]">Product Images</h3>
      <div className="w-[302px] h-[302px] bg-gray-200 flex items-center justify-self-center rounded-[8px]">
        <span className='ml-[20%] text-[26px] itim-regular'>Click to upload</span>
      </div>
      <div className="flex space-x-2">
        <div className="w-[92px] h-[92px] mt-[29px] mb-[53px] bg-gray-200 rounded-[8px]"></div>
        <div className="w-[92px] h-[92px] mt-[29px] mb-[53px] bg-gray-200 rounded-[8px]"></div>
        <div className="w-[92px] h-[92px] mt-[29px] mb-[53px] bg-gray-200 rounded-[8px]"></div>
        <div className="w-[92px] h-[92px] mt-[29px] mb-[53px] bg-gray-200 rounded-[8px]"></div>
      </div>
    </div>
  );
};

export default ProductImages;