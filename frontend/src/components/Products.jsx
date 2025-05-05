import React, { useState, useRef } from "react";
import Product from "./Product";
import { Link } from "react-router";

const prod = [
  { id: 1, name: "Rice", price: 62, unitType: "Kg", stock: 75, lastAdded: "2025-04-03", category: "Grains" },
  { id: 2, name: "Wheat", price: 55, unitType: "Kg", stock: 40, lastAdded: "2025-04-17", category: "Grains" },
  { id: 3, name: "Apple", price: 150, unitType: "Dozen", stock: 34, lastAdded: "2025-04-12", category: "Fruits" },
  { id: 4, name: "Banana", price: 60, unitType: "Dozen", stock: 54, lastAdded: "2025-04-08", category: "Fruits" },
  { id: 5, name: "Carrot", price: 40, unitType: "Kg", stock: 60, lastAdded: "2025-04-20", category: "Vegetables" },
  { id: 6, name: "Broccoli", price: 80, unitType: "Kg", stock: 22, lastAdded: "2025-04-25", category: "Vegetables" },
  { id: 7, name: "Jam", price: 95, unitType: "Bottle", stock: 17, lastAdded: "2025-04-02", category: "Processed Foods" },
  { id: 8, name: "Handmade Basket", price: 350, unitType: "Piece", stock: 12, lastAdded: "2025-04-16", category: "Handicrafts" },
];

const categories = [
  "Grains",
  "Fruits",
  "Processed Foods",
  "Handicrafts",
  "Vegetables"
];

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchName, setSearchName] = useState("");
  const tableRef = useRef(null);

  const handleSearchChange = (e) => setSearchName(e.target.value);

  // Filtering logic: by category AND searchName
  const filteredProd = prod.filter(p => 
    (selectedCategory === "All Categories" || p.category === selectedCategory) &&
    (p.name.toLowerCase().includes(searchName.toLowerCase()))
  );

  // Pagination
  const visibleProd = showAll ? filteredProd : filteredProd.slice(0, 6);

  const handleViewToggle = () => {
    setShowAll(prev => {
      if (prev && tableRef.current) {
        setTimeout(() => {
          tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      return !prev;
    });
  };

  const handleFilterClick = () => setFilterOpen(open => !open);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setFilterOpen(false);
    setShowAll(false); // Always reset View More/Less when filtering
  };

  return (
    <div className="mt-[153px] bg-transparent w-full mb-[111px]">
      {/* Header with Add Product */}
      <div className="flex mb-[102px]">
        <h1 className="ml-[50px] mr-[466px] text-[53px] jomolhari-light">
          Your Products
        </h1>
        <Link to="/addproduct">
          <button className="bg-[#00CC5C] hover:bg-green-600 text-white text-[36px] joan-regular pl-[39px] pt-[13px] pb-[16px] pr-[38px] rounded-[16px]">
            Add Product
          </button>
        </Link>
      </div>

      <div className="flex mb-[105px] relative z-10">
        {/* Search */}
        <div className="flex items-center bg-[#dadada] rounded-[27px] ml-[50px] mr-[479px] px-4 py-2 w-[331px] h-[66px]">
          <svg className="w-8 h-8 text-green-800 mr-2" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <line x1="21" y1="21" x2="17" y2="17" stroke="currentColor" />
          </svg>
          <input
            type="text"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Search"
            className="bg-transparent outline-none border-b border-gray-400 flex-1 text-lg"
            style={{ paddingLeft: 0 }}
          />
        </div>

        {/* Filter Button and Dropdown */}
        <div className="relative">
          <button
            type="button"
            className={`flex bg-[#d9d9d9] w-[269px] h-[66px] rounded-[27px] pl-[21px] pt-[13px] pb-[16px] justify-between items-center text-[36px] joan-regular ${filterOpen ? 'ring-2 ring-green-400': ''}`}
            onClick={handleFilterClick}
          >
            <span>
              {selectedCategory === "All Categories" ? "Filter" : selectedCategory}
            </span>
            <svg className="w-8 h-8 mr-[23px] mt-[8px] text-black" fill="none" stroke="currentColor" strokeWidth={4} viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {filterOpen && (
            <div className="absolute top-[75px] left-[-10px] w-[288px] rounded-[16px] shadow-lg bg-white border z-20 py-2">
              <div
                onClick={() => handleCategorySelect("All Categories")}
                className={`px-6 py-3 text-xl cursor-pointer joan-regular hover:bg-green-100 ${selectedCategory === "All Categories" ? "font-bold text-green-600":""}`}
              >
                All Categories
              </div>
              {categories.map(cat => (
                <div
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-6 py-3 text-xl cursor-pointer joan-regular hover:bg-green-100 ${selectedCategory === cat ? "font-bold text-green-600":""}`}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="ml-[33px] mr-[80px] shadow-md rounded-[32px] overflow-hidden">
        {/* Table Heading */}
        <div className="flex bg-white py-6 px-8 mb-[70px] text-[32px] joan-regular text-[#006A30] justify-between rounded-[32px] border border-black/10">
          <div className="w-[16%] min-w-[110px] text-left">Product</div>
          <div className="w-[12%] text-left">Price</div>
          <div className="w-[14%] text-left">Unit<br />Type</div>
          <div className="w-[19%] text-left">Available Stock</div>
          <div className="w-[17%] text-left">Last Added</div>
          <div className="w-[12%] text-left">Edit/<br />Delete</div>
        </div>
        {/* Table Rows */}
        <div
          ref={tableRef}
          className="overflow-hidden scrollbar-hide"
          style={{
            maxHeight: showAll ? 'none' : '484px',
            position: 'relative',
            transition: 'max-height 0.3s',
          }}
        >
          {visibleProd.map((product, idx) => (
            <div
              key={product.id}
              className={idx === 0 ? "min-h-[70px]" : ""}
            >
              <Product product={product} />
            </div>
          ))}
          {filteredProd.length === 0 && (
            <div className="text-center text-gray-500 text-xl py-16">No products found.</div>
          )}
        </div>

        {/* View More / View Less */}
        {filteredProd.length > 6 && (
          <div className="w-full flex justify-center mt-6 mb-8">
            <button
              className="bg-[#006A30] hover:bg-green-700 text-white text-[24px] itim-regular px-10 py-4 rounded-[12px] shadow"
              onClick={handleViewToggle}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;