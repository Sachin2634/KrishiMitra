import React from 'react'

const Pricing_works = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start pl-[78px] pb-[85px] border-b-[2px]">
    <div className="md:w-[410px] mr-[170px] mb-6 md:mb-0">
      <h2 className="jomolhari-regular text-[53px] text-[#006A30] pt-[300px] font-semibold md:text-left">
        Why Our Pricing Works for You
      </h2>
    </div>
    <div className="mt-[80px] text-[32px] joan-regular">
      <div className="bg-green-500 text-white mb-[25px] p-[40px] pl-[55px] md:w-[695px] h-[131px] rounded-full">
        No listing fees
      </div>
      <div className="bg-green-500 text-white mb-[25px] p-[40px] pl-[55px] md:w-[695px] h-[131px] rounded-full">
        Instant payouts to bank accounts
      </div>
      <div className="bg-green-500 text-white mb-[25px] p-[25px] pl-[55px] md:w-[695px] h-[131px] rounded-full leading-tight">
        Lower commission compared to traditional middlemen
      </div>
      <div className="bg-green-500 text-white mb-[25px] p-[40px] pl-[55px] md:w-[695px] h-[131px] rounded-full">
        No hidden charges
      </div>
      <div className="bg-green-500 text-white p-[40px] pl-[55px] md:w-[695px] h-[131px] rounded-full">
        Flexible shipping options
      </div>
    </div>
  </div>
  )
}

export default Pricing_works