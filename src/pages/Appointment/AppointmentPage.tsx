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
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.department) {
      setForm((prev) => ({
        ...prev,
        department: location.state.department,
      }));
    }
  }, [location.state]);

  // Step logic
  const canGoStep2 = !!form.department; // Must select department to choose doctor && !!form.appointmentType
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

  let currentStep = 1;
  if (canGoStep2) currentStep = 2;
  if (canGoStep3) currentStep = 3;
  if (canGoStep4) currentStep = 4;

  function handleChange(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleConfirm() {
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

      // ✅ Navigate to Success Page
      navigate("/appointment/success", {
        state: {
          appointmentId: data.appointmentId,
          doctor: data.doctor,
          dateTime: `${data.date} • ${data.time}`,
          patient: data.patient,
        },
      });

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
        <div className="appointment-form">

          <DepartmentSelection
            department={form.department}
            appointmentType={form.appointmentType}
            onDepartmentChange={(value) => handleChange("department", value)}
            onAppointmentTypeChange={(value) =>
              handleChange("appointmentType", value)
            }
          />

          {canGoStep2 && (
            <DoctorSelection
              department={form.department}
              selectedDoctor={form.doctor}
              onDoctorSelect={(doctor) => handleChange("doctor", doctor)}
            />
          )}

          {canGoStep3 && (
            <DateTimeSelection
              selectedDate={form.date}
              selectedTime={form.time}
              onDateSelect={(date) => handleChange("date", date)}
              onTimeSelect={(time) => handleChange("time", time)}
            />
          )}

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
