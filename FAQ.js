import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../Styles.css"; // Custom CSS for animations and background image

const FAQ = () => {
  const faqItems = [
    {
      question: "What is the best time to visit the Taj Mahal?",
      answer:
        "The best time to visit the Taj Mahal is during the cooler months, from October to March. Early mornings or late afternoons provide the best lighting and avoid the crowds.",
    },
    {
      question: "How can I book a tour?",
      answer:
        "You can easily book a tour through our website. Visit the 'Book Now' section, select your preferred package, and follow the booking process.",
    },
    {
      question: "Is the Taj Mahal open on Fridays?",
      answer:
        "No, the Taj Mahal remains closed to tourists on Fridays as it is reserved for prayer services at the nearby mosque.",
    },
    {
      question: "What are the entry fees for the Taj Mahal?",
      answer:
        "Entry fees vary for international tourists, SAARC/BIMSTEC nationals, and Indian nationals. Check the official website for the most up-to-date pricing.",
    },
    {
      question: "Can I take pictures inside the Taj Mahal?",
      answer:
        "Photography is allowed in the gardens and exterior, but taking pictures inside the main mausoleum is prohibited to preserve the sanctity of the site.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container text-center">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <Accordion className="faq-accordion" defaultActiveKey="0" flush>
          {faqItems.map((item, index) => (
            <Accordion.Item eventKey={String(index)} key={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body className="faq-answer">{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
