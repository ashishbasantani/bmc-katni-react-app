import { useState, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Doctor } from "../../types/appointment.types";
import Stepper from "../../components/Appointment/AppointmentStepper";
import DepartmentSelection from "../../components/Appointment/StepDepartment";
import DoctorSelection from "../../components/Appointment/StepDoctor";
import DateTimeSelection from "../../components/Appointment/StepSchedule";
import PatientInformation from "../../components/Appointment/StepPatientInfo";
import AppointmentSummary from "../../components/Appointment/AppointmentSummary";
import HelpCard from "../../components/Appointment/AppointmentHelpCard";
import VisitCard from "../../components/Appointment/AppointmentVisitCard";

interface AppointmentPageProps {
  onClose: () => void;
  onSuccess: (data: {
    appointmentId: string;
    doctor: string;
    patient: string;
    dateTime: string;
  }) => void;
}

export default function AppointmentPage({
  onClose,
  onSuccess,
}: AppointmentPageProps) {
  /* ============================= */
  /* STATE */
  /* ============================= */

  const [activeStep, setActiveStep] = useState(1);

  const [form, setForm] = useState({
    department: "",
    appointmentType: "",
    doctor: null as Doctor | null,
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

  /* ============================= */
  /* Lock Background Scroll */
  /* ============================= */

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  /* ============================= */
  /* ESC Key Close */
  /* ============================= */

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  /* ============================= */
  /* VALIDATION */
  /* ============================= */

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

  let currentStep = 1;
  if (canGoStep2) currentStep = 2;
  if (canGoStep3) currentStep = 3;
  if (canGoStep4) currentStep = 4;

  /* ============================= */
  /* AUTO ADVANCE */
  /* ============================= */

  useEffect(() => {
    if (canGoStep2) setActiveStep(2);
  }, [canGoStep2]);

  useEffect(() => {
    if (canGoStep3) setActiveStep(3);
  }, [canGoStep3]);

  useEffect(() => {
    if (canGoStep4) setActiveStep(4);
  }, [canGoStep4]);

  function handleChange(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  /* ============================= */
  /* CONFIRM */
  /* ============================= */

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

    const result = await response.json();

    // 🔹 Send success data to App.tsx
    onSuccess({
      appointmentId:
        result.appointmentId || "APT-" + Date.now(),
      doctor: form.doctor?.name || "",
      patient: form.name,
      dateTime: `${form.date} at ${form.time}`,
    });

  } catch (error) {
    console.error("❌ Booking Error:", error);
    alert("Something went wrong while booking. Please try again.");
  }
}

  /* ============================= */
  /* ACCORDION COMPONENT */
  /* ============================= */

  const AccordionSection = ({
    step,
    title,
    enabled = true,
    completed = false,
    children,
  }: any) => {
    const isOpen = activeStep === step;

    return (
      <div
        className="border rounded-2xl transition-all duration-300"
        style={{
          borderColor: "var(--border-light)",
          background: "var(--bg-white)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <button
          disabled={!enabled}
          onClick={() => enabled && setActiveStep(step)}
          className="w-full flex items-center justify-between px-6 py-5 text-left transition-all"
          style={{
            opacity: enabled ? 1 : 0.5,
            cursor: enabled ? "pointer" : "not-allowed",
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold"
              style={{
                background: completed
                  ? "var(--success-soft)"
                  : "var(--primary-purple-soft)",
                color: completed
                  ? "var(--success)"
                  : "var(--primary-purple)",
              }}
            >
              {completed ? <Check size={16} /> : step}
            </div>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: "var(--font-weight-semibold)",
                color: "var(--text-primary)",
              }}
            >
              {title}
            </h3>
          </div>

          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden px-6 pb-6">{children}</div>
        </div>
      </div>
    );
  };

  /* ============================= */
  /* UI */
  /* ============================= */

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center p-6"
      style={{
        background: "rgba(0,0,0,0.35)",
        backdropFilter: "blur(6px)",
        zIndex: "var(--z-modal)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[1400px] h-[92vh] flex flex-col overflow-hidden"
        style={{
          background: "var(--bg-white)",
          borderRadius: "var(--radius-xl)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* HEADER */}
        <div
          className="relative px-10 py-3"
          style={{
            background: "var(--primary-gradient)",
            color: "var(--text-inverse)",
          }}
        >
          <h1 style={{ fontSize: "26px", fontWeight: "var(--font-weight-semibold)" }}>
            Book an Appointment
          </h1>
          <p className="mt-1" style={{ opacity: 0.9, fontSize: "14px" }}>
            Fill in your details to schedule your visit
          </p>
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-xl"
            style={{ color: "var(--text-inverse)" }}
          >
            ✕
          </button>
        </div>

        {/* STEPPER */}
        <div
          className="border-b"
          style={{
            background: "var(--primary-purple-soft)",
            borderColor: "var(--border-light)",
          }}
        >
          <Stepper step={currentStep} />
        </div>

        {/* CONTENT */}
        <div
          className="flex-1 min-h-0 px-10 py-10"
          style={{ background: "var(--bg-section)" }}
        >
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 h-full min-h-0">

            {/* LEFT SIDE */}
            <div className="h-full min-h-0 overflow-y-auto modal-scroll pr-4 flex flex-col gap-6 pb-10">

              <AccordionSection
                step={1}
                title="Select Department & Type"
                completed={canGoStep2}
              >
                <DepartmentSelection
                  department={form.department}
                  appointmentType={form.appointmentType}
                  onDepartmentChange={(v) => handleChange("department", v)}
                  onAppointmentTypeChange={(v) =>
                    handleChange("appointmentType", v)
                  }
                />
              </AccordionSection>

              <AccordionSection
                step={2}
                title="Choose Doctor"
                enabled={canGoStep2}
                completed={canGoStep3}
              >
                <DoctorSelection
                  department={form.department}
                  selectedDoctor={form.doctor}
                  onDoctorSelect={(d) => handleChange("doctor", d)}
                />
              </AccordionSection>

              <AccordionSection
                step={3}
                title="Select Date & Time"
                enabled={canGoStep3}
                completed={canGoStep4}
              >
                <DateTimeSelection
                  selectedDate={form.date}
                  selectedTime={form.time}
                  onDateSelect={(d) => handleChange("date", d)}
                  onTimeSelect={(t) => handleChange("time", t)}
                />
              </AccordionSection>

              <AccordionSection
                step={4}
                title="Patient Information"
                enabled={canGoStep4}
                completed={canConfirm}
              >
                <PatientInformation {...form} onFieldChange={handleChange} />
              </AccordionSection>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col gap-6 sticky top-0 self-start">
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
      </div>
    </div>
  );
}