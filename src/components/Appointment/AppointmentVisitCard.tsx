import React from "react";
import "./AppointmentVisitCard.css";

// Hospital address - managed internally by this component
const HOSPITAL_INFO = {
  name: "BMC Hospital",
  address: "Katni, Madhya Pradesh, India, 483501",
};

export default function VisitCard() {
  return (
    <div className="visit-card">
      <div className="visit-title">
        <span className="visit-icon">📍</span> Visit Us
      </div>
      <div className="visit-content">
        {HOSPITAL_INFO.name}
        <br />
        {HOSPITAL_INFO.address}
      </div>
    </div>
  );
}