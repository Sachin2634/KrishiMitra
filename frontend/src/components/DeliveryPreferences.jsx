import React, { useState } from 'react';

const DeliveryPreferences = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className='max-w-[69.44vw] w-[69vw] pl-[1.39vw] pt-[1.46vw] pr-[18.82vw] pb-[2vw] ml-[9.03vw] mr-[9vw] border shadow-xl'>
      {/* Heading */}
      <div className='jomolhari-light text-[30px] border-b-[1px] w-[19vw] mb-[2vw]'>
        Delivery Preferences
      </div>
      <div className='mt-[1vw]'>
        {/* Option 1 */}
        <label className='flex items-center mb-[2vw] cursor-pointer'>
          <input
            type="radio"
            name="delivery"
            value="partner"
            checked={selectedOption === 'partner'}
            onChange={() => setSelectedOption('partner')}
            className="hidden"
          />
          <span
            className={` w-[2.08vw] h-[2.08vw] mr-[1.2vw] rounded-full border-2 border-gray-400 
            flex items-center justify-center 
            ${selectedOption === 'partner' ? 'border-blue-500' : ''}`}
            >
            {selectedOption === 'partner' && (
              <span className="block w-[1.1vw] h-[1.1vw] rounded-full bg-blue-500"></span>
            )}
          </span>
          <span className='text-[22px] joan-regular text-gray-700'>Our Delivery Partner</span>
        </label>

        {/* Option 2 */}
        <label className='flex items-center mb-[2vw] cursor-pointer'>
          <input
            type="radio"
            name="delivery"
            value="self"
            checked={selectedOption === 'self'}
            onChange={() => setSelectedOption('self')}
            className="hidden"
          />
          <span
            className={`block w-[2.08vw] h-[2.08vw] mr-[1.2vw] rounded-full border-2 border-gray-400 
            flex items-center justify-center
            ${selectedOption === 'self' ? 'border-blue-500' : ''}`}
            >
            {selectedOption === 'self' && (
              <span className="block w-[1.1vw] h-[1.1vw] rounded-full bg-blue-500"></span>
            )}
          </span>
          <span className='text-[22px] joan-regular text-gray-700'>Self Delivery</span>
        </label>

        {/* Note */}
        <div className="mt-[1vw] ml-[3vw]">
          <span className='text-[20px] joan-regular text-gray-600'>Nearest Collection Center </span>
          <span className='text-[20px] joan-regular text-gray-500'>(If Applicable)</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPreferences;