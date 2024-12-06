import React from "react";
import TourPackagePage from "./TourPackagePage";

const ClassicTour = () => {
  const facilities = [
    { title: "5-Star Hotel", description: "Luxurious accommodation with premium amenities." },
    { title: "Expert Guide", description: "Knowledgeable guides for an unforgettable experience." },
    { title: "Complimentary Breakfast", description: "Enjoy a delicious start to your day." },
    { title: "Airport Transfers", description: "Convenient pickup and drop-off services." },
    { title: "Free WiFi", description: "Stay connected with high-speed internet." },
  ];

  const highlights = [
    "Sunrise at Taj Mahal",
    "Explore Agra Fort",
    "Yamuna River Boat Ride",
    "Exclusive Photo Session",
    "Local Cuisine Dinner",
  ];

  const itinerary = "Day 1: Arrival\nDay 2: Taj Mahal Tour\nDay 3: Agra Fort Visit\nDay 4: Departure";

  const inclusions = [
    "All Entry Tickets",
    "Daily Breakfast",
    "Private Transportation",
    "Guide Services",
    "24/7 Support",
  ];

  return (
    <TourPackagePage
     // image="/images/x61.jpg"
      title="Taj Mahal Sunrise Tour"
      description="Experience the Taj Mahal at sunrise and explore Agra's iconic sites with our exclusive guided tour."
      facilities={facilities}
      highlights={highlights}
      itinerary={itinerary}
      inclusions={inclusions}
    />
  );
};

export default ClassicTour;
