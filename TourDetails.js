// TourDetails.js
import React from "react";
import { useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./TourDetails.css"; // Add your styles here

const TourDetails = () => {
  const location = useLocation();
  const { title, image } = location.state || {};

  const tourData = {
    "Imperial Discovery Tour": {
      description:
        "Embark on a luxurious journey through India’s imperial history with our Imperial Discovery Tour. Enjoy stays at opulent hotels, private tours with certified guides, and an experience designed to offer comfort and grandeur.",
      services: [
        "Luxury Hotel Accommodations",
        "Private Cab Services",
        "Certified Personal Guide",
        "Gourmet Dining Experiences",
        "Fast-Track Access to Attractions",
        "24/7 Personalized Assistance",
      ],
      premiumSection:
        "This tour includes exclusive VIP access to heritage sites, helicopter rides, and evening cultural shows designed to give you a true royal experience.",
    },
    "Dawn of Love Tour": {
      description:
        "Celebrate love with our romantic Dawn of Love Tour. Begin your day with a breathtaking sunrise at the Taj Mahal, followed by a stay in luxury hotels.",
      services: [
        "Luxury Hotels",
        "Private Sunrise Viewing",
        "Candlelit Dinners",
        "Personal Tour Guide",
        "Luxury Transportation",
      ],
      premiumSection:
        "In addition, couples will enjoy a private boat ride on the Yamuna River and exclusive spa treatments.",
    },
    "Legacy of Love Tour": {
      description:
        "Discover the timeless beauty of the Taj Mahal with our Legacy of Love Tour, perfect for those looking to explore India’s most famous monument in style.",
      services: [
        "Premium Hotel Stays",
        "Private Cab Services",
        "Personal Guide",
        "Historical Site Visits",
        "Exclusive Cultural Experiences",
      ],
      premiumSection:
        "This package includes a sunset visit to the Taj Mahal and private dinner overlooking the Yamuna River.",
    },
    "Sunset Serenity Tour": {
      description:
        "Unwind with our Sunset Serenity Tour, where you’ll experience a magical evening at the Taj Mahal with premium services.",
      services: [
        "Luxury Hotels",
        "Private Cab Services",
        "Sunset Viewing",
        "Certified Tour Guides",
        "Dinner at a Heritage Hotel",
      ],
      premiumSection:
        "This package also offers access to a private rooftop overlooking the Taj Mahal for an unforgettable sunset experience.",
    },
  };

  const tour = tourData[title];

  if (!tour) {
    return <div className="tour-details">Tour information is not available.</div>;
  }

  return (
    <div className="tour-details">
      <div className="tour-image-container">
        <img src={image} alt={title} className="tour-image" />
      </div>
      <h2>{title}</h2>
      <p>{tour.description}</p>

      <h3>What We Include:</h3>
      <ul className="included-list">
        {tour.services.map((service, index) => (
          <li key={index}>
            <FaCheckCircle className="check-icon" /> {service}
          </li>
        ))}
      </ul>

      <div className="premium-section">
        <h3>Premium Experience:</h3>
        <p>{tour.premiumSection}</p>
      </div>
    </div>
  );
};

export default TourDetails;
