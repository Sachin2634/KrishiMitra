import React from "react";

const Equipment = ({ product }) => (
  <div className="bg-white rounded-xl shadow border p-4 w-full max-w-xs mx-auto flex flex-col">
    {/* Displaying the image from the product */}
    <div className="bg-gray-300 rounded-lg mb-4 w-full h-32">
      {product.image ? (
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full rounded-lg"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          No Image Available
        </div>
      )}
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-serif mb-1">{product.name}</div>
        <div className="text-lg font-serif mb-1">{product.description}</div>
        <div className="text-lg font-serif mb-1">₹{product.price}</div>
        <div className="text-md font-serif mb-1">Weekly Rate: ₹{product.weeklyRate}</div>
        <div className="text-xl font-serif mb-1">{product.location}</div>
        <div className="text-md font-serif mb-1">Age: {product.ageOfProduct} years</div>
        <div className="text-md font-serif mb-1">Available: {product.available ? 'Yes' : 'No'}</div>
      </div>
      <div className="flex justify-end items-center mt-2">
        
      </div>
    </div>
  </div>
);

export default Equipment;