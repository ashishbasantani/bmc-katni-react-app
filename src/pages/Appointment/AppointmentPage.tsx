import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Doctor } from "../../types/appointment.types";
import Stepper from "../../components/Appointment/AppointmentStepper";
import AppointmentHeader from "../../components/Appointment/AppointmentHeader";
import DepartmentSelection from "../../components/Appointment/StepDepartment";
import DoctorSelection from "../../components/Appointment/StepDoctor";
import DateTimeSelection from "../../components/Appointment/StepSchedule";
import PatientInformation from "../../components/Appointment/StepPatientInfo";
import AppointmentSummary from "../../components/Appointment/AppointmentSummary";
import HelpCard from "../../components/Appointment/AppointmentHelpCard";
import VisitCard from "../../components/Appointment/AppointmentVisitCard";
import "./AppointmentPage.css";

const WHATSAPP_NUMBER = "919300220620";

export default function AppointmentPage() {
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

  const location = useLocation();

  useEffect(() => {
    if (location.state?.department) {
      setForm((prev) => ({
        ...prev,
        department: location.state.department,
      }));
    }
  }, [location.state]);

  // Step logic
  const canGoStep2 = !!form.department && !!form.appointmentType;
  const canGoStep3 = canGoStep2 && !!form.doctor;
  const canGoStep4 = canGoStep3 && !!form.date && !!form.time;
 const canConfirm =
  canGoStep4 &&
  !!form.name &&
  !!form.email &&
  !!form.phone &&
  !!form.age &&
  !!form.gender &&
  !!form.reason;


  // Step progression
  let currentStep = 1;
  if (canGoStep2) currentStep = 2;
  if (canGoStep3) currentStep = 3;
  if (canGoStep4) currentStep = 4;

  function handleChange(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const navigate = useNavigate();
  async function handleConfirm() {
    const message = `
  🩺 *Appointment Booking Request*

  *Department:* ${form.department}
  *Appointment Type:* ${form.appointmentType}

  *Doctor:* ${form.doctor?.name || "-"}
  *Date:* ${form.date}
  *Time:* ${form.time}

  👤 *Patient Details*
  *Name:* ${form.name}
  *Age:* ${form.age}
  *Gender:* ${form.gender}
  *Phone:* ${form.phone}
  *Email:* ${form.email}

  📝 *Reason for Visit:*
  ${form.reason}

  💊 *Medications:*
  ${form.medications || "None"}

  ⚠️ *Allergies:*
  ${form.allergies || "None"}
  `;

    try {
      const response = await fetch(
        "http://localhost:5000/api/appointment/confirm",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            doctor: form.doctor?.name || "",
          }),
        }
      );

      if (!response.ok) throw new Error("Booking failed");

      const data = await response.json();

      // ✅ SUCCESS PAGE NAVIGATION
      navigate("/appointment/success", {
        state: {
          appointmentId: data.appointmentId,
          doctor: data.doctor,
          dateTime: `${data.date} • ${data.time}`,
          patient: data.patient,
        },
      });

      // ✅ WHATSAPP MESSAGE
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message.trim() + `\n\n🆔 Appointment ID: ${data.appointmentId}`
      )}`;

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("❌ Booking Error:", error);
      alert("Something went wrong while booking. Please try again.");
    }
  }



  return (
    <div className="appointment-page">
      <AppointmentHeader />
      <Stepper step={currentStep} />
      <div className="appointment-layout">
        {/* LEFT FORM */}
        <div className="appointment-form">
          {/* Step 1: Department & Type */}
          <DepartmentSelection
            department={form.department}
            appointmentType={form.appointmentType}
            onDepartmentChange={(value) => handleChange("department", value)}
            onAppointmentTypeChange={(value) =>
              handleChange("appointmentType", value)
            }
          />

          {/* Step 2: Doctor */}
          {canGoStep2 && (
           <DoctorSelection
            department={form.department}
            selectedDoctor={form.doctor}
            onDoctorSelect={(doctor) => handleChange("doctor", doctor)}
          />

          )}

          {/* Step 3: Date & Time */}
          {canGoStep3 && (
            <DateTimeSelection
              selectedDate={form.date}
              selectedTime={form.time}
              onDateSelect={(date) => handleChange("date", date)}
              onTimeSelect={(time) => handleChange("time", time)}
            />
          )}

          {/* Step 4: Patient Info */}
          {canGoStep4 && (
            <PatientInformation
              name={form.name}
              email={form.email}
              phone={form.phone}
              age={form.age}
              gender={form.gender}
              reason={form.reason}
              medications={form.medications}
              allergies={form.allergies}
              onFieldChange={handleChange}
            />
          )}
        </div>

        {/* RIGHT SUMMARY & HELP */}
        <div className="appointment-summary-side">
          <AppointmentSummary
            department={form.department}
            appointmentType={form.appointmentType}
            doctor={form.doctor}
            date={form.date}
            time={form.time}
            canConfirm={canConfirm}
            onConfirm={handleConfirm}
          />
          <HelpCard />
          <VisitCard />
        </div>
      </div>
    </div>
  );
}