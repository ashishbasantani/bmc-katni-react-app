import React, { useState } from "react";
import "./OrthopedicsLearnMore.css";
import orthoBanner from "../../assets/orthopedic-side-banner.jpg";


const OrthopedicsLearnMore = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ortho-service-details">
      {/* HERO */}
      <section className="ortho-service-hero">
        <div className="ortho-container ortho-service-hero-content">
          <span className="ortho-badge">Advanced Orthopaedic Care</span>

          <h1>Orthopaedics</h1>
          <h3>Movement, Strength & Pain-Free Living</h3>

          <p>
            Our Orthopaedics Department specializes in diagnosis, treatment, and
            rehabilitation of bone, joint, and muscle conditions using modern
            techniques and expert care.
          </p>

          <div className="ortho-hero-actions">
            <button className="ortho-primary-btn"
            onClick={() => {
              const phone = "919300220620";
              const text = encodeURIComponent("Hello, I would like to book an appointment for Orthopedics.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}>Book Appointment</button>
            <button className="ortho-outline-btn" onClick={() => {
    window.location.href = "tel:+919300220620";
  }}>Call Now</button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="ortho-why-choose">
        <div className="ortho-container">
          <h2>Why Choose Us</h2>
          <p className="ortho-subtitle">
            Trusted orthopaedic care with advanced facilities
          </p>

          <div className="ortho-choose-grid">
            <div className="ortho-choose-card">
              <h4>Advanced Orthopaedic Care</h4>
              <p>
                Modern diagnostics and treatment for bone and joint disorders.
              </p>
            </div>

            <div className="ortho-choose-card">
              <h4>Experienced Orthopaedic Surgeons</h4>
              <p>
                Skilled specialists for fractures, joint replacements, and
                sports injuries.
              </p>
            </div>

            <div className="ortho-choose-card">
              <h4>Rehabilitation & Physiotherapy</h4>
              <p>
                Comprehensive recovery programs for mobility and strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="ortho-conditions-section">
        <div className="ortho-container ortho-conditions-wrapper">
          <div className="ortho-conditions-left">
            <h2>Conditions We Treat</h2>
            <p className="ortho-subtitle">
              Complete orthopaedic solutions under one roof
            </p>

            <ul className="ortho-conditions-list">
              <li>Bone fractures & trauma</li>
              <li>Joint pain & arthritis</li>
              <li>Back & spine problems</li>
              <li>Sports injuries</li>
              <li>Knee & hip replacement</li>
              <li>Ligament & tendon injuries</li>
            </ul>
          </div>

          <div className="ortho-conditions-right">
            <img
  src={orthoBanner}
  alt="Orthopaedic care"
  className="ortho-conditions-image"
/>
            {/* Background version (optional)
                <div className="ortho-hero-banner" aria-label="Orthopaedic care" />
            */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ortho-faq-section">
        <div className="ortho-container">
          <h2 className="ortho-faq-title">Frequently Asked Questions</h2>
          <p className="ortho-subtitle">
            Common questions about orthopaedic treatments
          </p>

          <div className="ortho-faq-list">
            <div className={`ortho-faq-item ${activeIndex === 0 ? "active" : ""}`}>
              <button
                type="button"
                className="ortho-faq-question"
                onClick={() => toggleFAQ(0)}
              >
                Do joint pains always require surgery?
                <span className="ortho-faq-icon" />
              </button>

              <div className="ortho-faq-answer">
                <p>
                  No. Many joint and bone conditions can be treated with
                  medication, physiotherapy, and lifestyle changes.
                </p>
              </div>
            </div>

            <div className={`ortho-faq-item ${activeIndex === 1 ? "active" : ""}`}>
              <button
                type="button"
                className="ortho-faq-question"
                onClick={() => toggleFAQ(1)}
              >
                How long does recovery take after surgery?
                <span className="ortho-faq-icon" />
              </button>

              <div className="ortho-faq-answer">
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
