import React from "react";
import "./Footer.css";

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
            <a href="https://www.instagram.com/bmc_katni/?hl=en" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Our Team</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section links-section">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#">Cardiology</a></li>
            <li><a href="#">Orthopedics</a></li>
            <li><a href="#">General Medicine</a></li>
            <li><a href="#">Emergency Care</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h3>Get in Touch</h3>
          <div className="contact-item">
            <span className="contact-label">Address:</span>
            <p>Hospital Line, Madhav Nagar, Chanehata, Katni, MP 483504</p>
          </div>
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <p>+91 93002-20620</p>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <p>bmckatni@gmail.com</p>
          </div>
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