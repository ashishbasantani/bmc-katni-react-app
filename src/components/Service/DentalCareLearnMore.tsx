import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LearnMore.css";

const DentalCareLearnMore = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Navigate = useNavigate();

  return (
    <div className="service-details">
      {/* HERO */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <span className="badge">Complete Oral Health Solutions</span>

          <h1>Dental Care</h1>
          <h3>Healthy Smiles with Precision & Comfort</h3>

          <p>
            Our Dental Care Department offers accurate diagnosis, advanced
            treatment, and preventive services for all oral health needs using
            modern technology and expert care.
          </p>

          <div className="hero-actions">
            <button className="primary-btn"
            onClick={() =>
              Navigate("/book_appointment", {
                state: { department: "Dental Care" },
              })
            }>Book Appointment</button>
            <button className="outline-btn" onClick={() => {
    window.location.href = "tel:+919300220620";
  }}>Call Now</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Us</h2>
          <p className="subtitle">
            Trusted dental care with comfort, precision, and care
          </p>

          <div className="choose-grid">
            <div className="choose-card">
              <h4>Advanced Dental Care</h4>
              <p>
                Modern equipment for accurate diagnosis and effective treatment.
              </p>
            </div>

            <div className="choose-card">
              <h4>Experienced Dentists</h4>
              <p>Qualified specialists providing care for all age groups.</p>
            </div>

            <div className="choose-card">
              <h4>Painless & Preventive Approach</h4>
              <p>Comfort-focused treatments with long-term oral health goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="conditions-section">
        <div className="container conditions-wrapper">
          <div className="conditions-left">
            <h2>Conditions We Treat</h2>
            <p className="subtitle">
              Complete dental solutions under one roof
            </p>

            <ul className="conditions-list">
              <li>Tooth decay & cavities</li>
              <li>Gum diseases (gingivitis, periodontitis)</li>
              <li>Tooth pain & sensitivity</li>
              <li>Dental infections & abscess</li>
              <li>Misaligned teeth & bite issues</li>
              <li>Missing or damaged teeth</li>
              <li>Oral hygiene & preventive care</li>
              <li>Pediatric dental problems</li>
            </ul>
          </div>

          <div className="conditions-right">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
              alt="Dental care"
            />
            {/* If you want the CSS background version instead of <img>, use:
                <div className="medicine-hero-banner" aria-label="Dental care" />
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Common questions about our dental care services
          </p>

          <div className="faq-list">
            <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(0)}
              >
                Is dental treatment painful?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  We use modern techniques and anesthesia to ensure treatments
                  are safe and as comfortable as possible.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(1)}
              >
                Do you treat children?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  Yes, we offer gentle and specialized dental care for children
                  of all ages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DentalCareLearnMore;
