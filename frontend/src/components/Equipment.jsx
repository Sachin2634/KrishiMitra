import React from "react";

const Equipment = ({ product }) => (
  <div className="bg-white rounded-xl shadow border p-4 w-full max-w-xs mx-auto flex flex-col">
    {/* Image placeholder */}
    <div className="bg-gray-300 rounded-lg mb-4 w-full h-32"></div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-serif mb-1">{product.name}</div>
        <div className="text-lg font-serif mb-1">₹{product.price} per month</div>
        <div className="text-xl font-serif mb-1">{product.location}</div>
      </div>
      <div className="flex justify-end items-center mt-2">
        <button className="flex items-center bg-green-900 text-white px-4 py-1 rounded-lg hover:bg-green-800 transition text-lg font-semibold">
          <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M5 12h14M12 5v14" stroke="currentColor" strokeLinecap="round" />
          </svg>
          Add
        </button>
      </div>
    </div>
  </div>
);

export default Equipment;