import React from 'react';

function ProductImages({ formData, handleChange }) {
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    
    // Create image preview URLs
    const imageUrls = files.map((file) => URL.createObjectURL(file));

    // Use handleChange to update formData with the selected files
    handleChange({
      target: { name: 'images', value: imageUrls },
    });
  };

  return (
    <div className="max-w-xs mx-auto border border-gray-300 rounded-lg p-4 text-center">
      <h3 className="text-lg font-semibold mb-4">Product Images</h3>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
        className="mb-4 block mx-auto"
      />

      {formData.images && formData.images.length > 0 && (
        <div className="flex justify-center gap-2 flex-wrap">
          {formData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index}`}
              className="w-16 h-16 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImages;

// import React from 'react';
// import axios from 'axios';  // Uncomment if using Axios

// function ProductImages({ formData, setFormData }) {
//   const handleImageUpload = async (event) => {
//     const files = Array.from(event.target.files);

//     // Create a FormData object to send images
//     const formData = new FormData();
//     files.forEach(file => {
//       formData.append('images', file);
//     });

//     try {
//       // Send images to the server (replace with Fetch or Axios)
//       const response = await axios.post('http://localhost:5000/upload-images', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const uploadedImages = response.data.files.map(file => `http://localhost:5000/${file.path}`);
      
//       // Update formData with the uploaded images URLs
//       setFormData(prevFormData => ({
//         ...prevFormData,
//         images: uploadedImages,
//       }));
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   return (
//     <div className="max-w-xs mx-auto border border-gray-300 rounded-lg p-4 text-center">
//       <h3 className="text-lg font-semibold mb-4">Product Images</h3>

//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageUpload}
//         className="mb-4 block mx-auto"
//       />

//       {formData.images && formData.images.length > 0 && (
//         <div className="flex justify-center gap-2 flex-wrap">
//           {formData.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Product ${index}`}
//               className="w-16 h-16 object-cover rounded-md"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductImages;

// import React from 'react';
// import axios from 'axios';

// function ProductImages({ formData, setFormData }) {
//   const handleImageUpload = async (event) => {
//     const files = Array.from(event.target.files);

//     // Create a FormData object to send images
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append('image', file); // Assuming the field name 'image'
//     });

//     try {
//       // Send images to the server (adapt path to your correct endpoint)
//       const response = await axios.post('http://localhost:5000/api/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Assuming server responds with uploaded images info (adjust according to your backend response)
//       const uploadedImages = response.data.files.map(
//         (file) => `http://localhost:5000/uploads/${file.filename}`
//       );

//       // Update formData with the uploaded images URLs
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         images: uploadedImages,
//       }));
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   return (
//     <div className="max-w-xs mx-auto border border-gray-300 rounded-lg p-4 text-center">
//       <h3 className="text-lg font-semibold mb-4">Product Images</h3>

//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageUpload}
//         className="mb-4 block mx-auto"
//       />

//       {formData.images && formData.images.length > 0 && (
//         <div className="flex justify-center gap-2 flex-wrap">
//           {formData.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Product ${index}`}
//               className="w-16 h-16 object-cover rounded-md"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductImages;