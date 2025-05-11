// import React, { useState, useRef } from "react";

// // Sample dummy data (replace with your real data if needed)
// const prod = [
//     {
//       id: 1,
//       product: "Wheat",
//       basePrice: "95/kg",
//       marketPrice: "90/kg",
//       weekBeforePrice: "85/kg",
//       lastUpdated: "2024/04/18"
//     },
//     {
//       id: 2,
//       product: "Rice",
//       basePrice: "70/kg",
//       marketPrice: "75/kg",
//       weekBeforePrice: "68/kg",
//       lastUpdated: "2024/04/15"
//     },
//     {
//       id: 3,
//       product: "Maize",
//       basePrice: "40/kg",
//       marketPrice: "42/kg",
//       weekBeforePrice: "39/kg",
//       lastUpdated: "2024/04/10"
//     },
//     {
//       id: 4,
//       product: "Barley",
//       basePrice: "50/kg",
//       marketPrice: "53/kg",
//       weekBeforePrice: "47/kg",
//       lastUpdated: "2024/04/12"
//     },
//     {
//       id: 5,
//       product: "Sorghum",
//       basePrice: "35/kg",
//       marketPrice: "37/kg",
//       weekBeforePrice: "33/kg",
//       lastUpdated: "2024/04/17"
//     },
//     {
//       id: 6,
//       product: "Soybean",
//       basePrice: "120/kg",
//       marketPrice: "125/kg",
//       weekBeforePrice: "118/kg",
//       lastUpdated: "2024/04/14"
//     },
//     {
//       id: 7,
//       product: "Lentil",
//       basePrice: "95/kg",
//       marketPrice: "100/kg",
//       weekBeforePrice: "93/kg",
//       lastUpdated: "2024/04/11"
//     },
//     {
//       id: 8,
//       product: "Peanut",
//       basePrice: "140/kg",
//       marketPrice: "135/kg",
//       weekBeforePrice: "132/kg",
//       lastUpdated: "2024/04/13"
//     },
//     {
//       id: 9,
//       product: "Cotton",
//       basePrice: "185/kg",
//       marketPrice: "190/kg",
//       weekBeforePrice: "180/kg",
//       lastUpdated: "2024/04/16"
//     },
//     {
//       id: 10,
//       product: "Sunflower",
//       basePrice: "80/kg",
//       marketPrice: "82/kg",
//       weekBeforePrice: "78/kg",
//       lastUpdated: "2024/04/09"
//     }
//   ];

// const filterOptions = ["1 Day", "7 Days", "28 Days"];

// const Tracking = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [filterOpen, setFilterOpen] = useState(false);
//   const [selectedFilter, setSelectedFilter] = useState("Filter");
//   const [searchName, setSearchName] = useState("");
//   const tableRef = useRef(null);

//   const handleSearchChange = (e) => setSearchName(e.target.value);

//   // Filtering logic
//   const filteredProd = prod.filter(p =>
//     (selectedFilter === "Filter" || p.lastUpdated) && // READY TO FILTER BY DATE RANGE if you want to
//     (p.product.toLowerCase().includes(searchName.toLowerCase()))
//   );

//   // Pagination
//   const visibleProd = showAll ? filteredProd : filteredProd.slice(0, 6);

//   const handleViewToggle = () => {
//     setShowAll(prev => {
//       if (prev && tableRef.current) {
//         setTimeout(() => {
//           tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100);
//       }
//       return !prev;
//     });
//   };

//   const handleFilterClick = () => setFilterOpen(open => !open);

//   const handleFilterSelect = (filt) => {
//     setSelectedFilter(filt);
//     setFilterOpen(false);
//     setShowAll(false);
//   };

//   return (
//     <div className="min-h-screen px-3 pt-6 pb-9 font-serif">
//       {/* Search + Filter */}
//       <div className="flex justify-between items-center ml-[50px] mr-[80px] mb-4">
//         {/* SearchBar */}
//         <div className="flex items-center bg-[#dadada] rounded-[27px] mr-[375px] px-4 py-2 w-[436px] h-[66px]">
//           <svg className="w-8 h-8 text-green-800 mr-2" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
//             <circle cx="11" cy="11" r="7" stroke="currentColor" />
//             <line x1="21" y1="21" x2="17" y2="17" stroke="currentColor" />
//           </svg>
//           <input
//             type="text"
//             value={searchName}
//             onChange={handleSearchChange}
//             placeholder="Search"
//             className="bg-transparent outline-none border-b border-gray-400 flex-1 text-lg"
//             style={{ paddingLeft: 0 }}
//           />
//         </div>
//         {/* FilterButton & Dropdown */}
//         <div className="relative">
//           <button
//             className={`flex bg-[#00cc5c] w-[269px] h-[66px] rounded-[27px] pl-[21px] pt-[13px] pb-[16px] justify-between items-center text-[36px] joan-regular ${filterOpen ? 'ring-2 ring-green-400': ''}`}
//             onClick={handleFilterClick}
//           >
//             {selectedFilter}
//             <svg className="w-8 h-8 mr-[23px] mt-[8px] text-black" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M5.5 8.5l4.5 4.5 4.5-4.5" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//           {filterOpen && (
//             <div className="absolute top-[75px] left-[-10px] w-[288px] rounded-[16px] shadow-lg bg-white border z-20 py-2">
//               {filterOptions.map(opt => (
//                 <div
//                   key={opt}
//                   onClick={() => handleFilterSelect(opt)}
//                   className={`px-6 py-2 cursor-pointer text-lg hover:bg-green-100 ${selectedFilter === opt ? "font-bold text-green-700":""}`}
//                 >
//                   {opt}
//                 </div>
//               ))}
//               <div
//                 onClick={() => handleFilterSelect("Filter")}
//                 className={`px-6 py-2 cursor-pointer text-lg hover:bg-green-100 ${selectedFilter === "Filter" ? "font-bold text-green-700":""}`}
//               >
//                 Clear
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Chart */}
//       {/* <div className="bg-white h-[205px] rounded shadow px-4 py-2 mt-12 border ml-[50px] mr-[80px]">
//         <div className="flex justify-between items-center mb-1 mt-2">
//           <span></span>
//           <span className="font-bold text-green-600 text-xl">Price Analysis</span>
//           <span className="font-semibold text-green-600">Wheat</span>
//         </div>
//         <div className="h-20 flex items-center">
//           <svg width="100%" height="auto" viewBox="0 0 200 60">
//             <polyline
//               fill="none"
//               stroke="#2e7d32"
//               strokeWidth="2"
//               points="10,40 40,50 70,30 100,35 130,30 160,40 190,38"
//             />
//           </svg>
//         </div>
//       </div> */}

//       {/* Table */}
//       <div className="bg-white rounded-[32px] ml-[30px] mt-[74px] mr-[82px] p-2 pb-8 max-w-full overflow-auto">
//         {/* Table Header */}
//         <div className="flex bg-white py-6 px-8 mb-[70px] text-[32px] joan-regular text-[#006A30] justify-between rounded-[32px] border border-black/20">
//           <div>Product</div>
//           <div>Base <br/> Price</div>
//           <div>Market<br/>Price</div>
//           <div>Price Week Before<br/>Expiration</div>
//           <div>Last Updated</div>
//         </div>
//         {/* Table Rows */}
//         <div ref={tableRef}
//           className="overflow-hidden scrollbar-hide transition-all duration-300"
//           style={{ maxHeight: showAll ? 'none' : '484px' }}
//         >
//           {visibleProd.map((row, idx) => (
//             <div
//               key={row.id}
//               className={`flex bg-white py-5 px-8 text-[28px] mb-[48px] rounded-[32px] joan-regular justify-between border border-black/20  items-center ${idx !== visibleProd.length - 1 ? "border-b" : ""} rounded-[32px] shadow-xl`}
//             >
//               <div>{row.product}</div>
//               <div>{row.basePrice}</div>
//               <div>{row.marketPrice}</div>
//               <div>{row.weekBeforePrice}</div>
//               <div>{row.lastUpdated}</div>
//             </div>
//           ))}
//           {filteredProd.length === 0 && (
//             <div className="text-center text-gray-500 text-xl py-16">No records found.</div>
//           )}
//         </div>
//         {/* View More/Less */}
//         {filteredProd.length > 6 && (
//           <div className="w-full flex justify-center mt-6 mb-2">
//             <button
//               className="bg-[#006A30] hover:bg-green-700 text-white text-lg itim-regular font-semibold px-8 py-2 rounded-[12px] shadow"
//               onClick={handleViewToggle}
//             >
//               {showAll ? "View Less" : "View More"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Tracking;


import React, { useState } from "react";
import data from '../assets/data.json'; // Adjust the path according to your project structure

const Tracking = () => {
  const [searchName, setSearchName] = useState("");
  const [selectedState, setSelectedState] = useState("All");

  // Extract unique states for the filter dropdown
  const states = [...new Set(data.map(item => item.state))];

  const handleSearchChange = (e) => setSearchName(e.target.value);

  const handleStateChange = (e) => setSelectedState(e.target.value);

  // Filtering logic
  const filteredData = data.filter(item =>
    item.commodity.toLowerCase().includes(searchName.toLowerCase()) &&
    (selectedState === "All" || item.state === selectedState)
  );

  return (
    <div className="min-h-screen bg-gray-100 py-6 mt-0">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-y-4 sm:space-y-0 sm:space-x-6 px-4">
        {/* SearchBar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-lg shadow-md">
          <svg className="w-6 h-6 text-green-800 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <line x1="21" y1="21" x2="17" y2="17" stroke="currentColor" />
          </svg>
          <input
            type="text"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Search by Commodity"
            className="bg-transparent outline-none border-b border-gray-300 flex-1 text-lg"
          />
        </div>
        {/* State Filter */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-lg shadow-md">
          <select
            value={selectedState}
            onChange={handleStateChange}
            className="bg-transparent outline-none border-b border-gray-300 flex-1 text-lg p-2"
          >
            <option value="All">All States</option>
            {states.map((state, idx) => (
              <option key={idx} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {filteredData.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="text-xl font-bold mb-4">{item.commodity}</div>
            <div className="flex flex-col space-y-2">
              <div className="text-gray-700">
                <span className="font-semibold">State:</span> {item.state}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">District:</span> {item.district}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Market:</span> {item.market}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Variety:</span> {item.variety}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Grade:</span> {item.grade}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Arrival Date:</span> {item.arrival_date}
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
                <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 font-semibold">
                  Min: ₹{item.min_price}
                </div>
                <div className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 font-semibold">
                  Max: ₹{item.max_price}
                </div>
                <div className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 font-semibold">
                  Modal: ₹{item.modal_price}
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && (
          <div className="text-center text-gray-500 text-xl py-16">No records found.</div>
        )}
      </div>
    </div>
  );
};

export default Tracking;