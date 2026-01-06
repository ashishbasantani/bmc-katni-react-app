import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="top-bar">
        <div className="top-left">
          <span>Every life is Invaluable</span>
        </div>
        <div className="top-right">
          <span>📍 Katni, Madhya Pradesh 483504</span>
          <span>✉ support@BMC.com</span>
          <span>📞 +91 7622220620</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">B</span>
          <span className="logo-text">BMC</span>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>About Us</li>
          <li>Free Camps</li>
          <li className="dropdown">
            More ▾
            <ul className="dropdown-menu">
              <li>Gallery</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </li>
        </ul>

        <button className="appointment-btn">
          Book Appointment
        </button>
      </nav>
    </header>
  );
}

export default Header;
