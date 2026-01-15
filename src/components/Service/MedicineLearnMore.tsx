import React, { useState } from "react";
import "./MedicineLearnMore.css";
import { useNavigate } from "react-router-dom";

const MedicineLearnMore = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Navigate = useNavigate();

  return (
    <div className="service-details">

      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="container service-hero-content align-left-desktop">
          <span className="badge">Premium Healthcare Service</span>

          <h1>General Medicine</h1>
          <h3>Comprehensive Healthcare Services</h3>

          <p>
            Our general medicine department offers holistic care for a wide
            range of health conditions with experienced physicians.
          </p>

          <div className="hero-actions">
            <button 
            className="primary-btn" 
            onClick={() => {
              const phone = "919300220620";
              const text = encodeURIComponent("Hello, I would like to book an appointment for Medicine Department.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}>Book Appointment</button>
            <button className="outline-btn" onClick={() => {
    window.location.href = "tel:+919300220620";
  }}>Call Now</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p className="subtitle">
            World-class care with advanced technology and experienced specialists
          </p>

          <div className="choose-grid">
            {/* align cards left with hero on desktop */}
            <div className="choose-card">
              <h4>Quick Diagnosis</h4>
              <p>Rapid and accurate diagnosis using advanced technology</p>
            </div>

            <div className="choose-card">
              <h4>Expert Doctors</h4>
              <p>Highly qualified and experienced physicians</p>
            </div>

            <div className="choose-card">
              <h4>Preventive Care</h4>
              <p>Health screenings and preventive medicine</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="conditions-section">
        <div className="condition-container conditions-wrapper">

          <div className="conditions-left">
            <h2>Conditions We Treat</h2>
            <p className="subtitle">
              Comprehensive care for a wide range of conditions
            </p>

            <ul className="conditions-list">
              <li>Fever and infections</li>
              <li>Hypertension control</li>
              <li>Digestive disorders</li>
              <li>Diabetes management</li>
              <li>Respiratory conditions</li>
              <li>Chronic disease management</li>
            </ul>
          </div>

           <div className="conditions-right">
            <div className="medicine-hero-banner" aria-label="Medicine care"></div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Common questions about our general medicine services
          </p>

          <div className="faq-list align-left-desktop">

            {/* FAQ 1 */}
            <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(0)}
              >
                What conditions do you treat?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  We treat fever, infections, chronic diseases, diabetes,
                  hypertension, and provide preventive care and health check-ups.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(1)}
              >
                Do I need an appointment?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  Yes, we recommend booking an appointment for better service.
                  However, we also accommodate walk-in patients based on availability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicineLearnMore;
