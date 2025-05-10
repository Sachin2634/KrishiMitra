import React, { useState } from "react";
import ConsumerProduct from "./ConsumerProduct";

// Dummy product images
const appleImg = "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg";
const bananaImg = "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg";
const tomatoImg = "https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg";
const potatoImg = "https://upload.wikimedia.org/wikipedia/commons/6/60/Raw_potatoes.jpg";
const wheatImg = "https://upload.wikimedia.org/wikipedia/commons/4/41/Wheat_field.jpg";
const riceImg = "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rice_bowl_02.jpg";

export const productsArr = [
  {
    id: 1,
    image: appleImg,
    category: "Fruits",
    name: "Apple",
    weight: "1kg",
    price: 90,
    seller: "xyz Farmer",
    rating: 4.5,
    description: "Fresh and juicy apples",
    storage: "Store in dry and cool places away from direct sunlight",
    nutrition: [
      "Rich in fiber and vitamin C.",
      "Contains antioxidants.",
      "Helps boost immunity.",
    ]
  },
  {
    id: 2,
    image: bananaImg,
    category: "Fruits",
    name: "Banana",
    weight: "1kg",
    price: 30,
    seller: "abc Trader",
    rating: 4.7,
    description: "Sweet and ripe bananas.",
    storage: "Keep at room temperature and away from direct heat.",
    nutrition: [
      "High in potassium.",
      "Source of dietary fiber.",
      "Provides quick energy.",
    ]
  },
  {
    id: 3,
    image: tomatoImg,
    category: "Vegetables",
    name: "Tomato",
    weight: "1kg",
    price: 25,
    seller: "MNO Agro",
    rating: 4.2,
    description: "Fresh red tomatoes.",
    storage: "Store at room temperature and avoid refrigerating.",
    nutrition: [
      "Rich in vitamin C and K.",
      "Good source of lycopene.",
      "Low in calories.",
    ]
  },
  {
    id: 4,
    image: potatoImg,
    category: "Vegetables",
    name: "Potato",
    weight: "1kg",
    price: 20,
    seller: "xyz Farmer",
    rating: 4.1,
    description: "High-quality potatoes ideal for cooking.",
    storage: "Keep in a cool, dry place.",
    nutrition: [
      "Source of vitamin B6 and C.",
      "Contains potassium.",
      "Good source of fiber.",
    ]
  },
  {
    id: 5,
    image: wheatImg,
    category: "Grains",
    name: "Wheat",
    weight: "5kg",
    price: 200,
    seller: "Ravi Agro",
    rating: 4.6,
    description: "Finest quality wheat grains.",
    storage: "Store in airtight container in a cool place.",
    nutrition: [
      "Rich in carbohydrates.",
      "Provides dietary fiber.",
      "Good for digestive health.",
    ]
  },
  {
    id: 6,
    image: riceImg,
    category: "Grains",
    name: "Rice",
    weight: "5kg",
    price: 250,
    seller: "Sita Farms",
    rating: 4.9,
    description: "Premium quality rice.",
    storage: "Keep in a dry, airtight container.",
    nutrition: [
      "Source of carbohydrates.",
      "Low in fat.",
      "Gluten-free grain.",
    ]
  },
  {
    id: 7,
    image: appleImg,
    category: "Fruits",
    name: "Apple (Premium)",
    weight: "1kg",
    price: 130,
    seller: "Himalaya Fresh",
    rating: 4.8,
    description: "Premium, organic apples from Himalaya.",
    storage: "Refrigerate for longer shelf life.",
    nutrition: [
      "Higher antioxidants content.",
      "Very juicy and crisp.",
      "Low in calories.",
    ]
  },
  {
    id: 8,
    image: tomatoImg,
    category: "Vegetables",
    name: "Tomato (Organic)",
    weight: "1kg",
    price: 35,
    seller: "BioFarm",
    rating: 4.3,
    description: "Organically grown juicy tomatoes.",
    storage: "Keep at room temperature.",
    nutrition: [
      "Source of lycopene.",
      "Organic certified.",
      "Rich taste.",
    ]
  },
  {
    id: 9,
    image: bananaImg,
    category: "Fruits",
    name: "Banana (Red)",
    weight: "1kg",
    price: 45,
    seller: "Raju Farmer",
    rating: 4.4,
    description: "Exotic red bananas, sweeter than regular.",
    storage: "Store at cool and dry place.",
    nutrition: [
      "High in potassium and beta-carotene.",
      "Antioxidant-rich.",
      "Sweet flavor.",
    ]
  },
  {
    id: 10,
    image: wheatImg,
    category: "Grains",
    name: "Durum Wheat",
    weight: "5kg",
    price: 260,
    seller: "Punjab Agro",
    rating: 4.7,
    description: "Best for making pasta and bread.",
    storage: "Keep in dry, air-tight container.",
    nutrition: [
      "High protein content.",
      "Rich in B vitamins.",
      "Ideal for pasta making.",
    ]
  },
  {
    id: 11,
    image: potatoImg,
    category: "Vegetables",
    name: "Potato (New)",
    weight: "2kg",
    price: 38,
    seller: "Ravi Agro",
    rating: 4.2,
    description: "Freshly harvested new potatoes.",
    storage: "Store in a cool dark place.",
    nutrition: [
      "Low in calories.",
      "Source of vitamin C.",
      "Tender texture.",
    ]
  },
  {
    id: 12,
    image: riceImg,
    category: "Grains",
    name: "Basmati Rice",
    weight: "5kg",
    price: 340,
    seller: "Sita Farms",
    rating: 4.8,
    description: "Long grain Basmati rice for fragrant meals.",
    storage: "Keep in an airtight jar.",
    nutrition: [
      "Aromatic and long-grained.",
      "Low in cholesterol.",
      "Gluten free.",
    ]
  },
];

export default function SearchProducts() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Relevance");


  const sorted = [...productsArr].sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
    // Relevance or unknown: no sort
    return 0;
  });


  const filtered = sorted.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase()) ||
      p.seller.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8">
      {/* Search bar */}
      <div className="flex mb-4 justify-between items-center">
        <div className="flex items-center bg-[#dadada] rounded-[27px] ml-[50px] mr-[479px] px-4 py-2 w-[463px] h-[66px]">
          <svg className="w-8 h-8 text-green-800 mr-2" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" />
            <line x1="21" y1="21" x2="17" y2="17" stroke="currentColor" />
          </svg>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-transparent outline-none border-b border-gray-400 flex-1 text-lg"
            placeholder="Search products"
          />
        </div>
        {/* Sorted by UI */}
        <span className="text-gray-500 text-lg mr-[95px]">
          Sorted by:
          <select
            className="ml-1 mb-6 border rounded py-1 px-2 text-lg"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option>Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </span>
      </div>
      <div className="ml-[60px] text-gray-600 text-sm mb-4">
        Showing {filtered.length ? `1-${Math.min(filtered.length, 12)}` : 0} of {productsArr.length} results
      </div>
      {/* Product grid */}
      <div className="ml-[120px] mr-[120px] mb-16 grid grid-cols-2 md:grid-cols-3 gap-y-9 gap-x-2 md:gap-x-4">
        {filtered.slice(0, 12).map(product => (
          <ConsumerProduct product={product} key={product.id} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center text-gray-400 mt-10">No results found.</div>
      )}
    </div>
  );
}