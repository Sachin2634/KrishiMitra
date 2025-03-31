// src/Stepper.js
import React from 'react';

const Stepper = () => {
  return (
    <div className="flex items-center ml-[79px] mt-[4px]">
      {[1, 2, 3, 4, 5, 6].map((step, index) => (
        <div key={index} className="flex items-center">
          <div className="flex justify-center items-center w-[46px] h-[46px] bg-white border-3 border-green-500 rounded-full text-[24px]">
            {step}
          </div>
          {index < 5 && <div className="w-[201px] h-[3px] bg-green-500"></div>}
        </div>
      ))}
    </div>
  );
};

export default Stepper;