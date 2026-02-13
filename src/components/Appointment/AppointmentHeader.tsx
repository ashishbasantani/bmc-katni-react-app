import React from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentHeader.css";

const AppointmentHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="navbar-appointment-header">
      <div className="navbar-appointment-container">
        {/* LOGO (same as global header) */}
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src={process.env.PUBLIC_URL + "/BMC.png"}
            className="logo-image"
            alt="BMC Logo"
          />
        </div>

        {/* CENTER TEXT */}
        <div className="appointment-hero">
            <h1>Book an Appointment</h1>
            <p>Fill in your details to schedule your visit</p>
        </div>


        {/* RIGHT EMPTY SPACE (keeps center perfectly aligned) */}
        <div className="navbar-header-right-space" />
      </div>
    </header>
  );
};

export default AppointmentHeader;
