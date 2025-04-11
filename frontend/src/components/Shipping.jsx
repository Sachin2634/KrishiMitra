import React from 'react'

const Shipping = () => {
  return (
    <div className='pt-[107px] pl-[20px] md:pl-[78px] pb-[113px] border-b-[2px] bor'>
        <div className='jomolhari-regular text-[45px] md:text-[92px] text-[#006A30]'>Shipping cost</div>
        <div className='flex'>
            <div
                className='w-[500px] h-[168px] mt-[185px] mr-[128px] itim-regular text-[35px] text-[#00CC5C]'
            >Sellers can choose between KrishiMitra Logistics (integrated shipping) or their own delivery methods. </div>
            <div className='w-[330px] h-[686px] bg-[#00CC5C]/70 rounded-[53px] pl-[15px] pr-[15px] pt-[27px] pb-[71px] joan-regular mr-[84px]'>
                <div className='text-center text-[25px]'>KrishiMitra Logistics (Recommended) </div>
                <div>
                    <ol className='list-decimal list-inside ml-[27px] mt-[27px] mb-[71px]'>
                        <li className='text-[20px]'>
                            <u><span className='text-[23px]'>Standard Shipping:</span></u>
                            <h3>• ₹40 per order (5-7 days)</h3>  
                        </li>
                        <li className='text-[20px]'>
                            <u><span className='text-[23px]'>Express Shipping: </span></u>
                            <h3>• ₹80 per order (2-3 days)</h3>  
                        </li>
                        <li className='text-[20px]'>
                            <u><span className='text-[23px]'>Bulk Shipping Discounts:</span></u>
                            <h3>• 10% off for orders over ₹5,000</h3>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='w-[320px] h-[686px] bg-[#00CC5C]/70 rounded-[53px] pl-[15px] pr-[15px] pt-[27px] pb-[71px] joan-regular'>
                <div className='text-center text-[25px]'>Self-Shipping (Seller Arranges Delivery) </div>
                <div>
                    <ol className='list-decimal list-inside text-[23px] ml-[27px] mt-[27px] mb-[71px]'>
                        <li className='pb-[29px]'>No shipping fee from KrishiMitra</li>
                        <li>Seller handles courier charges independently</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shipping