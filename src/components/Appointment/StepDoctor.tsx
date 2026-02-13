import React from "react";
import { Doctor } from "../../types/appointment.types";
import { DOCTORS } from "../../data/doctors.data";
import "./StepDoctor.css";

interface DoctorSelectionProps {
  department: string;
  selectedDoctor: Doctor | null;
  onDoctorSelect: (doctor: Doctor) => void;
}

export default function DoctorSelection({
  department,
  selectedDoctor,
  onDoctorSelect,
}: DoctorSelectionProps) {
  const filteredDoctors = DOCTORS.filter(
    (doc) => doc.department === department
  );

  return (
    <section className="doctor-section">
      <label className="form-label">
        Choose Your Doctor <span className="required">*</span>
      </label>

      <div className="doctor-cards-container">
        {filteredDoctors.map((doc) => {
          const isSelected = selectedDoctor?.id === doc.id;

          return (
            <div
              key={doc.id}
              className={`doctor-card-appointment ${isSelected ? "selected" : ""}`}
              onClick={() => onDoctorSelect(doc)}
            >
              <div className="doctor-card-content">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="doctor-card-img"
                />

                <div className="doctor-card-info">
                  <div className="doctor-card-name">{doc.name}</div>
                  <div className="doctor-card-degree">{doc.degree}</div>
                  <div className="doctor-card-exp">{doc.experience}</div>
                </div>
              </div>

              {/* Placed outside doctor-card-content to allow 
                absolute positioning relative to the main card.
              */}
              <span
                className="doctor-card-check"
                style={{ opacity: isSelected ? 1 : 0 }}
              >
                ✔
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}