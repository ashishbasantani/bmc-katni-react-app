import React from "react";
import { Doctor } from "../../types/appointment.types";
import "./AppointmentSummary.css";

interface AppointmentSummaryProps {
  department: string;
  appointmentType: string;
  doctor: Doctor | null;
  date: string;
  time: string;
  canConfirm: boolean;
  onConfirm: () => void;
}

export default function AppointmentSummary({
  department,
  appointmentType,
  doctor,
  date,
  time,
  canConfirm,
  onConfirm,
}: AppointmentSummaryProps) {
  if (!department && !appointmentType) {
    return null;
  }

  return (
    <div className="summary-panel">
      <div className="summary-content">
        <div className="summary-title">
          <span className="summary-icon">🩺</span> Appointment Summary
        </div>
        <div className="summary-item">
          <span className="summary-dot">•</span> <b>Department</b>
          <br />
          <span className="summary-value">{department}</span>
        </div>
        <div className="summary-item">
          <span className="summary-dot">•</span> <b>Doctor</b>
          <br />
          <span className="summary-value">{doctor?.name}</span>
        </div>
        <div className="summary-item">
          <span className="summary-dot">•</span> <b>Date</b>
          <br />
          <span className="summary-value">
            {date
              ? new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </span>
        </div>
        {time && (
          <div className="summary-item">
            <span className="summary-dot">•</span> <b>Time</b>
            <br />
            <span className="summary-value">{time}</span>
          </div>
        )}
      </div>
      {canConfirm && (
        <button className="confirm-btn" onClick={onConfirm}>
          Confirm Booking
        </button>
      )}
    </div>
  );
}