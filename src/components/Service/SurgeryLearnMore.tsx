import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LearnMore.css";

const SurgeryLearnMore = () => {
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
          <span className="badge">Advanced Surgical Care</span>

          <h1>Surgery Department</h1>
          <h3>Precision, Safety & Expert Care</h3>

          <p>
            Our Surgery Department provides advanced surgical procedures with
            experienced surgeons, modern infrastructure, and patient-focused
            care to ensure safe and successful outcomes.
          </p>

          <div className="hero-actions">
            <button className="primary-btn"
            onClick={() =>
              Navigate("/book_appointment", {
                state: { department: "Surgery" },
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
            Trusted surgical expertise with modern facilities
          </p>

          <div className="choose-grid">
            <div className="choose-card">
              <h4>Advanced Operation Theatres</h4>
              <p>State-of-the-art OT with strict safety protocols.</p>
            </div>

            <div className="choose-card">
              <h4>Experienced Surgeons</h4>
              <p>Highly qualified surgeons across multiple specialties.</p>
            </div>

            <div className="choose-card">
              <h4>Post-Operative Care</h4>
              <p>Comprehensive recovery and rehabilitation support.</p>
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
              Comprehensive surgical solutions under one roof
            </p>

            <ul className="conditions-list">
              <li>General surgeries</li>
              <li>Laproscopic surgeries</li>
              <li>Minor and major surgical procedures </li>
              <li>Department of obstetrics and gynecology</li>
              <li>Orthopedic surgeries</li>
              <li>Trauma and emergency surgeries</li>
            </ul>
          </div>

          <div className="conditions-right">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
              alt="Surgical care"
            />
            {/* If using background banner instead:
                <div className="hero-banner" aria-label="Surgical care" />
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Common questions about surgical procedures
          </p>

          <div className="faq-list">
            <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(0)}
              >
                Is surgery safe?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  Yes. Our surgeries are performed by experienced surgeons using
                  advanced technology with strict safety protocols.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(1)}
              >
                How long is the recovery period?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
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
