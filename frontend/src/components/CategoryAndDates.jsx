import React from 'react';

const CategoryAndDates = ({ formData, handleChange }) => {
  return (
    <div className="mb-4">
      <div className='pl-[23px] pt-[17px] rounded-[16px] border border-black/20 shadow-xl'>
        <h3 className="jomolhari-regular text-[23px]">Category</h3>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-[357px] h-[44px] border border-black/20 shadow-xl rounded-[12px] p-2 mb-2"
        >
          <option value="">Select</option>
          <option value="Fresh Product">Fresh Product</option>
          <option value="Dairy & Poultry">Dairy & Poultry</option>
          <option value="Grain & Pulses">Grain & Pulses</option>
          <option value="Processed Goods">Processed Goods</option>
          <option value="HandiCrafts">HandiCrafts</option>
        </select>
        <button className="bg-[#00CC5C] w-[179px] h-[35px] text-white rounded-[34px] text-[23px] joan-regular p-2 pt-0 mt-[41px] mb-[31px]">
          Add Category
        </button>
      </div>
      <div className='border border-black/20 rounded-[16px] shadow-xl mt-[55px] pt-[31px] pb-[62px]'>
        <div className='flex flex-col'>
          <div className='ml-[23px]'>
            <h3 className="joan-dark text-[21px] mb-[22px]">Date of Harvesting</h3>
            <input
              type="date"
              name="dateOfHarvest"
              value={formData.dateOfHarvest || ''}
              onChange={handleChange}
              className="w-[150px] h-[36px] border bg-white border-black/50 text-[12px] inter-regular"
            />
          </div>
          <div className='ml-[23px] mt-[30px]'>
            <h3 className="joan-dark text-[21px] mb-[22px]">Date of Expiry</h3>
            <input
              type="date"
              name="dateOfExpiry"
              value={formData.dateOfExpiry || ''}
              onChange={handleChange}
              className="w-[150px] h-[36px] border bg-white border-black/50 text-[12px] inter-regular"
            />
          </div>
        </div>
        <div className='itim-regular text-[16px] ml-[43px] mt-[22px]'>Select the right date to ensure product freshness.</div>
      </div>
    </div>
  );
};

export default CategoryAndDates;