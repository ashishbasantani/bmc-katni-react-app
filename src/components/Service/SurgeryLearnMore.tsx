import React, { useState } from "react";
import "./SurgeryLearnMore.css";

const SurgeryLearnMore = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="surgery-service-details">
      {/* HERO */}
      <section className="surgery-service-hero">
        <div className="surgery-container surgery-service-hero-content">
          <span className="surgery-badge">Advanced Surgical Care</span>

          <h1>Surgery Department</h1>
          <h3>Precision, Safety & Expert Care</h3>

          <p>
            Our Surgery Department provides advanced surgical procedures with
            experienced surgeons, modern infrastructure, and patient-focused
            care to ensure safe and successful outcomes.
          </p>

          <div className="surgery-hero-actions">
            <button className="surgery-primary-btn"
            onClick={() => {
              const phone = "919300220620";
              const text = encodeURIComponent("Hello, I would like to book an appointment for Surgery.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}>Book Appointment</button>
            <button className="surgery-outline-btn" onClick={() => {
    window.location.href = "tel:+919300220620";
  }}>Call Now</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="surgery-why-choose">
        <div className="surgery-container">
          <h2>Why Choose Us</h2>
          <p className="surgery-subtitle">
            Trusted surgical expertise with modern facilities
          </p>

          <div className="surgery-choose-grid">
            <div className="surgery-choose-card">
              <h4>Advanced Operation Theatres</h4>
              <p>State-of-the-art OT with strict safety protocols.</p>
            </div>

            <div className="surgery-choose-card">
              <h4>Experienced Surgeons</h4>
              <p>Highly qualified surgeons across multiple specialties.</p>
            </div>

            <div className="surgery-choose-card">
              <h4>Post-Operative Care</h4>
              <p>Comprehensive recovery and rehabilitation support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="surgery-conditions-section">
        <div className="surgery-container surgery-conditions-wrapper">
          <div className="surgery-conditions-left">
            <h2>Conditions We Treat</h2>
            <p className="surgery-subtitle">
              Comprehensive surgical solutions under one roof
            </p>

            <ul className="surgery-conditions-list">
              <li>General surgeries</li>
              <li>Laproscopic surgeries</li>
              <li>Minor and major surgical procedures </li>
              <li>Department of obstetrics and gynecology</li>
              <li>Orthopedic surgeries</li>
              <li>Trauma and emergency surgeries</li>
            </ul>
          </div>

          <div className="surgery-conditions-right">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              alt="Surgical care"
            />
            {/* If using background banner instead:
                <div className="surgery-hero-banner" aria-label="Surgical care" />
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surgery-faq-section">
        <div className="surgery-container">
          <h2 className="surgery-faq-title">Frequently Asked Questions</h2>
          <p className="surgery-faq-subtitle">
            Common questions about surgical procedures
          </p>

          <div className="surgery-faq-list">
            <div className={`surgery-faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="surgery-faq-question"
                onClick={() => toggleFAQ(0)}
              >
                Is surgery safe?
                <span className="surgery-faq-icon" />
              </button>

              <div className="surgery-faq-answer">
                <p>
                  Yes. Our surgeries are performed by experienced surgeons using
                  advanced technology with strict safety protocols.
                </p>
              </div>
            </div>

            <div className={`surgery-faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="surgery-faq-question"
                onClick={() => toggleFAQ(1)}
              >
                How long is the recovery period?
                <span className="surgery-faq-icon" />
              </button>

              <div className="surgery-faq-answer">
                <p>
                  Recovery depends on the procedure, but our team provides full
                  post-operative care and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurgeryLearnMore;
