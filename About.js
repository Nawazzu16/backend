import React from 'react';
import '../Styles.css'; // Ensure to link the CSS file
import './aboutus.css';
import Gallery from '../components/Gallery';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import Unique from '../components/Unique';
import WhatsAppLink from '../components/WhatsAppLink';

const About = () => {
  return (
    <>
      <section className="about-us-section">
        <div className="container">
          <div className="row">
            <div className="col-12 about-us-image-wrapper">
              <img
                src="/images/x4.jpg" // Ensure the image is in the public folder
                alt="About Us"
                className="about-us-image"
              />
              <div className="about-us-content">
                <h2 className="about-us-title">About Us</h2>
                <p
  style={{
    color: "black",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "0 auto",
    textAlign: "center",
    maxWidth: "80%",
  }}
>
  We are a passionate team dedicated to providing you with the best travel experiences. Our mission is to make your journey memorable and inspiring, offering top-notch services to explore the beauty of the world.
</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppLink/>
      <Unique/>
      <WhatSetsUsApart/>
      <Gallery/>
    </>
  );
};

export default About;
