import React from "react";
import "./StepDepartment.css";

interface DepartmentSelectionProps {
  department: string;
  appointmentType: string;
  onDepartmentChange: (value: string) => void;
  onAppointmentTypeChange: (value: string) => void;
}

// Department data - managed internally by this component
const DEPARTMENTS = [
  "General Medicine",
  "Dental Care",
  "Pediatrics",
  "Orthopaedics",
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Gynecology",
  "Surgery",
  "Physiotherapy",
  "Naturopathy",
];

const APPOINTMENT_TYPES = ["Follow-up", "Consultation", "General Check-up"];

export default function DepartmentSelection({
  department,
  appointmentType,
  onDepartmentChange,
  onAppointmentTypeChange,
}: DepartmentSelectionProps) {
  return (
    <section className="department-section">
      <div className="department-container">
        <div className="department-field">
          <label className="form-label">
            Select Department <span className="required">*</span>
          </label>
          <select
            className="department-select"
            aria-label="Select Department"
            value={department}
            onChange={(e) => onDepartmentChange(e.target.value)}
          >
            <option value="">Select</option>
            {DEPARTMENTS.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>
        <div className="department-field">
          <label className="form-label">Appointment Type</label>
          <select
            className="department-select"
            aria-label="Appointment Type"
            value={appointmentType}
            onChange={(e) => onAppointmentTypeChange(e.target.value)}
          >
            <option value="">Select</option>
            {APPOINTMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}