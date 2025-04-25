import React, { useState } from 'react';

const ModeOfDelivery = () => {
  const [selected, setSelected] = useState(''); // default selected option

  return (
    <div className="p-4 border border-black/20 shadow-xl rounded-[16px] mb-[51px]">
      <h3 className="jomolhari-regular ml-[9px] mt-[24px] mb-[22px] text-[28px]">Mode of Delivery</h3>

      <div
        className="flex items-center ml-[9px]  mb-[16px] cursor-pointer"
        onClick={() => setSelected('partner')}
      >
        <span
          className={`w-4 h-4 rounded-full mr-2 ${
            selected === 'partner' ? 'bg-green-500' : 'bg-gray-300'
          }`}
        ></span>
        <span className='ml-[22px] text-[21px] inter-regular'>Our Delivery Partner</span>
      </div>

      <div
        className="flex items-center ml-[9px] cursor-pointer"
        onClick={() => setSelected('self')}
      >
        <span
          className={`w-4 h-4 rounded-full mr-2 ${
            selected === 'self' ? 'bg-green-500' : 'bg-gray-300'
          }`}
        ></span>
        <span className='ml-[22px] text-[21px] inter-regular'>Self Delivery</span>
      </div>
    </div>
  );
};

export default ModeOfDelivery;
