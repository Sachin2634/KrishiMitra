import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ProductDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${_id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-2xl text-blue-600">Loading product...</div>;
  }

  if (error || !product) {
    return <div className="p-10 text-2xl text-red-600">{error || 'Product not found'}</div>;
  }

  return (
    <div className="min-h-screen bg-white p-8 flex flex-col items-center">
      {/* Back button */}
      <button
        className="mb-4 text-green-800 hover:underline self-start"
        onClick={() => navigate(-1)}
      >
        &larr; Back to products
      </button>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl border rounded-xl p-6 bg-white shadow-md">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center border rounded bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="h-52 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="text-xl text-gray-700 mb-1">{product.category}</div>
            <div className="text-2xl font-serif">{product.name}</div>
            <div className="text-base text-gray-600 mt-1 mb-1">{product.description}</div>
            <div className="text-base mb-1 mt-3">{product.weight}</div>
            <div className="text-2xl font-semibold mb-1">₹{product.price}</div>
            <div className="text-sm mb-3">By <span className="text-green-700">{product.seller}</span></div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-1 text-lg">★</span>
              <span className="font-semibold text-base">{product.rating}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-1">
            <button className="flex items-center bg-green-100 border border-green-500 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition text-base">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm2-2V7a5 5 0 0110 0v4m-4 8a4 4 0 004-4v-5a4 4 0 00-8 0v5a4 4 0 004 4z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add to Wishlist
            </button>
            <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition text-base">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path d="M8 12h8M12 8v8" stroke="currentColor" />
              </svg>
              Add to Bag
            </button>
          </div>
        </div>
      </div>

      {/* Details section */}
      <div className="mt-7 w-full max-w-3xl border rounded-xl bg-white p-6 shadow">
        <div className="font-semibold mb-1 text-[18px]">Storage Instructions</div>
        <div className="mb-3">{product.storage}</div>
        <div className="font-semibold mb-1 text-[18px]">Nutritional Values</div>
        <ul className="list-disc ml-5">
          {product.nutrition.map((line, i) => (
            <li key={i} className="my-1">{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}