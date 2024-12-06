// TourList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHotel, FaTaxi, FaMapMarkerAlt } from "react-icons/fa";
import "./TourList.css"; // Add your styles here

const TourList = () => {
  const navigate = useNavigate();

  const tourData = [
    {
      id: 1,
      title: "Imperial Discovery Tour",
      image: "/images/tour1.jpg",
    },
    {
      id: 2,
      title: "Dawn of Love Tour",
      image: "/images/tour2.jpg",
    },
    {
      id: 3,
      title: "Legacy of Love Tour",
      image: "/images/tour3.jpg",
    },
    {
      id: 4,
      title: "Sunset Serenity Tour",
      image: "/images/tour4.jpg",
    },
  ];

  const handleViewDetails = (tour) => {
    navigate("/tour-details", {
      state: { title: tour.title, image: tour.image },
    });
  };

  return (
    <div className="tour-list">
      {tourData.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.title} className="tour-card-img" />
          <h3>{tour.title}</h3>
          <div className="icons">
            <FaHotel />
            <FaTaxi />
            <FaMapMarkerAlt />
          </div>
          <button onClick={() => handleViewDetails(tour)}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default TourList;
