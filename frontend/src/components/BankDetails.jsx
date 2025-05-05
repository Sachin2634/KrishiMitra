import React from 'react';

const BankDetails = () => {
  return (
    <div className='max-w-[69.44vw] w-[69vw] pl-[1.39vw] pt-[1.46vw] pr-[18.82vw] mb-8 pb-[3vw] ml-[9.03vw] mr-[9vw] border shadow-xl mt-[2vw]'>
      <div className='jomolhari-light text-[25px] mb-[2vw]'>Bank/ Payment Info</div>
      <div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <div className='text-[20px] joan-regular'>Bank Name</div>
          <input type="text" placeholder='Bank Name'
            className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
          <div className='text-[20px] joan-regular'>Account Holder Name</div>
          <input type="text" placeholder='Account Holder Name'
            className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
        <div>
          <div className='text-[20px] joan-regular'>IFSC Code</div>
          <input type="text" placeholder='IFSC Code'
            className='border-b-[1px] mr-[17.43vw] mb-[2.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        <div>
          <div className='text-[20px] joan-regular'>UPI ID</div>
          <input type="text" placeholder='UPI ID'
            className='border-b-[1px] mr-[17.43vw] joan-regular text-[17px] w-[15.90vw]'/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;