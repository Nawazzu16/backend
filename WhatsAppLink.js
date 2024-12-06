import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon

const WhatsAppLink = () => {
  const whatsappNumber = "+918057666970"; // Replace with your business WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="whatsapp-container">
      <button className="whatsapp-btn" onClick={handleClick}>
        <FaWhatsapp size={24} />
        <span>WhatsApp Us</span>
      </button>
    </div>
  );
};

export default WhatsAppLink;
