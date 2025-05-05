import React, { useState } from "react";
import Equipment from "./Equipment";

const data = [
  {
    id: 1,
    name: "Tractor",
    price: 8000,
    location: "Punjab"
  },
  {
    id: 2,
    name: "Rice Thresher",
    price: 5000,
    location: "Uttar Pradesh"
  },
  {
    id: 3,
    name: "Rotavator",
    price: 3500,
    location: "Haryana"
  },
  {
    id: 4,
    name: "Seeder",
    price: 4200,
    location: "Maharashtra"
  },
  {
    id: 5,
    name: "Sprayer",
    price: 1500,
    location: "Madhya Pradesh"
  },
  {
    id: 6,
    name: "Cultivator",
    price: 3000,
    location: "Karnataka"
  },
  {
    id: 7,
    name: "Combine Harvester",
    price: 12000,
    location: "Telangana"
  },
  {
    id: 8,
    name: "Baler",
    price: 4500,
    location: "Rajasthan"
  }
];

export default function Equipments() {
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full px-4 py-10">
        <div className="w-full text-center mb-[39px] jomolhari-light text-[39px]">Equipments on Rent</div>
      {/* Search Bar */}
      <form
        className="flex justify-center mb-12"
        onSubmit={e => e.preventDefault()}
      >
        <div className="rounded-xl border-1">
        <input
          type="text"
          placeholder="Search"
          className="w-[60%] max-w-[450px] rounded-xl py-3 px-5 text-xl font-serif outline-none mr-8"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white px-8 py-2 rounded-xl text-xl font-serif border-2 border-white"
        >
          Search
        </button>
        </div>
      </form>
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
        {filtered.map(product => (
          <Equipment key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}