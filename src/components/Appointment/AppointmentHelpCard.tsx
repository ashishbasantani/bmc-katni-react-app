import React from "react";
import "./AppointmentHelpCard.css";

// Contact information - managed internally by this component
const CONTACT_INFO = {
  phone: "+91 7012344405",
  email: "bmchospital@gmail.com",
};

export default function HelpCard() {
  return (
    <div className="help-card">
      <div className="help-title">
        <span className="help-icon">❓</span> Need Help?
      </div>
      <div className="help-content">
        <div className="help-item">{CONTACT_INFO.phone}</div>
        <div className="help-item">{CONTACT_INFO.email}</div>
      </div>
    </div>
  );
}