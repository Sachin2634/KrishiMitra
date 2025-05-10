import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GeneralInformation from '../components/GeneralInformation';
import ProductPricing from '../components/ProductPricing';
import ModeOfDelivery from '../components/ModeOfDelivery';
import ProductImages from '../components/ProductImages';
import CategoryAndDates from '../components/CategoryAndDates';
import Dash_Sidebar from '../components/Dash_Sidebar';
import Footer from '../components/Footer';

const AddProductForm = () => {
  // Assume you retrieve the logged-in user's ID (farmer ID) from local storage or context
  const currentUserId = localStorage.getItem('userId');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    location: '',
    quantity: '',
    category: '',
    dateOfHarvest: '',
    dateOfExpiry: '',
    deliveryMode: '',
    images: [],
    basePrice: '',
    discount: '',
    farmer: currentUserId || '',  // This should hold the ID of the current user
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const calculatedPrice = (parseFloat(formData.basePrice) || 0) - (parseFloat(formData.discount) || 0);
    // Ensure farmer field is set before submission
    const productData = { ...formData, price: calculatedPrice, farmer: currentUserId };

    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);

    try {
      const response = await axios.post('http://localhost:5000/api/products', productData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      console.log('Product created successfully', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col pb-[54px]">
        <div className="flex space-x-4">
          <div className='bg-[#00CC5C] mb-0 pb-0'>
            <Dash_Sidebar />
          </div>
          <form className="w-full flex" onSubmit={handleSubmit}>
            <div className="w-[535px] ml-[30px] mt-[40px] mr-[112px] border border-black/20 p-[15px]">
              <h1 className="text-[24px] jomolhari-regular ml-[24px] mt-[16px] mb-[20px] text-[#006A30]">ADD NEW PRODUCT</h1>
              <GeneralInformation formData={formData} handleChange={handleChange} />
              <ProductPricing formData={formData} handleChange={handleChange} />
              <ModeOfDelivery formData={formData} handleChange={handleChange} />
            </div>
            <div>
              <div className="w-[453px] mt-[40px] pb-[84px] border border-black/20 p-[15px]">
                <ProductImages formData={formData} handleChange={handleChange} />
                <CategoryAndDates formData={formData} handleChange={handleChange} />
              </div>
              <div className="flex flex-col gap-[20px] mt-[49px]">
                <button type="submit" className="bg-[#006A30] text-white text-[32px] jomolhari-light w-[316px] h-[80px] ml-[50px] mt-[71px] rounded-[23px]">
                  Upload Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProductForm;