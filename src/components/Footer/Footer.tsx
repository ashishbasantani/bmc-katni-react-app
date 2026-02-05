import React from "react";
import "./Footer.css";
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-wrapper">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <h2 className="footer-logo">BMC</h2>
          <p className="brand-description">
            Leading healthcare provider in Katni, dedicated to excellence in medical services.
          </p>
          <div className="social-links">
  <a href="https://www.instagram.com/bmc_katni/?hl=en" 
     className="social-link" 
     aria-label="Instagram" 
     target="_blank"
     rel="noopener noreferrer"
     > 
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/> </svg> </a>

  <a
    href="https://www.facebook.com/share/17mCcZWUG4/"
    className="social-link"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.049-8-8.049S0 3.603 0 8.049c0 4.017 2.926 7.347 6.75 7.951v-5.625H4.719V8.049H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
    </svg>
  </a>
</div>

        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Our Team</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section links-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#">Medicine Department</a></li>
            <li><a href="#">Surgery</a></li>
            <li><a href="#">Orthopedics</a></li>
            <li><a href="#">Dental Care</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
<div className="footer-section contact-section">
  <h3>Get in Touch</h3>

  <a
    className="contact-item"
    href="https://www.google.com/maps/search/?api=1&query=Baba%20Madhav%20Shah%20Chikitsalay%2C%20Hospital%20Line%2C%20Madhav%20Nagar%2C%20Katni%2C%20Madhya%20Pradesh%20483504"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={locationIcon} alt="Location" className="contact-icon" />
    <span>Hospital Line, Madhav Nagar, Katni, MP 483504</span>
  </a>

  <a className="contact-item" href="tel:+919300220620">
    <img src={phoneIcon} alt="Phone" className="contact-icon" />
    <span>+91 76222 20620</span>
  </a>

  <a className="contact-item" href="mailto:bmckatni@gmail.com">
    <img src={mailIcon} alt="Email" className="contact-icon" />
    <span>bmckatni@gmail.com</span>
  </a>
</div>


      </div>

      {/* Footer Bottom */}
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Baba Madhavshah Chikitsalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;