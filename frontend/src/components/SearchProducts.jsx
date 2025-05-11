import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import ConsumerProduct from "./ConsumerProduct";
import { CartContext } from '../contexts/CartContext';

export default function SearchProducts() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Relevance");
  const [productsArr, setProductsArr] = useState([]);
  const { addToCart2 } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProductsArr(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const sorted = [...productsArr].sort((a, b) => {
    if (sort === "Price: Low to High") return a.price - b.price;
    if (sort === "Price: High to Low") return b.price - a.price;
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
          <div key={product.id}>
            <ConsumerProduct product={product} />
            <button
              onClick={() => addToCart2(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center text-gray-400 mt-10">No results found.</div>
      )}
    </div>
  );
}