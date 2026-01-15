import React from "react";
import "./Facilities.css";
import checkup from "../../assets/checkup.jpg";
import Patientroom from "../../assets/room.png";
import medicalequipment from "../../assets/equipment.jpg";
import RotatingCircularText from "./RotatingCircularText";

const Facilities: React.FC = () => {
  const scrollToNextSection = () => {
    // Try explicit next section by id (if you add one later), otherwise use sibling
    const nextById =
      document.getElementById("services") ||
      document.getElementById("contact");

    if (nextById) {
      nextById.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const section = document.querySelector(".about");
    if (section && section.nextElementSibling) {
      (section.nextElementSibling as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    // If no next section exists, scroll to bottom of page
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="about">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-left">
          <div className="about-header">
            <span className="about-label">OUR FACILITIES</span>
            <h2 className="about-title">
             Assisting individuals in accessing quality healthcare facilities.
            </h2>
          </div>

          <p className="about-description">
            At BMC, we are committed to delivering world-class healthcare
            supported by modern infrastructure, advanced medical technology, and
            patient-focused services. We ensure comfort, safety, and high
            standards of medical care. Our 24/7 Emergency and Trauma Care unit is
            fully equipped to manage medical emergencies, accidents, and
            critical conditions. Comprehensive inpatient and outpatient services
            across a wide range of medical specialties are also provided.
            Whether it is a routine consultation, diagnostic evaluation, or
            long-term treatment, our services are structured to ensure seamless
            coordination, efficiency, and compassionate care.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hospital" viewBox="0 0 16 16">
  <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z"/>
  <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z"/>
</svg>
              </div>
              <div className="feature-content">
                <h3>24×7 Emergency care</h3>
                <p>
                 Comprehensive OPD and IPD services across multiple specialties.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"/>
</svg>
              </div>
              <div className="feature-content">
                <h3>Cashless treatment available</h3>
                <p>
                  listed insurance policyholders and Ayushman Bharat cardholders.
                </p>
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
                src={Patientroom}
                alt="Patient Room"
                className="gallery-image"
              />
            </div>
            <div className="rotating-text-container">
            {/* SVG for rotating circular text */}
            <RotatingCircularText />
            </div>
            {/* Right Stacked Images */}
            <div className="gallery-side">
              <img
                src={checkup}
                alt="machine"
                className="gallery-image-medium"
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