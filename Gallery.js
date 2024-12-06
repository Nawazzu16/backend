import React, { useState, useEffect } from 'react';
import './Gallery.css';

const images = [
  "/images/x51.jpg",
  "/images/x52.jpg",
  "/images/x54.jpg", 
  "/images/x55.jpg",
  "/images/x56.jpg",
  "/images/x57.jpg",
  "/images/x58.jpg", 
  "/images/x60.jpg"
];

const shuffleImages = (imageArray) => {
  return [...imageArray].sort(() => Math.random() - 0.5); // Simple shuffling function
};

const Gallery = () => {
  const [shuffledImages, setShuffledImages] = useState(images);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledImages(shuffleImages(images));
    }, 3000); // Shuffle every 3 seconds
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-grid">
          {shuffledImages.slice(0, 16).map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
