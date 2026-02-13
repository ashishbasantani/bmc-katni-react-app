import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LearnMore.css";
import orthoBanner from "../../assets/orthopedic-side-banner.jpg";


const OrthopedicsLearnMore = () => {
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
          <span className="badge">Advanced Orthopaedic Care</span>

          <h1>Orthopaedics</h1>
          <h3>Movement, Strength & Pain-Free Living</h3>

          <p>
            Our Orthopaedics Department specializes in diagnosis, treatment, and
            rehabilitation of bone, joint, and muscle conditions using modern
            techniques and expert care.
          </p>

          <div className="hero-actions">
            <button className="primary-btn"
            onClick={() =>
              Navigate("/book_appointment", {
                state: { department: "Orthopaedics" },
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
            Trusted orthopaedic care with advanced facilities
          </p>

          <div className="choose-grid">
            <div className="choose-card">
              <h4>Advanced Orthopaedic Care</h4>
              <p>
                Modern diagnostics and treatment for bone and joint disorders.
              </p>
            </div>

            <div className="choose-card">
              <h4>Experienced Orthopaedic Surgeons</h4>
              <p>
                Skilled specialists for fractures, joint replacements, and
                sports injuries.
              </p>
            </div>

            <div className="choose-card">
              <h4>Rehabilitation & Physiotherapy</h4>
              <p>
                Comprehensive recovery programs for mobility and strength.
              </p>
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
              Complete orthopaedic solutions under one roof
            </p>

            <ul className="conditions-list">
              <li>Bone fractures & trauma</li>
              <li>Joint pain & arthritis</li>
              <li>Back & spine problems</li>
              <li>Sports injuries</li>
              <li>Knee & hip replacement</li>
              <li>Ligament & tendon injuries</li>
            </ul>
          </div>

          <div className="conditions-right">
            <img
  src={orthoBanner}
  alt="Orthopaedic care"
  className="conditions-image"
/>
            {/* Background version (optional)
                <div className="hero-banner" aria-label="Orthopaedic care" />
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="subtitle">
            Common questions about orthopaedic treatments
          </p>

          <div className="faq-list">
            <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(0)}
              >
                Do joint pains always require surgery?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  No. Many joint and bone conditions can be treated with
                  medication, physiotherapy, and lifestyle changes.
                </p>
              </div>
            </div>

            <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFAQ(1)}
              >
                How long does recovery take after surgery?
                <span className="faq-icon" />
              </button>

              <div className="faq-answer">
                <p>
                  Recovery depends on the procedure, but our team provides
                  complete rehabilitation support for faster recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrthopedicsLearnMore;
