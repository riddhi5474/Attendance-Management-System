import React, { useState } from 'react';
import './ImageSection.css';
function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="upload-section">
      <h2>Upload Your Image</h2>
      <div className="upload-btn-wrapper">
        <label className="custom-file-upload">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <div  class="gradient-button choose-image">
            Choose an Image
            </div>
        </label>
      </div>
      {selectedImage && (
        <div className="uploaded-image">
          <img src={selectedImage} alt="Uploaded Image" />
        </div>
      )}
      
    </div>
  );
 
}

export default ImageUpload;
