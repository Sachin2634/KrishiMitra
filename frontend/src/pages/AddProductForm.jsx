import React from 'react';
import GeneralInformation from '../components/GeneralInformation';
import ProductImages from '../components/ProductImages';
import ProductPricing from '../components/ProductPricing';
import ModeOfDelivery from '../components/ModeOfDelivery';
import CategoryAndDates from '../components/CategoryAndDates';
import Dash_Sidebar from '../components/Dash_Sidebar'
import Footer from '../components/Footer'

const AddProductForm = () => {
  return (
    <div>
    <div className="flex flex-col pb-[54px]">
      <div className="flex space-x-4">
        <div className='bg-[#00CC5C] mb-0 pb-0'>
        <Dash_Sidebar />
        </div>
        <div className="w-[535px] ml-[30px] mt-[40px] mr-[112px] border border-black/20 p-[15px]">
        <h1 className="text-[24px] jomolhari-regular ml-[24px] mt-[16px] mb-[20px] text-[#006A30]">ADD NEW PRODUCT</h1>
          <GeneralInformation />
          <ProductPricing />
          <ModeOfDelivery />
        </div>
        <div>
        <div className="w-[453px] mt-[40px] pb-[84px] border border-black/20 p-[15px]">
          <ProductImages />
          <CategoryAndDates />
        </div>
          <div className="flex flex-col gap-[20px]  mt-[49px]">
            <div>
            <button className="w-[190px] h-[53px] border border-black text-black text-[24px] inter-regular shadow-xl rounded-[35px] mr-[24px]">Save Draft</button>
            <button className="w-[190px] h-[53px] border border-black text-black text-[24px] inter-regular shadow-xl rounded-[35px]">Edit</button>
            </div>
            <button className="bg-[#006A30] text-white text-[32px] jomolhari-light w-[316px] h-[80px] ml-[50px] mt-[71px] rounded-[23px]">Upload Product</button>
          </div>
          </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AddProductForm;