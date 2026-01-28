import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { useNavigation } from "../../hooks/useNavigation";
import LanguageToggle from "../LanguageToggle";
import AppointmentBadge from "./AppointmentBadge";

import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleNavLinkClick } = useNavigation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { label: "Home", sectionId: "home" },
    { label: "Facilities", sectionId: "facilities" },
    { label: "About Us", sectionId: "about-us" },
    { label: "Services", sectionId: "services" },
    { label: "Doctors", sectionId: "doctors" },
  ];

  // ✅ Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // ✅ Reset scroll when menu opens
  useEffect(() => {
    if (isMobileMenuOpen && menuRef.current) {
      menuRef.current.scrollTop = 0;
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (sectionId: string, label: string) => {
    navigate(`/#${sectionId}`);
    handleNavLinkClick(label);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span>Every life is Invaluable</span>
        </div>

        <div className="top-bar-right">
          <a
            className="top-item"
            href="https://www.google.com/maps/search/?api=1&query=Baba%20Madhav%20Shah%20Chikitsalay%2C%20Katni"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={locationIcon} className="top-icon" alt="Location" />
            Katni, MP
          </a>

          <a className="top-item" href="mailto:bmckatni@gmail.com">
            <img src={mailIcon} className="top-icon" alt="Email" />
            bmckatni@gmail.com
          </a>

          <a className="top-item" href="tel:+917622220620">
            <img src={phoneIcon} className="top-icon" alt="Phone" />
            +91 7622220620
          </a>

          <LanguageToggle />
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo" onClick={() => navigate("/")}>
            <img
              src={process.env.PUBLIC_URL + "/BMC.png"}
              className="logo-image"
              alt="BMC Logo"
            />
          </div>

          {/* HAMBURGER (MOBILE) */}
          <div
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </div>

          {/* DESKTOP NAV */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="nav-link"
                onClick={() => handleNavClick(link.sectionId, link.label)}
              >
                <span className="nav-link-text">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <button
            className="appointment-btn"
            onClick={() => {
              const phone = "919300220620";
              window.open(`https://wa.me/${phone}`, "_blank");
            }}
          >
            Book Appointment
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={menuRef}
              className="mobile-menu"
              initial={{ height: 0, opacity: 0}}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.sectionId, link.label)}
                >
                  {link.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* FLOATING APPOINTMENT BUTTON (MOBILE) */}
      <div
        className="AppointmentBadge"
        style={{
          position: "fixed",
          bottom: 20,
          right: 5,
          zIndex: 999,
        }}
      >
        <AppointmentBadge
          onClick={() => {
            window.open("https://wa.me/919300220620", "_blank");
          }}
        />
      </div>
    </>
  );
};

export default Header;
