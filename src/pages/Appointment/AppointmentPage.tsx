import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Doctor } from "../../types/appointment.types";
import Stepper from "../../components/Appointment/AppointmentStepper";
import DepartmentSelection from "../../components/Appointment/StepDepartment";
import DoctorSelection from "../../components/Appointment/StepDoctor";
import DateTimeSelection from "../../components/Appointment/StepSchedule";
import PatientInformation from "../../components/Appointment/StepPatientInfo";
import AppointmentSummary from "../../components/Appointment/AppointmentSummary";
import HelpCard from "../../components/Appointment/AppointmentHelpCard";
import VisitCard from "../../components/Appointment/AppointmentVisitCard";

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

  const canGoStep2 = !!form.department;
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
    <div className="min-h-screen bg-gradient-to-b from-[#faf7ff] to-white pb-20">
      <Stepper step={currentStep} />
      
      {/* BACK BUTTON */}
      <div className="mt-[40px] px-[70px] max-[900px]:px-[24px]">
        <button
          onClick={() => {
            if (window.history.length > 1) navigate(-1);
            else navigate("/");
          }}
          className="flex items-center gap-2 text-[var(--primary-purple)] font-medium hover:underline"
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* MAIN LAYOUT */}
      <div className="
        mt-[60px]
        px-[70px]
        grid
        gap-[36px]
        text-left
        lg:grid-cols-[1.9fr_1fr]
        max-[900px]:block
        max-[900px]:px-[24px]
      ">

        {/* LEFT FORM */}
        <div className="flex flex-col gap-[28px]">
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

        {/* RIGHT SUMMARY COLUMN */}
        <div className="
          flex flex-col gap-[24px]
          sticky top-[120px]
          self-start
          h-fit
          max-[900px]:relative
          max-[900px]:top-auto
        ">
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
