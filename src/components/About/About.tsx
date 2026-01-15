import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import sampleVideo from "../../assets/videos/about.mp4"; // make sure path is correct

const About: React.FC = () => {
  return (
    <section id="about-us" className="about-section">
      <div className="about-container">
        <div className="about-media">
          <div className="media-video-wrapper">
            <video
              src={sampleVideo}
              autoPlay
              muted
              loop
              className="about-video"
            >
              Your browser does not support the video tag.
            </video>
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
            With over four decades of healthcare service, BMC Hospital stands as a trusted multispecialty hospital in Katni. As a modern healthcare institution, we are committed to ethical, patient-focused, and high-quality medical care.
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
