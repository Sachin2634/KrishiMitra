// src/ContactUs.jsx
import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUscomp = () => {
  return (
    <div className="bg-black text-white">
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x400)' }}>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start p-8">
        <div className="bg-green-500 p-6 rounded-lg w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Message</label>
              <textarea className="w-full p-2 rounded h-24"></textarea>
            </div>
            <button type="submit" className="bg-white text-black px-4 py-2 rounded">Send</button>
          </form>
        </div>
        <div className="bg-white text-black p-6 rounded-lg w-full md:w-1/3">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-2">
                <FaPhone className="text-white text-2xl" />
              </div>
              <span>Phone Number</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-2">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <span>Whatsapp</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-2">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <span>Gmail</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-500 p-4 rounded-full mb-2">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <span>Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUscomp;