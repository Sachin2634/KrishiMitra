import React from 'react';

const ProductPricing = ({ formData, handleChange }) => {
  const onInputChange = (e) => {
    const { name, value } = e.target;
    // Convert the value to a floating point number if it is numeric, otherwise set to empty string
    const numericValue = value ? parseFloat(value) : '';
    handleChange({ target: { name, value: numericValue } });
  };

  return (
    <div className="p-4 border border-black/20 shadow-xl rounded-[16px] mb-[43px]">
      <h3 className="jomolhari-regular ml-[9px] mb-[43px] text-[28px]">Pricing</h3>
      <div className="flex space-x-2">
        <div className='w-1/3'>
          <div className='text-center ml-[52px] inter-regular text-[21px] mb-[17px]'>Base Price</div>
          <input
            type="number"
            name="basePrice"
            value={formData.basePrice || ''}
            onChange={onInputChange}
            className="w-full border border-black/50 rounded-[16px] ml-[27px] mb-[17px] p-2 shadow-xl h-[50px]"
            placeholder="Enter base price"
            step="0.01"
            min="0"
          />
        </div>
        <div className='w-1/3'>
          <div className='text-center ml-[119px] inter-regular text-[21px] mb-[17px]'>Discount</div>
          <input
            type="number"
            name="discount"
            value={formData.discount || ''}
            onChange={onInputChange}
            className="w-full border border-black/50 rounded-[16px] ml-[83px] mb-[17px] p-2 shadow-xl h-[50px]"
            placeholder="Enter discount"
            step="0.01"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPricing;