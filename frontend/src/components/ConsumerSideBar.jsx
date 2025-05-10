import React from "react";
import { Link } from "react-router";

export default function ConsumerSideBar() {
  return (
    <div className="bg-[#00CC5C] w-[220px] h-screen flex flex-col items-center pt-10">
      <ul className="space-y-10 text-white text-4xl font-serif text-center">
        <Link to='/consumersearch'>
        <li className="cursor-pointer mb-10 hover:underline">Home</li>
        </Link>
        {/* <li className="cursor-pointer hover:underline">All</li> */}
        {/* <li className="cursor-pointer hover:underline">Fresh <br />Arrivals</li>
        <li className="cursor-pointer hover:underline">Special <br />offers</li>
        <li className="cursor-pointer hover:underline">About Us</li> */}
        <Link to='/blogs'>
        <li className="cursor-pointer mb-10 hover:underline">Blogs</li>
        </Link>
        {/* <li className="cursor-pointer hover:underline">Our <br />farmers</li> */}
        <Link to='/'>
        <li className="cursor-pointer hover:underline">Sign Out</li>
        </Link>
      </ul>
    </div>
  );
}