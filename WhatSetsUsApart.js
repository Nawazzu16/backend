import React from 'react';
import { GiWingedEmblem } from 'react-icons/gi'; // New wing icon
import './WhatSetsUsApart.css'; // Ensure to create the CSS file

const WhatSetsUsApart = () => {
  return (
    <section className="apart-section">
      <div className="apart-overlay">
        <div className="apart-container">
          <p className="apart-subtitle">Discover Our Uniqueness</p> {/* Subtitle */}
          <div className="apart-title-container">
            <GiWingedEmblem className="wing-icon" /> {/* New Wing Icon */}
            <h2 className="apart-title">What Sets Us Apart</h2>
            <GiWingedEmblem className="wing-icon" />
          </div>
          <div className="apart-description">
            <p>
              Our team is dedicated to providing exceptional services, ensuring a seamless and unforgettable experience. 
              We go above and beyond to cater to your specific needs, offering personalized solutions for every client.
            </p>
            <p>
              We pride ourselves on our attention to detail and our commitment to excellence. From the moment you contact us, 
              we strive to deliver unmatched quality, reliability, and professionalism in every aspect of our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
