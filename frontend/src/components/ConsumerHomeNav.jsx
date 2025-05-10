import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router';

const ConsumerHomeNav = () => {
  return (
    <nav className="bg-[#00CC5C] p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white font-bold text-[30px] ml-4">
        logo
      </div>

      {/* Search Bar */}
      {/* <div className="flex items-center bg-white rounded-full shadow-xl">
        <FaSearch className="text-gray-500 w-8 ml-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-[350px] h-[70px] text-[20px] px-3 py-2 rounded-full focus:outline-none inter-regular"
        />
      </div> */}

    <div className="flex items-center bg-white rounded-full shadow-xl">
        Welcome
    </div>

      {/* Right Section (Buttons and Icon) */}
      <div className="flex items-center space-x-10">
        <Link to='/login'>
        <button className="text-white text-[30px] inter-regular cursor-pointer">Login</button>
        </Link>
        <Link to='/signup'>
        <button className="bg-[#006A30] text-white text-[30px] px-4 py-2 rounded-full w-[170px] inter-regular cursor-pointer">
          Sign Up
        </button>
        </Link>
        <FaShoppingCart className="text-white" style={{scale:'2', marginRight:'20px'}} />
      </div>
    </nav>
  );
};

export default ConsumerHomeNav;