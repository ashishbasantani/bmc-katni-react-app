import React from "react";
import heroImage from "../../assets/doctor.png";
import bmcLogo from "../../assets/BMC.png";
import "./Hero.css";

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    // Prefer explicit target by id to avoid fragility from DOM wrappers
    const about = document.getElementById('about-us');
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Fallback to next sibling
    const section = document.querySelector('.hero-section');
    if (section && section.nextElementSibling) {
      (section.nextElementSibling as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">

      {/* SINGLE MAIN CONTAINER */}
      <div className="hero-card">

        {/* TAGLINE */}
        <div className="hero-tagline">
          <h1>Your Health, Our</h1>
          <h2>First Priority</h2>
        </div>

        {/* IMAGE */}
        <img src={heroImage} alt="Healthcare" className="hero-img" />

        {/* BMC PILL */}
        <div className="bmc-pill">
          <img src={bmcLogo} alt="BMC" />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
