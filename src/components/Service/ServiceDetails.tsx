import React from "react";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  return (
    <div className="service-details">

      {/* HERO SECTION */}
      <section className="service-hero">
        <div className="container service-hero-content">
          <span className="badge">Premium Healthcare Service</span>

          <h1>General Medicine</h1>
          <h3>Comprehensive Healthcare Services</h3>

          <p>
            Our general medicine department offers holistic care for a wide
            range of health conditions with experienced physicians.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Book Appointment</button>
            <button className="outline-btn">Call Now</button>
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
      <section className="conditions">
        <div className="container conditions-wrapper">
          <div className="conditions-left">
            <h2>Conditions We Treat</h2>
            <p>Comprehensive care for a wide range of conditions</p>

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
            <img
              src="https://images.unsplash.com/photo-1580281657527-47f249e8f6a9"
              alt="Medical Care"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;