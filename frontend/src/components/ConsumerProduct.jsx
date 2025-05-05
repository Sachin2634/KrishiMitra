import React from "react";
import { useNavigate } from "react-router-dom";

// You can pass more props if you wish!
export default function ConsumerProduct({ product }) {
  const navigate = useNavigate();


  return (
    <div className="bg-white shadow border p-4 flex flex-col relative w-[260px] h-[340px]"
    onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Wishlist/heart icon */}
      <button className="absolute right-3 top-3 text-red-500">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.0625 3 12.5 3.8125 13.25 5.03125C14 3.8125 15.4375 3 17 3C20.0376 3 22.5 5.46243 22.5 8.5C22.5 13.5 15 21 15 21H12Z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <img src={product.image} alt={product.name} className="w-[207px] h-[138px] object-contain mb-2" />
      <div className="mb-1 text-gray-700">{product.category}</div>
      <div className="text-xl font-serif">{product.name}</div>
      <div className="text-sm text-gray-600">{product.weight || "1kg"}</div>
      <div className="text-lg font-semibold mb-1">₹{product.price}</div>
      <div className="flex justify-end mt-auto">
        <button className="flex bg-green-900 text-white px-3 py-1 rounded-lg text-sm font-semibold">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" />
            <path d="M8 12h8M12 8v8" stroke="currentColor" />
          </svg>
          Add
        </button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-green-700 bg-green-100 px-2 py-1 rounded text-xs">By {product.seller}</span>
        <span className="text-white px-2 py-1 rounded bg-green-500 text-xs font-semibold flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-6.16 3.42 1.18-6.88-5-4.86 6.91-1L10 0l3.08 6.68 6.92 1-5 4.86 1.18 6.88z"/></svg>
          {product.rating} 
        </span>
      </div>
    </div>
  );
}