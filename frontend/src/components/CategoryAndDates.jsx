import React from 'react';

const CategoryAndDates = () => {
  return (
    <div className="mb-4">
      <div className='pl-[23px] pt-[17px] rounded-[16px]  border border-black/20 shadow-xl'>
      <h3 className="jomolhari-regular text-[23px]">Category</h3>
      <select className="w-[357px] h-[44px] border border-black/20 shadow-xl rounded-[12px] p-2 mb-2">
        <option>Select</option>
        <option>Fresh Product</option>
        <option>Dairy & Poultry</option>
        <option>Grain & Pulses</option>
        <option>Processed Goods</option>
        <option>HandiCrafts</option>
      </select>
      <button className="bg-[#00CC5C] w-[179px] h-[35px] text-white rounded-[34px] text-[23px] joan-regular p-2 pt-0 mt-[41px] mb-[31px]">Add Category</button>
      </div>
      <div className='border border-black/20 rounded-[16px] shadow-xl mt-[55px] pt-[31px] pb-[62px]'>
      <div className='flex'>
      <div className='ml-[23px] mr-[60px]'>
      <h3 className="joan-dark text-[21px] mb-[22px]">Date of Harvesting</h3>
      <div className="flex w-[150px] h-[36px] space-x-[22px] py-[2px] bg-[#00CC5C] justify-center rounded-[3px]">
        <input type="text" className="w-[27px] h-[32px] bg-white border border-black/50 text-[12px] inter-regular text-center" placeholder="DD" />
        <input type="text" className="w-[27px] h-[32px] bg-white border border-black/50 text-[12px] inter-regular text-center" placeholder="MM" />
        <input type="text" className="w-[27px] h-[32px] bg-white border border-black/50 text-[12px] inter-regular text-center" placeholder="YY" />
      </div>
      </div>
      <div className=''>
      <h3 className="joan-dark text-[21px] mb-[22px]">Date of Expiry</h3>
      <div className="flex w-[150px] h-[36px] space-x-[22px] py-[2px] bg-[#00CC5C] justify-center rounded-[3px]">
        <input type="text" className="w-[27px] h-[32px] border bg-white border-black/50 text-[12px] inter-regular text-center" placeholder="DD" />
        <input type="text" className="w-[27px] h-[32px] border bg-white border-black/50 text-[12px] inter-regular text-center" placeholder="MM" />
        <input type="text" className="w-[27px] h-[32px] border bg-white border-black/50 text-[12px] inter-regular text-center" placeholder="YY" />
      </div>
      </div>
      </div>
      <div className='itim-regular text-[16px] ml-[43px] mt-[22px]'>Select the right date to ensure product freshness.</div>
      
      </div>
    </div>
  );
};

export default CategoryAndDates;