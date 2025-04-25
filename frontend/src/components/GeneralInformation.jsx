import React from 'react';

const GeneralInformation = () => {
  return (
    <div className="border border-black/20 shadow-xl rounded-[16px] mb-[43px]">
      <h3 className="jomolhari-regular ml-[24px] mt-[21px] mb-[27px] text-[24px]">General Information</h3>
      <div className="">
        <label className='ml-[32px] mb-[2px] joan-regular text-[24px]'>Product Name</label>
        <input type="text" className="w-[432px] h-[53px] ml-[25px] border border-black/50 shadow-xl rounded-[8px] p-2 joan-regular text-[20px]" placeholder="Product Name" />
      </div>
      <div className="mt-[46px]">
        <label className='ml-[32px] mb-[2px] joan-regular text-[24px]'>Quality Available</label>
        <input type="text" className="w-[432px] h-[53px] ml-[25px] border border-black/50 shadow-xl rounded-[8px] p-2 joan-regular text-[20px]" placeholder="In Kg/gm" />
      </div>
      <div className="mt-[46px]">
        <label className='ml-[32px] mt-[46px] mb-[2px] joan-regular text-[24px]'>Location</label>
        <input type="text" className="w-[432px] h-[53px] ml-[25px] border border-black/50 shadow-xl rounded-[8px] p-2 joan-regular text-[20px]" placeholder="Location/Village name" />
      </div>
      <div className="mt-[46px]">
        <label className='ml-[32px] mt-[46px] mb-[28px] joan-regular text-[24px]'>Product Description</label>
        <textarea className="w-[432px] h-[141px] ml-[25px] mb-[77px] border border-black/50 shadow-xl rounded-[8px] p-2 joan-regular text-[20px]" placeholder="Describe the product"></textarea>
      </div>
    </div>
  );
};

export default GeneralInformation;