import React from "react";
import { Link } from "react-router-dom";
import { FaHotel, FaTaxi, FaMapMarkerAlt } from "react-icons/fa";
import "./ImageCards.css";

const ImageCards = () => {
  const cardsData = [
    {
      id: 1,
      img: "/images/x22.jpg", // Make sure this path is correct
      title: "Imperial Discovery Tour",
      description:
        "An exclusive experience featuring luxury stays, cab services, and top-rated guides.",
    },
    {
      id: 2,
      img: "/images/x18.jpg",
      title: "Dawn of Love Tour",
      description:
        "A romantic getaway with beautiful scenery, luxury accommodations, and guided tours.",
    },
    {
      id: 3,
      img: "/images/x23.jpg",
      title: "Legacy of Love Tour",
      description:
        "Discover the timeless beauty of the Taj Mahal with personalized services.",
    },
    {
      id: 4,
      img: "/images/x17.jpg",
      title: "Sunset Serenity Tour",
      description:
        "Experience the serene sunset views with premium services and comfort.",
    },
    {
      id: 5,
      img: "/images/x21.jpg",
      title: "Timeless Beauty Escape",
      description:
        "A memorable escape with exclusive guides, luxury hotels, and unmatched comfort.",
    },
  ];

  return (
    <section className="image-card-section">
      <div className="container">
        <h2 className="exclusive-title">Our Exclusive Packages</h2>

        <div className="image-card-grid">
          {cardsData.map((card) => (
            <div className="image-card image-card-horizontal" key={card.id}>
              <img src={card.img} alt={card.title} />
              <div className="overlay">
                <h3 className="overlay-title">{card.title}</h3>
                <div className="icons">
                  <FaHotel className="icon" />
                  <FaTaxi className="icon" />
                  <FaMapMarkerAlt className="icon" />
                </div>
                {/* Use Link to navigate to the detailed tour page */}
                <Link
                  to={`/tour/${card.id}`}
                  state={{ image: card.img }}
                  className="details-button"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCards;
