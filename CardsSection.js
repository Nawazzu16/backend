import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewCardsSection.css"; // Updated CSS file

const TourCard = ({ image, title, description, price, label, redirectTo }) => {
  const navigate = useNavigate();

  const handleCheckPricing = () => {
    navigate(redirectTo);
  };

  return (
    <div className="tour-card">
      <div className="tour-card-img-wrapper">
        <img src={image} className="tour-card-img-top" alt={title} />
        <div className="tour-card-label">{label}</div>
      </div>
      <div className="tour-card-body text-center">
        <h5 className="tour-card-title">{title}</h5>
        <p className="tour-card-text">{description}</p>
        <div className="tour-card-price-wrapper">
          <p className="tour-card-price">${price}</p>
          <p className="tour-card-price-text">Price starting from: ${price}</p>
          <div className="tour-card-price-arrow"></div>
        </div>
        <button
          className="tour-card-btn mt-3"
          onClick={handleCheckPricing}
        >
          Check Pricing Now
        </button>
      </div>
    </div>
  );
};

const CardsSection = () => {
  return (
    <section className="tour-cards-section my-5">
      <div className="container">
        <h2 className="tour-section-heading text-center mb-4">
          Our Tour Packages
        </h2>
        <div className="tour-cards-wrapper">
          <TourCard
            image="/images/x66.jpg"
            title="Sunrise Tour"
            description="A breathtaking experience watching the sun rise over the Taj Mahal."
            price="399"
            label="Best Seller"
            redirectTo="/classic-tour"
          />
          <TourCard
            image="/images/x51.jpg"
            title="Tour By Car"
            description="Travel in comfort with a guided car tour to the Taj Mahal."
            price="299"
            label="Popular Tour"
            redirectTo="/TajMahalTourByCar"
          />
          <TourCard
            image="/images/x41.jpg"
            title="Tour By Train"
            description="Explore the Taj Mahal by train, with a guided tour included."
            price="349"
            label="Popular Tour"
            redirectTo="/TajMahalTourByTrain"
          />
          <TourCard
            image="/images/x65.jpg"
            title="Overnight Tour"
            description="Stay overnight and explore the Taj Mahal with an extended tour."
            price="499"
            label="Best Seller"
            redirectTo="/TajMahalOvernightTour"
          />
          <TourCard
            image="/images/x69.jpeg"
            title="Luxury Tour"
            description="Indulge in a luxury experience with 5-star accommodations and exclusive access."
            price="799"
            label="Hot Tour"
            redirectTo="/TajMahalLuxuryTour"
          />
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
