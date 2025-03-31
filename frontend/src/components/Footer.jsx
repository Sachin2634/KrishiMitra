// src/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-green-800 text-white py-8 px-4 w-full h-auto">
      <div className="max-w-6xl grid grid-cols-2 md:grid-cols-4">
      <div className="w-[134px] h-[134px] bg-gray-300 rounded-full mb-4 md:mb-0 ml-[80px] "></div>
        <div className="flex flex-col md:items-start mb-20 md:mb-12 md:ml-[65px] mr-[65px] w-[313px] h-[236px]">
          
          <h2 className="text-[36px] font-semibold mb-2">Sell on KrishiMitra</h2>
          <ul className="space-y-1 text-[25px]">
            <li>Register as a Seller</li>
            <li>Pricing & Commission</li>
            <li>How it works</li>
            <li>Shipping & Returns</li>
            <li>Farmer’s Helpline</li>
          </ul>
        </div>
        <div className="flex flex-col ml-[50px] md:ml-[140px] w-[313px] h-[236px] pr-[9px] border-[2px] border-transparent border-r-white">
          <h2 className="text-[36px] font-semibold mb-2">Explore More</h2>
          <ul className="space-y-1 text-[25px]">
            <li>Learning Hub</li>
            <li>Rent Farm Equipments</li>
            <li>Shop Online on KrishiMitra</li>
          </ul>
        </div>
        <div className="flex flex-col ml-[50px] md:ml-[215px] md:items-start mb-12 w-[346px]">
          <h2 className="text-[36px] font-semibold mb-2">Contact Us</h2>
          <div className="flex items-center mb-4 text-[21px]">
            <FaEnvelope className="mr-2" />
            <span>attrisachin2003@gmail.com</span>
          </div>
          <h2 className="text-[36px] font-semibold mb-2 w-[346px]">Follow Us On</h2>
          <div className="flex space-x-4 text-[26px]">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;