import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-media">
          <div className="media-large" aria-hidden>
            {/* large rounded card */}
          </div>

          <div className="media-stack">
            <div className="media-card media-card--video">
              <button
                className="play-btn"
                aria-label="Play video"
                onClick={() => {
                  // placeholder behavior — open modal or play video if attached later
                  const el = document.querySelector(".play-btn");
                  el?.classList.toggle("played");
                }}
              >
                <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden>
                  <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                  <polygon points="26,20 26,44 46,32" fill="rgba(255,255,255,0.95)" />
                </svg>
              </button>
            </div>

            <div className="media-card media-card--small" aria-hidden>
              {/* small rounded card */}
            </div>
          </div>
        </div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="about-label">OVERVIEW</span>
          <h2 className="about-title">Know about Us</h2>

          <p className="about-description">
            With over three decades of healthcare service, BMC Hospital stands as a trusted multispecialty hospital in Katni. As a modern healthcare institution, we are committed to ethical, patient-focused, and high-quality medical care.
          </p>

          <p className="about-description about-description--muted">
            Supported by skilled medical professionals and advanced technology, we deliver treatment that is precise, compassionate, and centered around individual patient needs.
          </p>

          <div className="about-features">
            <motion.div
              className="about-feature"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              <div className="feature-icon">🩺</div>
              <div className="feature-body">
                <h4>Our Vision</h4>
                <p>To be a trusted leader in quality, accessible, and compassionate healthcare.</p>
              </div>
            </motion.div>

            <motion.div
              className="about-feature"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <div className="feature-icon">🏥</div>
              <div className="feature-body">
                <h4>Our Mission</h4>
                <p>BMC delivers expert, patient-focused care with 24/7, advanced technology, and a focus on wellness.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;