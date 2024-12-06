import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./CustomChatbot.css";

const CustomChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { message: "Hello, How Can We Assist You?", type: "bot" },
  ]);

  const resetChatHistory = () => {
    setChatHistory([
      { message: "Hello, How Can We Assist You?", type: "bot" },
    ]);
    setSelectedOption("");
  };

  const handleToggleChatbot = () => {
    if (isOpen) {
      setIsOpen(false); // Close the chat window
    } else {
      resetChatHistory();
      setIsOpen(true); // Open the chat window
    }
  };

  const handleOptionClick = (option) => {
    let response = "";
    switch (option) {
      case "Package Names":
        response = (
          <div className="response-layout">
            <h4>Available Packages:</h4>
            <ul>
              <li>Sunrise Tour</li>
              <li>Tour By Car</li>
              <li>Tour By Train</li>
              <li>Overnight Tour</li>
              <li>Luxury Tour</li>
            </ul>
          </div>
        );
        break;
      case "FAQ":
        response = (
          <div className="response-layout">
            <h4>Frequently Asked Questions:</h4>
            <ul>
              <li>Best time to visit Taj Mahal? - Sunrise for the best view.</li>
              <li>Is photography allowed? - Yes, but not inside the mausoleum.</li>
              <li>What are the ticket prices? - $20 for international visitors.</li>
            </ul>
          </div>
        );
        break;
      case "Transportation Options":
        response = (
          <div className="response-layout">
            <h4>Available Transportation Options:</h4>
            <ul>
              <li>Private Car: Comfortable and convenient.</li>
              <li>Luxury Bus: Affordable for groups.</li>
              <li>Train: Fast and scenic routes.</li>
            </ul>
          </div>
        );
        break;
      case "Nearby Attractions":
        response = (
          <div className="response-layout">
            <h4>Nearby Attractions:</h4>
            <ul>
              <li>Agra Fort: Historical monument just 2 km away.</li>
              <li>Mehtab Bagh: Beautiful garden with a view of the Taj.</li>
              <li>Fatehpur Sikri: Ancient city an hour's drive away.</li>
            </ul>
          </div>
        );
        break;
      case "Special Offers":
        response = (
          <div className="response-layout">
            <h4>Special Offers:</h4>
            <ul>
              <li>Book a Sunrise Tour and get 10% off on a Car Tour!</li>
              <li>Group discounts available for groups of 5 or more.</li>
              <li>Refer a friend and earn $20 credit on your next booking.</li>
            </ul>
          </div>
        );
        break;
      default:
        response = "I'm here to help! Please select an option.";
    }
    setChatHistory((prev) => [
      ...prev,
      { message: option, type: "user" },
      { message: response, type: "bot" },
    ]);
    setSelectedOption(option);
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <div className="chatbot-icon" onClick={handleToggleChatbot}>
        💬
      </div>

      {/* Chatbot Container */}
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <h4>Chatbot</h4>
          <button onClick={handleToggleChatbot}>&times;</button>
        </div>

        <div className="chat-body">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-message ${chat.type === "bot" ? "bot" : "user"}`}
            >
              {chat.message}
            </div>
          ))}
        </div>

        {/* Options Menu */}
        {!selectedOption && (
          <div className="chat-options">
            <button onClick={() => handleOptionClick("Package Names")}>
              Package Names
            </button>
            <button onClick={() => handleOptionClick("FAQ")}>FAQ</button>
            <button onClick={() => handleOptionClick("Transportation Options")}>
              Transportation Options
            </button>
            <button onClick={() => handleOptionClick("Nearby Attractions")}>
              Nearby Attractions
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="chat-footer">
          <p>
            <b>Contact Us</b>
            <br />
            <span style={{ color: "#ffd700" }}>
              <FaPhoneAlt /> +918057666970
            </span>
            <br />
            <span style={{ color: "#ffd700" }}>
              <FaEnvelope /> tajmahaljourneys1@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomChatbot;
