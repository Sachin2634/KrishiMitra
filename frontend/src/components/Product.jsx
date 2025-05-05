import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



// Product row with square image placeholder
const Product = ({ product }) => (
  <div className="flex bg-white py-5 px-8 text-[28px] mb-[48px] rounded-[32px] joan-regular justify-between border border-black/10 items-center">
    <div className="w-[7%] min-w-[70px] flex-shrink-0 flex items-center justify-center">
      {/* Grey square placeholder */}
      <div className="w-[60px] h-[60px] bg-gray-300 rounded"></div>
    </div>
    <div className="w-[18%] min-w-[110px] text-left">{product.name}</div>
    <div className="w-[15%] text-left">₹{product.price}</div>
    <div className="w-[14%] text-left">{product.unitType}</div>
    <div className="w-[19%] text-left">{product.stock}</div>
    <div className="w-[17%] text-left">{product.lastAdded}</div>
    <div className="w-[12%] text-left text-[25px]">
      <button className="mr-6 hover:text-blue-500"><MdEdit /></button>
      <button className="hover:text-red-500"><RiDeleteBin6Line /></button>
    </div>
  </div>
);

export default Product;