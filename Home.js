import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles.css"; // Import your CSS file
import  CardsSection from '../components/CardsSection';
import WhyChooseUs from "../components/WhyChooseUs"; // Adjust according to the actual path
import FAQ from "../components/FAQ";
import OurPartners from "../components/OurPartners";
import Testim from "../components/Testim";
import AnimatedBanner from "../components/AnimatedBanner";
import Taj1 from "../components/Taj1";
import WhatsAppLink from "../components/WhatsAppLink";
import CustomChatbot from "../components/CustomChatbot";
const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* Existing Carousel Section */}
      <section className="home-section text-center">
        <div className="container my-5">
        <h1
  style={{
    margin: "10px auto",
    padding: "20px 20px",
    marginTop: "50px",
    textAlign: "center",
    lineHeight: "1.4",
    color: "black",
    borderRadius: "10px",
    maxWidth: "80%",
    fontStyle: "italic", // Slightly italic
    fontFamily: "'Merriweather', serif", // Attractive serif font
    animation: "glowingText 6s infinite", // Apply the animation
  }}
>
  "Behold the Taj: Where Love and Legacy Unite."
</h1>

<p
  style={{
    marginBottom: "-25px",
    fontSize: "18px",
    margin: "0 auto",
    marginTop: "-20px",
    textAlign: "center",
    lineHeight: "1.6",
    maxWidth: "80%",
    fontFamily: "'Open Sans', sans-serif", // Clean and modern sans-serif font
    animation: "contrastGlow 3s infinite ease-in-out", // Apply the animation
  }}
>
  Discover your next adventure with us! We provide top-rated tours for every kind of traveler.
</p>


        </div>
        <Carousel
          className="carousel-fade my-4"
          interval={3000}
          controls={false}
          indicators={true}
        >
              <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pexels-chee-huey-wong-12792-62348.jpg"
              alt="Travel Adventure 3"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="fade-in-text">Immerse in the Scenic Wonder</h3>
              <p className="fade-in-text">Explore Taj like never before.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/akbars-tomb-sikandra-1920x700.jpg"
              alt="Travel Adventure 1"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="fade-in-text">Explore Majestic Akbar's Tomb</h3>
              <p className="fade-in-text">
                Visit the beautiful mausoleum of the great Mughal emperor.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/archiecture-agra-fort.jpg"
              alt="Travel Adventure 2"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="fade-in-text">
                Discover the Grandeur of Agra Fort
              </h3>
              <p className="fade-in-text">
                A UNESCO World Heritage site that echoes history.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
<CustomChatbot/>
<WhatsAppLink/>

<Taj1/>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

<AnimatedBanner/>

      <CardsSection />

      <Testim/>

<OurPartners/>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
