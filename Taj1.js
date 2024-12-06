import React from 'react';
import "./Taj1.css"

const Taj1 = () => {
  return (
    <section className="taj-mahal-section">
      <div className="container">
        <div className="content-wrapper d-flex flex-wrap">
          {/* Left Side - Text Content */}
          <div className="text-content">
            <h4 className="subtitle">Discover the Beauty</h4>
            <h2 className="title">The Majestic Taj Mahal</h2>
            <p className="description">
            The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. It is one of the most revered architectural masterpieces in the world.
            The Taj Mahal stands as a timeless symbol of love and architectural brilliance. Its pristine white marble façade shimmers under the sun, reflecting shades of pink, orange, and gold at dawn and dusk. Intricate carvings and delicate inlay work of semi-precious stones enhance its beauty, showcasing the artistry of Mughal craftsmanship. 
            </p>
          </div>
          
          {/* Right Side - Image */}
          <div className="image-content">
            <img src="images/x5.jpg" alt="Taj Mahal" className="taj-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Taj1;
