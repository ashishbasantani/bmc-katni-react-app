import { useState } from "react";
import { Doctor } from "../../types/appointment.types";
import Stepper from "../../components/Appointment/Stepper";
import DoctorCard from "../../components/Appointment/DoctorCardAppointment";
import AppointmentHeader from "../../components/Appointment/AppointmentHeader";
import "./AppointmentPage.css";
import docImg from "../../assets/Dr.Dharmendra Bagri _ medicine.png";
import phoneIcon from "../../assets/icons/phone.png";
import mailIcon from "../../assets/icons/mail.png";
import locationIcon from "../../assets/icons/location.png";

const doctors = [
  {
    id: 1,
    name: "Dr. Dharmendra Bagri",
    degree: "MD, MBBS",
    experience: "15 years",
    image: docImg,
  },
];

const departments = ["General Medicine", "Pediatrics", "Orthopedics", "Cardiology", "Dermatology", "Neurology", "Gynecology", "Surgery"];
const appointmentTypes = ["Follow-up", "Consultation", "General Check-up"];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<{
    department: string;
    appointmentType: string;
    doctor: Doctor | null;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
    age: string;
    gender: string;
    reason: string;
    medications: string;
    allergies: string;
  }>({
    department: "",
    appointmentType: "",
    doctor: null,
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    reason: "",
    medications: "",
    allergies: "",
  });

  // Step logic
  const canGoStep2 = !!form.department && !!form.appointmentType;
  const canGoStep3 = canGoStep2 && !!form.doctor;
  const canGoStep4 = canGoStep3 && !!form.date && !!form.time;
  const canConfirm =
    canGoStep4 &&
    form.name &&
    form.email &&
    form.phone &&
    form.age &&
    form.gender &&
    form.reason;

  // Step progression
  let currentStep = 1;
  if (canGoStep2) currentStep = 2;
  if (canGoStep3) currentStep = 3;
  if (canGoStep4) currentStep = 4;

  // Date picker logic (simulate next 14 days)
  const today = new Date();
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });
  const times = [
    { label: "Morning", slots: ["09:00 AM", "10:00 AM", "11:00 AM"] },
    { label: "Afternoon", slots: ["02:00 PM"] },
  ];

  function handleChange(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleConfirm() {
    alert("Appointment booked successfully!");
  }

  return (
    <div className="appointment-page">
      <AppointmentHeader />
      <Stepper step={currentStep} />
      <div className="appointment-layout">
        {/* LEFT FORM */}
        <div className="appointment-form">
          {/* Step 1: Department & Type */}
          <section>
            <div style={{ display: "flex", gap: 24 }}>
              <div style={{ flex: 1 }}>
                <label className="form-label">Select Department <span className="required">*</span></label>
                <select
                  aria-label="Select Department"
                  value={form.department}
                  onChange={e => handleChange("department", e.target.value)}
                >
                  <option value="">Select</option>
                  {departments.map(dep => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label className="form-label">Appointment Type</label>
                <select
                  aria-label="Appointment Type"
                  value={form.appointmentType}
                  onChange={e => handleChange("appointmentType", e.target.value)}
                >
                  <option value="">Select</option>
                  {appointmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Step 2: Doctor */}
          {canGoStep2 && (
            <section>
              <label className="form-label">Choose Your Doctor <span className="required">*</span></label>
              <div style={{ display: "flex", gap: 24 }}>
                {doctors.map(doc => (
                  <div
                    key={doc.id}
                    className={`doctor-card-appointment${form.doctor?.id === doc.id ? " selected" : ""}`}
                    onClick={() => handleChange("doctor", doc)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <img src={doc.image} alt={doc.name} style={{ width: 56, height: 56, borderRadius: "50%", border: "2px solid #d1b6f7" }} />
                      <div style={{ textAlign: "left" }}>
                        <div style={{ fontWeight: 600, fontSize: 18 }}>{doc.name}</div>
                        <div style={{ fontSize: 14 }}>{doc.degree}</div>
                        <div style={{ fontSize: 13, color: "#888" }}>{doc.experience}</div>
                      </div>
                      {form.doctor?.id === doc.id && (
                        <span style={{ marginLeft: "auto", color: "#6b2fd6", fontSize: 22 }}>✔</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Step 3: Date & Time */}
          {canGoStep3 && (
            <section>
              <label className="form-label">Select Date & Time <span className="required">*</span></label>
              <div style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 13, marginBottom: 8 }}>PICK A DATE</div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {days.map((d, i) => {
                    const isSelected = form.date === d.toDateString();
                    return (
                      <button
                        key={i}
                        className={isSelected ? "date-btn selected" : "date-btn"}
                        onClick={() => handleChange("date", d.toDateString())}
                        type="button"
                      >
                        <div style={{ fontWeight: 500 }}>{d.toLocaleDateString("en-US", { weekday: "short" })}</div>
                        <div style={{ fontSize: 18 }}>{d.getDate()}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 13, marginBottom: 8 }}>PICK A TIME</div>
                {times.map((group, idx) => (
                  <div key={group.label} style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 15, marginRight: 8 }}>{group.label === "Morning" ? "🌞" : "🌤️"} {group.label} ({group.slots.length})</span>
                    <div style={{ display: "flex", gap: 12, marginTop: 6 }}>
                      {group.slots.map(slot => (
                        <button
                          key={slot}
                          className={form.time === slot ? "time-btn selected" : "time-btn"}
                          onClick={() => handleChange("time", slot)}
                          type="button"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Step 4: Patient Info */}
          {canGoStep4 && (
            <section>
              <label className="form-label">Patient Information <span className="required">*</span></label>
              <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Full Name <span className="required">*</span></label>
                  <input
                    className="input"
                    value={form.name}
                    onChange={e => handleChange("name", e.target.value)}
                    placeholder="Full Name"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Phone <span className="required">*</span></label>
                  <input
                    className="input"
                    value={form.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    placeholder="+91 XXXXXX XXXXX"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Email <span className="required">*</span></label>
                  <input
                    className="input"
                    value={form.email}
                    onChange={e => handleChange("email", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Age <span className="required">*</span></label>
                  <input
                    className="input"
                    value={form.age}
                    onChange={e => handleChange("age", e.target.value)}
                    placeholder="Age"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 18, marginBottom: 18 }}>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Gender <span className="required">*</span></label>
                  <div style={{ display: "flex", gap: 10 }}>
                    {["Male", "Female", "Other"].map(g => (
                      <button
                        key={g}
                        type="button"
                        className={form.gender === g ? "gender-btn selected" : "gender-btn"}
                        onClick={() => handleChange("gender", g)}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
                <div style={{ flex: 2 }}>
                  <label className="input-label">Reason for Visit <span className="required">*</span></label>
                  <input
                    className="input"
                    value={form.reason}
                    onChange={e => handleChange("reason", e.target.value)}
                    placeholder="Describe your symptoms or reason for consultation"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 18 }}>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Current Medications (Optional)</label>
                  <input
                    className="input"
                    value={form.medications}
                    onChange={e => handleChange("medications", e.target.value)}
                    placeholder="e.g., Aspirin 100mg"
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label className="input-label">Allergies (Optional)</label>
                  <input
                    className="input"
                    value={form.allergies}
                    onChange={e => handleChange("allergies", e.target.value)}
                    placeholder="e.g., Penicillin, Peanuts"
                  />
                </div>
              </div>
            </section>
          )}
        </div>
        {/* RIGHT SUMMARY & HELP */}
        <div className="appointment-summary-side">
          {(form.department || form.appointmentType) && (
            <div className="summary-panel">
              <div style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 17, marginBottom: 10 }}>
                  <span style={{ color: "#8d3bbd", fontSize: 22 }}>🩺</span> Appointment Summary
                </div>
                <div style={{ fontSize: 15, marginBottom: 8 }}>
                  <span style={{ color: "#8d3bbd", marginRight: 6 }}>•</span> <b>Department</b><br />
                  <span style={{ marginLeft: 18 }}>{form.department}</span>
                </div>
                <div style={{ fontSize: 15, marginBottom: 8 }}>
                  <span style={{ color: "#8d3bbd", marginRight: 6 }}>•</span> <b>Doctor</b><br />
                  <span style={{ marginLeft: 18 }}>{form.doctor?.name}</span>
                </div>
                <div style={{ fontSize: 15, marginBottom: 8 }}>
                  <span style={{ color: "#8d3bbd", marginRight: 6 }}>•</span> <b>Date</b><br />
                  <span style={{ marginLeft: 18 }}>{form.date ? new Date(form.date).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }) : ""}</span>
                </div>
                {form.time && (
                  <div style={{ fontSize: 15, marginBottom: 8 }}>
                    <span style={{ color: "#8d3bbd", marginRight: 6 }}>•</span> <b>Time</b><br />
                    <span style={{ marginLeft: 18 }}>{form.time}</span>
                  </div>
                )}
              </div>
              {canConfirm && (
                <button className="confirm-btn" onClick={handleConfirm}>
                  Confirm Booking
                </button>
              )}
            </div>
          )}
          <div className="help-card">
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 17, marginBottom: 10 }}>
              <span style={{ color: "#8d3bbd", fontSize: 22 }}>❓</span> Need Help?
            </div>
            <div style={{marginLeft: 36}}>
            <div style={{ fontSize: 15, marginBottom: 8 }}>
              +91 7012344405
            </div>
            <div style={{ fontSize: 15, marginBottom: 8 }}>
              bmchospital@gmail.com
            </div>
            </div>  
          </div>
          <div className="visit-card">
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 17, marginBottom: 10 }}>
              <span style={{ color: "#8d3bbd", fontSize: 22 }}>📍</span> Visit Us
            </div>
            <div style={{ fontSize: 15, marginLeft: 38}}>
              BMC Hospital<br />Kerala, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
