import React from 'react';

const AddressDetails = () => {
  return (
    <div className='max-w-[69.44vw] w-[69vw] pl-[1.39vw] pt-[1.46vw] pr-[18.82vw] pb-[4.58vw] ml-[9.03vw] mr-[9vw] border shadow-xl mt-[2vw] mb-8'>
      <div className='jomolhari-light text-[30px] border-b-[1px] w-[18.21vw] mb-[3.05vw]'>Address Information</div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className='text-[25px] joan-regular'>Village name</div>
          <input type="text" placeholder='Village name'
            className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
          <div className='text-[25px] joan-regular'>Taluk/ District</div>
          <input type="text" placeholder='Taluk/ District'
            className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
          <div className='text-[25px] joan-regular'>State</div>
          <input type="text" placeholder='State'
            className='border-b-[1px] mr-[17.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
          <div className='text-[25px] joan-regular'>Pincode</div>
          <input type="text" placeholder='Pincode'
            className='border-b-[1px] mr-[17.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;