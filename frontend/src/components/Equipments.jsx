// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Equipment from './Equipment';

// export default function Equipments() {
//   const [search, setSearch] = useState('');
//   const [data, setData] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//   const fetchEquipments = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/equipment'); // Adjust URL if needed
//       console.log(response.data); // Log the response to check its structure
//       if (Array.isArray(response.data)) {
//         setData(response.data);
//       } else {
//         console.error('Expected an array but got', response.data);
//         setError('Unexpected response format');
//       }
//     } catch (error) {
//       console.error('Error fetching equipments:', error);
//       setError('Failed to load equipments');
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchEquipments();
// }, []);

//   const filtered = data.filter(
//     p =>
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.location.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen w-full px-4 py-10">
//       <div className="w-full text-center mb-[39px] jomolhari-light text-[39px]">Equipments on Rent</div>
//       {/* Search Bar */}
//       <form
//         className="flex justify-center mb-12"
//         onSubmit={e => e.preventDefault()}
//       >
//         <div className="rounded-xl border-1">
//           <input
//             type="text"
//             placeholder="Search"
//             className="w-[60%] max-w-[450px] rounded-xl py-3 px-5 text-xl font-serif outline-none mr-8"
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="bg-green-500 hover:bg-green-700 text-white px-8 py-2 rounded-xl text-xl font-serif border-2 border-white"
//           >
//             Search
//           </button>
//         </div>
//       </form>

//       {/* Grid of Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
//         {filtered.map(product => (
//           <Equipment key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Equipment from './Equipment';
import { CartContext } from '../contexts/CartContext';

export default function Equipments() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/equipment');
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('Expected an array but got', response.data);
          setError('Unexpected response format');
        }
      } catch (error) {
        console.error('Error fetching equipments:', error);
        setError('Failed to load equipments');
      } finally {
        setLoading(false);
      }
    };
    fetchEquipments();
  }, []);

  const filtered = data.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full px-4 py-10">
      <div className="w-full text-center mb-[39px] jomolhari-light text-[39px]">Equipments on Rent</div>
      {/* Search Bar */}
      <form className="flex justify-center mb-12" onSubmit={e => e.preventDefault()}>
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
          <div key={product.id}>
            <Equipment product={product} />
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}