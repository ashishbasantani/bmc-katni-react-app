import React from "react";
import heroImage from "../../assets/Bmc_home_page.png";
import "./Hero.css";
import { href, useNavigate } from "react-router-dom";


const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge">
            ⭐ Trusted Healthcare Provider Since 1985
          </div>

          <div className="hero-tagline">
            <h1>Your Health,</h1>
            <h1>Our First Priority</h1>
          </div>

          <p className="hero-desc">
            Experience world-class healthcare with our team of expert doctors and
            state-of-the-art facilities. We're here for you 24/7 with compassionate care.
          </p>

          <div className="hero-ctas">
            <button className="cta primary" onClick={() => navigate("/enquiry")}>Enquiry →</button>
            <button className="cta secondary" onClick={() => window.location.href = "tel: +91 7622220620"}>📞 Emergency Call</button>
          </div>

          <hr className="hero-divider" />

          <div className="hero-stats">
            <div>
              <div className="stat-num">31+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div>
              <div className="stat-num">50K+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div>
              <div className="stat-num">24/7</div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="image-shell">

            <div className="image-mask">
              <img src={heroImage} alt="Hospital" className="hero-img" />

              {/* 24/7 CARD */}
              <div className="info-card">
                <div className="info-icon">🕒</div>
                <div>
                  <div className="info-title">24/7 Available</div>
                  <div className="info-sub">Emergency services always ready</div>
                </div>
              </div>
            </div>

            {/* BOOKING */}
            <div className="booking-card">
              <div className="booking-icon">📅</div>
              <div>
                <div className="booking-title">Easy Booking</div>
                <div className="booking-sub">Schedule your visit on chat</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;