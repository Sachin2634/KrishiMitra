import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const SellerNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-500 w-full relative">
      <div className="flex justify-between items-center p-[2.97vw]">

        {/* Hamburger Icon - Mobile View */}
        <div className="md:hidden pl-[5vw]">
          <RxHamburgerMenu
            className="text-white text-[6vw] cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        {/* Logo - Centered in Mobile */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-white text-[4vw] font-medium cursor-pointer">
          logo
        </div>

        {/* Navbar Menu - Mobile + Desktop */}
        <div
          className={`fixed md:relative top-0 left-0 h-full w-[70%] md:w-full bg-green-500 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row 
          items-start md:items-center transition-all duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        >
          {/* Close Button - Mobile View */}
          <div className="md:hidden self-end pr-4">
            <IoMdClose
              className="text-white text-[6vw] cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          {/* Logo - Only Visible on Large Screens */}
          <div className="hidden md:block text-[2.76vw] font-medium pl-[5.24vw] pr-[11.66vw] cursor-pointer">
            logo
          </div>

          {/* Menu Items */}
          <div className="flex flex-col md:flex-row text-[4vw] md:text-[2.21vw] text-white">
            <div className="pr-[3.31vw] pl-[2.5vw] md:pl-[0] mt-[7px] md:mt-[0px] cursor-pointer">Start</div>
            <div className="pr-[3.31vw] pl-[2.5vw] md:pl-[0] mt-[7px] md:mt-[0px] cursor-pointer">Pricing</div>
            <div className="pr-[3.31vw] pl-[2.5vw] md:pl-[0] mt-[7px] md:mt-[0px] cursor-pointer">FAQ</div>
            <Link to ='/contactus'>
            <div className="pr-[7.245vw] pl-[2.5vw] md:pl-[0] mt-[7px] md:mt-[0px] cursor-pointer">Contact Us</div>
            </Link>
          </div>

          {/* Start Selling Button */}
          <Link to ='/login'>
          <div className="pr-[3.52vw] text-[4vw] md:text-[2.21vw] pl-[2.5vw] md:pl-[0] text-white mt-[7px] md:mt-[0px] cursor-pointer">
            Login</div>
            </Link>
          <button className="px-[2.5vw] py-[0.69vw] bg-[#006A30] text-[4vw] md:text-[2.21vw] text-white rounded-[22px] mt-[20px] md:mt-[0px] cursor-pointer">
            Start Selling
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SellerNavbar;
