import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search,setSearch] = useState('')
  const categories = [
    "Weather affecting Farmers",
    "Organic Farming",
    "Budget for Farming",
  ];

  return (
    <div className="w-[280px] ml-[100px] joan-regular text-[22.75px]">
      {/* Search Section */}
      <h2 className="mb-2">Search</h2>
      <div className="flex items-center bg-[#e6e5e5] rounded-xl px-4 py-2 mb-12">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none flex-grow text-green-700 placeholder:text-[#00cc5c]"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="text-[#00CC5C] w-5 h-5" />
      </div>

      {/* Popular Categories */}
      <h2 className="mb-2">Popular Categories</h2>
      <div className="space-y-1">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`bg-[#e6e5e5] rounded-[16px] px-4 py-2 cursor-pointer duration-500 transition-colors 
              ${
                selectedCategory === category
                  ? 'bg-green-800 text-white'
                  : 'text-[#00CC5C] hover:bg-green-800 hover:text-white'
              }`}
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBlog;
