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