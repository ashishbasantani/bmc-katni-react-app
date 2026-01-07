import React from "react";
import "./Header.css";
import logo from "../../assets/BMC.png";
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";



const Header: React.FC = () => {
  return (
    <>
      {/* Top Info Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Every life is Invaluable</span>
        </div>

        <div className="top-bar-right">
          <span className="top-item">
            <img src={locationIcon} alt="Location" className="top-icon" /> 
             Katni, Madhya Pradesh 483504
          </span>

          <span className="top-item">
            <img src={mailIcon} alt="Email" className="top-icon" /> 
             support@BMC.com
          </span>

          <span className="top-item">
            <img src={phoneIcon} alt="Phone" className="top-icon" /> 
             +91 7622220620
         </span>

        </div>
      </div>

      {/* Main Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="BMC Medical Logo" className="logo-image" />
          </div>


          {/* Navigation */}
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/doctors">Doctors</a>
            <a href="/about">About Us</a>
            <a href="/free-camps">Free Camps</a>

            <div className="dropdown">
              <span>More ▾</span>
              <div className="dropdown-menu">
                <a href="/gallery">Gallery</a>
                <a href="/careers">Careers</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <button className="appointment-btn">
            Book Appointment
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
