import React, { useState, useEffect } from 'react';
import '../Styles.css'; // Make sure to link your CSS

const OurPartners = () => {
  const logos = [
    { src: '/images/x1.png', alt: 'Partner 1' },
    { src: '/images/x2.png', alt: 'Partner 3' },
    { src: '/images/x3.png', alt: 'Partner 4' },
    { src: '/images/x63.png', alt: 'Partner 5' },
    { src: '/images/x49.png', alt: 'Partner 6' }
  ];

  const [currentLogos, setCurrentLogos] = useState(logos);

  // Swapping logic to rotate logos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogos(prevLogos => {
        const [first, ...rest] = prevLogos;
        return [...rest, first];
      });
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-wrapper">
        {currentLogos.map((logo, index) => (
          <div key={index} className="partner-box">
            <img src={logo.src} alt={logo.alt} className="partner-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
