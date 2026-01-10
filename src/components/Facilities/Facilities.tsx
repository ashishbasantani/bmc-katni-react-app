import React from "react";
import "./Facilities.css";
import hospitalbuilding from "../../assets/building.jpg";
import Patientroom from "../../assets/room.jpg";
import medicalequipment from "../../assets/equipment.jpg";
import RotatingCircularText from "./RotatingCircularText";

const Facilities: React.FC = () => {
  const scrollToNextSection = () => {
    // Try explicit next section by id (if you add one later), otherwise use sibling
    const nextById = document.getElementById('services') || document.getElementById('contact');
    if (nextById) {
      nextById.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    const section = document.querySelector('.about');
    if (section && section.nextElementSibling) {
      (section.nextElementSibling as HTMLElement).scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // If no next section exists, scroll to bottom of page
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="about">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-left">
          <div className="about-header">
            <span className="about-label">WHO ARE WE</span>
            <h2 className="about-title">
              Committed to providing exceptional healthcare services and compassionate patient care.
            </h2>
          </div>

          <p className="about-description">
            BMC Medical Katni is a state-of-the-art healthcare facility dedicated to delivering comprehensive medical services with compassion and excellence. Since our establishment, we have been committed to improving health outcomes and ensuring patient satisfaction through advanced medical technology and highly qualified medical professionals.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🏥</div>
              <div className="feature-content">
                <h3>State-of-the-Art Facilities</h3>
                <p>Modern diagnostic equipment and comfortable patient rooms equipped with latest medical technology for optimal care and recovery.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">👨‍⚕️</div>
              <div className="feature-content">
                <h3>Expert Medical Team</h3>
                <p>Highly experienced doctors and healthcare professionals dedicated to providing personalized treatment and medical guidance to every patient.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image Gallery */}
<div className="about-right">
  <div className="about-gallery-custom">
    {/* Left Tall Image */}
    <div className="gallery-main">
      <img
        src={hospitalbuilding}
        alt="Hospital Building"
        className="gallery-image"
      />
    </div>
    {/* SVG for rotating circular text */}
    <RotatingCircularText />

    {/* Right Stacked Images */}
    <div className="gallery-side">
      <img
        src={Patientroom}
        alt="Patient Room"
        className="gallery-image-small"
      />
      <img
        src={medicalequipment}
        alt="Medical Equipment"
        className="gallery-image-small"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Facilities;
