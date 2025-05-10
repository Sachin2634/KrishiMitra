import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

// Product row with image logic
const Product = ({ product }) => {
  // Retrieve the first image if available
  const firstImage = product.images && product.images.length > 0 ? product.images[0] : null;

  // Function to format the date
  const formatDate = dateStr => {
    return new Date(dateStr).toISOString().substring(0, 10); // Extracting 'YYYY-MM-DD'
  };

  // Determine the display date
  const displayDate = product.createdAt
    ? formatDate(product.createdAt)
    : formatDate(product.updatedAt);

  return (
    <div className="flex bg-white py-5 px-8 text-[28px] mb-[48px] rounded-[32px] joan-regular justify-between border border-black/10 items-center">
      <div className="w-[7%] min-w-[70px] flex-shrink-0 flex items-center justify-center">
        {/* Conditional rendering: Image or gray placeholder */}
        {firstImage ? (
          <img src={firstImage} alt={product.name} className="w-[60px] h-[60px] object-cover rounded" />
        ) : (
          <div className="w-[60px] h-[60px] bg-gray-300 rounded"></div>
        )}
      </div>
      <div className="w-[18%] min-w-[110px] text-left">{product.name}</div>
      <div className="w-[15%] text-left">₹{product.price}</div>
      <div className="w-[19%] text-left">{product.quantity} kg</div>
      <div className="w-[20%] text-left">{displayDate}</div>
      <div className="w-[12%] text-left text-[25px]">
        <button className="mr-6 hover:text-blue-500">
          <MdEdit />
        </button>
        <button className="hover:text-red-500">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default Product;