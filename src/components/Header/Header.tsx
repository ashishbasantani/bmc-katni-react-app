import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import { useNavigation } from "../../hooks/useNavigation";
import { useAppointmentStore } from "../../store/appointmentStore";
// use public BMC.png for the title logo so it matches the favicon
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { handleNavLinkClick } = useNavigation();
  const { setShowBookingModal } = useAppointmentStore();

  const handleAppointmentClick = () => {
    setShowBookingModal(true);
  };

  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        className="top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="top-bar-left">
          <span>Every life is Invaluable</span>
        </div>

        <motion.div className="top-bar-right" variants={containerVariants} initial="hidden" animate="visible">
  <motion.a className="top-item" variants={itemVariants} href="https://www.google.com/maps/search/?api=1&query=Baba%20Madhav%20Shah%20Chikitsalay%2C%20Baba%20madhavshah%20chikitsalaya%2C%20Hospital%20Line%2C%20Madhav%20Nagar%2C%20Chanehata%2C%20Katni%2C%20Madhya%20Pradesh%20483504" target="_blank">
    <img src={locationIcon} alt="Location" className="top-icon" />
    Katni, Madhya Pradesh 483504
  </motion.a>

  <span className="top-separator">|</span>

  <motion.a className="top-item" variants={itemVariants} href="mailto:bmckatni@gmail.com">
    <img src={mailIcon} alt="Email" className="top-icon" />
    bmckatni@gmail.com
  </motion.a>

  <span className="top-separator">|</span>

  <motion.a className="top-item" variants={itemVariants} href="tel:+917622220620">
    <img src={phoneIcon} alt="Phone" className="top-icon" />
    +91 7622220620
  </motion.a>
        </motion.div>

      </motion.div>

      {/* Main Navbar */}
      <motion.header
        className="navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={process.env.PUBLIC_URL + '/BMC.png'} alt="BMC Medical Logo" className="logo-image" />
          </motion.div>

          {/* Navigation */}
          <nav className="nav-links">
            {[
              { label: "Home", sectionId: "home" },
              { label: "Facilities", sectionId: "facilities" },
              { label: "About Us", sectionId: "about-us" },
              { label: "Services", sectionId: "services" },
              { label: "Doctors", sectionId: "doctors" },
            ].map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
              >
                <motion.a
                  href={`#${link.sectionId}`}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(link.sectionId);
                    handleNavLinkClick(link.label);
                  }}
                  className="nav-link"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="nav-link-text">
                    {link.label}
                  </span>
                </motion.a>
              </motion.div>
            ))}

            <div className="dropdown">
              <motion.button
                className="dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                whileHover={{ color: "var(--primary-blue)" }}
              >
                More ▾
              </motion.button>

              <motion.div
                className="dropdown-menu"
                variants={dropdownVariants}
                initial="hidden"
                animate={isDropdownOpen ? "visible" : "hidden"}
                exit="exit"
              >
                {["Gallery", "Contact"].map((item, idx) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isDropdownOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ x: 4, color: "var(--primary-blue)" }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item === "Contact") {
                        const phone = "919300220620";
                        const text = encodeURIComponent("Hello, I would like to book an appointment.");
                        window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
                        setIsDropdownOpen(false);
                        return;
                      }

                      handleNavLinkClick(item);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </nav>

          {/* CTA Button */}
          <motion.button
            className="appointment-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={() => {
              const phone = "919300220620"; // international format without +
              const text = encodeURIComponent("Hello, I would like to book an appointment.");
              window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
            }}
          >
            Book Appointment
          </motion.button>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
