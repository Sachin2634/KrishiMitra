import React from 'react';

const Announcement = () => {
  return (
    <div className="bg-[#00CC5C] pl-[19px] pt-[14px] w-[380px] h-[154px] ml-[108px] mt-[16px] shadow-xl border border-black/10">
      <h2 className="text-white jomolhari-regular text-[26.92px]">Announcement</h2>
      <ul className="text-black joan-regular text-[21.92px] list-disc list-inside ml-[6px] mt-[9px]">
        <li>Farming Tips for April</li>
        <li className='mt-[12px]'>You have new message</li>
      </ul>
    </div>
  );
};

export default Announcement;