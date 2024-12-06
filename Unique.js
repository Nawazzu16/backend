import React from 'react';
import './Unique.css';

const Unique = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="content-wrapper d-flex flex-wrap">
          {/* Left Side - Image */}
          <div className="image-content">
            <img src="images/x50.jpg" alt="About Us" className="about-image" />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-content">
  <h4
    style={{
      color: "black",
      marginBottom: "10px",
    }}
  >
    Who We Are !
  </h4>

  <h2
    style={{
      color: "black",
      marginBottom: "20px",
    }}
  >
    About TajMahal Journeys
  </h2>

  <p
    style={{
      color: "black",
      fontSize: "16px",
      lineHeight: "1.6",
      textAlign: "justify",
      marginBottom: "20px",
    }}
  >
    At TajMahal Journeys, we take immense pride in delivering unique experiences that connect you to the history, beauty, and grandeur of the Taj Mahal and its surroundings. Our team of dedicated professionals ensures your journey is seamless, memorable, and rich with authentic culture and hospitality.
  </p>

  <div className="mission-values">
    <h4
      style={{
        color: "black",
        marginBottom: "10px",
      }}
    >
      Our Mission
    </h4>

    <p
      style={{
        color: "black",
        fontSize: "16px",
        lineHeight: "1.6",
        marginBottom: "20px",
      }}
    >
      To make every journey a once-in-a-lifetime experience. We are committed to offering outstanding services, exceptional guides, and unforgettable tours.
    </p>

    <h4
      style={{
        color: "black",
        marginBottom: "10px",
      }}
    >
      Our Values
    </h4>

    <ul
      style={{
        color: "black",
        listStyleType: "none",
        padding: "0",
        marginBottom: "20px",
      }}
    >
      <li
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            color: "black",
          }}
        >
          ✅
        </span>
        Integrity
      </li>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            color: "black",
          }}
        >
          ✅
        </span>
        Customer Satisfaction
      </li>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            color: "black",
          }}
        >
          ✅
        </span>
        Authenticity
      </li>
      <li
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <span
          style={{
            marginRight: "10px",
            color: "black",
          }}
        >
          ✅
        </span>
        Safety
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Unique;
