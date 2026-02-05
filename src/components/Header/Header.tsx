import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { useNavigation } from "../../hooks/useNavigation";
import AppointmentBadge from "./AppointmentBadge";

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

  const location = useLocation();

  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean);

  const handleBreadcrumbClick = (crumb: string) => {
    if (crumb === "services") {
      navigate("/#services");
    } else {
      navigate(`/${crumb}`);
    }
  };


  return (
    <>
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
          {/* <div
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </div> */}

          {/* BREADCRUMBS */}
          <div className="breadcrumbs">
            <span onClick={() => navigate("/")}>Home</span>

            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <span className="separator">›</span>
                <span onClick={() => handleBreadcrumbClick(crumb)}>
                  {crumb.replace("-", " ")}
                </span>
              </span>
            ))}
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
            onClick={() => navigate("/book_appointment")}
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
