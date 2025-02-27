import React, { useState, useEffect } from "react";
import "./Gallery.css"
const images = import.meta.glob("../../assets/images/*.(png|jpeg|svg|jpg)", { eager: true });

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Convert import.meta.glob() result to an array of image paths
    setImageUrls(Object.values(images).map((img) => img.default));
  }, []);

  return (
    <div className="gallery">
      {imageUrls.map((src, index) => (
        <img key={index} src={src} alt={`Gallery Image ${index}`} />
      ))}
    </div>
  );
};

export default Gallery;