import React from "react";
import { Link } from "react-router";

export default function ConsumerNavbar() {
  return (
    <div className="bg-[#00CC5C] pb-4 shadow-xl">
      {/* Top navigation row */}
      <div className="flex items-center justify-between px-12 pt-6">
        {/* Logo */}
        <div className="text-5xl font-serif text-black">logo</div>

        {/* Location Info */}
        <div className="flex flex-col items-center flex-1">
          <div className="flex items-center space-x-4 mb-1">
            {/* Profile */}
            <div className="w-14 h-14 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-serif text-black shadow">
              S
            </div>
            {/* Location + dropdown */}
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path d="M12 21c-6-6.5-8-10.386-8-13.5 0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5c0 3.114-2 7-8 13.5z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="8.5" r="2.5" fill="white" />
              </svg>
              <span className="text-3xl font-serif text-white font-medium">
                Home
              </span>
              <svg className="w-7 h-7 text-white ml-2" fill="none" stroke="currentColor" strokeWidth={4} viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="ml-6 text-white text-lg font-serif -mt-1">
            B-12/123 South Extension New Delhi
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-10 pr-6">
          {/* Heart */}
          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="red" stroke="red" strokeWidth={2}>
            <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.0625 3 12.5 3.8125 13.25 5.03125C14 3.8125 15.4375 3 17 3C20.0376 3 22.5 5.46243 22.5 8.5C22.5 13.5 15 21 15 21H12Z" />
          </svg>
          {/* Cart */}
          <Link to='/consumercart'>
          <svg className="w-10 h-10" fill="none" stroke="white" strokeWidth={2.2} viewBox="0 0 24 24">
            <circle cx="9.5" cy="19" r="1.5" fill="white"/>
            <circle cx="19.5" cy="19" r="1.5" fill="white"/>
            <path d="M3 3h2l1 9h14l1-6H6" stroke="white" strokeLinejoin="round"/>
          </svg>
          </Link>
        </div>
      </div>
      {/* Search Bar */}
      {/* <div className="flex justify-center mt-6">
        <div className="flex items-center bg-white rounded-2xl shadow-lg px-6 py-2 w-[65vw] max-w-5xl">
          <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <line x1="21" y1="21" x2="17" y2="17" stroke="currentColor" />
          </svg>
          <input
            className="bg-transparent flex-1 outline-none text-2xl font-serif ml-4"
            placeholder="Search"
          />
        </div>
      </div> */}
    </div>
  );
}