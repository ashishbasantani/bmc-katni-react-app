import React from "react";
import "./StepPatientInfo.css";

interface PatientInformationProps {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  reason: string;
  medications: string;
  allergies: string;
  onFieldChange: (field: "name" | "email" | "phone" | "age" | "gender" | "reason" | "medications" | "allergies", value: any) => void;
}

// Gender options - managed internally by this component
const GENDER_OPTIONS = ["Male", "Female", "Other"];

export default function PatientInformation({
  name,
  email,
  phone,
  age,
  gender,
  reason,
  medications,
  allergies,
  onFieldChange,
}: PatientInformationProps) {
  return (
    <section className="patient-info-section">
      <label className="form-label">
        Patient Information <span className="required">*</span>
      </label>
      {/* Full Name */}
      <div className="form-row">
        <div className="form-col full">
          <label className="input-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            className="input"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => onFieldChange("name", e.target.value)}
          />
        </div>
      </div>
      {/* Email + Phone */}
      <div className="form-row">
        <div className="form-col">
          <label className="input-label">
            Email <span className="required">*</span>
          </label>
          <input
            className="input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onFieldChange("email", e.target.value)}
          />
        </div>
        <div className="form-col">
          <label className="input-label">
            Phone <span className="required">*</span>
          </label>
          <input
            className="input"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => onFieldChange("phone", e.target.value)}
          />
        </div>
      </div>
      {/* Age + Gender */}
      <div className="form-row">
        <div className="form-col">
          <label className="input-label">
            Age <span className="required">*</span>
          </label>
          <input
            className="input"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => onFieldChange("age", e.target.value)}
          />
        </div>
        <div className="form-col">
          <label className="input-label">
            Gender <span className="required">*</span>
          </label>
          <div className="gender-group">
            {GENDER_OPTIONS.map((g) => (
              <button
                key={g}
                type="button"
                className={
                  gender === g ? "gender-btn selected" : "gender-btn"
                }
                onClick={() => onFieldChange("gender", g)}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Reason */}
      <div className="form-row">
        <div className="form-col full">
          <label className="input-label">
            Reason for Visit <span className="required">*</span>
          </label>
          <textarea
            className="textarea"
            rows={4}
            value={reason}
            onChange={(e) => onFieldChange("reason", e.target.value)}
            placeholder="Describe your symptoms or reason for consultation"
          />
        </div>
      </div>
      {/* Medications + Allergies */}
      <div className="form-row">
        <div className="form-col">
          <label className="input-label">
            Current Medications (Optional)
          </label>
          <input
            className="input"
            placeholder="List any current medications"
            value={medications}
            onChange={(e) => onFieldChange("medications", e.target.value)}
          />
        </div>
        <div className="form-col">
          <label className="input-label">Allergies (Optional)</label>
          <input
            className="input"
            placeholder="List any allergies"
            value={allergies}
            onChange={(e) => onFieldChange("allergies", e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}