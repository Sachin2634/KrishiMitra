import React from 'react';

const ProductPricing = () => {
  return (
    <div className="p-4 border border-black/20 shadow-xl rounded-[16px] mb-[43px]">
      <h3 className="jomolhari-regular ml-[9px] mb-[43px] text-[28px]">Pricing</h3>
      <div className="flex space-x-2">
        <div className='w-1/3 '>
        <div className='text-center ml-[52px] inter-regular text-[21px] mb-[17px]'>Base Price</div>
        <input type="text" className="w-full border border-black/50 rounded-[16px] ml-[27px] mb-[17px] p-2 shadow-xl h-[50px]" />
        </div>
        <div className='w-1/3'>
        <div className='text-center ml-[119px] inter-regular text-[21px] mb-[17px]'>Discount</div>
        <input type="text" className="w-full border border-black/50 rounded-[16px] ml-[83px] mb-[17px] p-2 shadow-xl h-[50px]" />
        </div>
      </div>
      <div className="flex space-x-2 mt-2">
      <div className='w-1/3 '>
      <div className='w-full text-center ml-[27px] inter-regular text-[21px] mb-[17px]'>Price Per unit</div>
        <input type="text" className="w-full border border-black/50 rounded-[16px] ml-[27px] mb-[25px] p-2 shadow-xl h-[50px]"  />
      </div>
      <div className='w-1/3'>
        <div className='w-full text-center ml-[84px] inter-regular text-[21px] mb-[17px]'>Market Price</div>
        <input type="text" className="w-full border border-black/50 rounded-[16px] ml-[83px] mb-[25px] p-2 shadow-xl h-[50px]" />
      </div>
      </div>
    </div>
  );
};

export default ProductPricing;