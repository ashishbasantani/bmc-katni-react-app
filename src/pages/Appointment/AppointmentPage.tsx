import { useState, useEffect } from "react";
import { X, Calendar, Pencil } from "lucide-react";
import { Doctor } from "../../types/appointment.types";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleChange(field: keyof typeof form, value: any) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  /* STEP VALIDATION */
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
/* AUTO ADVANCE (FIXED) */
/* ============================= */

useEffect(() => {
  if (canGoStep2 && activeStep < 2) {
    setActiveStep(2);
  }
}, [canGoStep2, activeStep]);

useEffect(() => {
  if (canGoStep3 && activeStep < 3) {
    setActiveStep(3);
  }
}, [canGoStep3, activeStep]);

useEffect(() => {
  if (canGoStep4 && activeStep < 4) {
    setActiveStep(4);
  }
}, [canGoStep4, activeStep]);

  async function handleConfirm() {
    try {
      const response = await fetch(
        "https://bmc-katni-react-app-i2d0.onrender.com/api/appointment/confirm",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            doctor: form.doctor?.name || "",
          }),
        }
      );

      const result = await response.json();

      onSuccess({
        appointmentId: result.appointmentId || "APT-" + Date.now(),
        doctor: form.doctor?.name || "",
        patient: form.name,
        dateTime: `${form.date} at ${form.time}`,
      });
    } catch {
      alert("Something went wrong.");
    }
  }

  const getStepStyle = (step: number) =>
    `bg-white rounded-xl border transition-all ${
      activeStep === step
        ? "border-2 border-[#602962] shadow-md"
        : "border border-gray-200"
    }`;

  const StepHeader = ({
    step,
    title,
    canEdit,
  }: {
    step: number;
    title: string;
    canEdit: boolean;
  }) => (
    <div
      onClick={() => canEdit && setActiveStep(step)}
      className="px-5 py-4 flex items-center justify-between border-b cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full flex items-center justify-center text-sm font-bold bg-[#602962] text-white">
          {step}
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>

      {activeStep !== step && canEdit && (
        <Pencil className="size-4 text-[#602962]" />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-7xl h-[100dvh] sm:h-[90vh] sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="border-b px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Calendar className="size-6 text-[#602962]" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Book Appointment</h2>
              <p className="text-xs text-gray-500 hidden sm:block">
                Fill in the details below
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="size-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid lg:grid-cols-3 gap-6">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-4">

              {/* STEP 1 */}
              <div className={getStepStyle(1)}>
                <StepHeader step={1} title="Department & Visit Type" canEdit />
                {activeStep === 1 && (
                  <div className="p-5">
                    <DepartmentSelection
                      department={form.department}
                      appointmentType={form.appointmentType}
                      onDepartmentChange={(v) =>
                        handleChange("department", v)
                      }
                      onAppointmentTypeChange={(v) =>
                        handleChange("appointmentType", v)
                      }
                    />
                  </div>
                )}
              </div>

              {/* STEP 2 */}
              <div className={getStepStyle(2)}>
                <StepHeader
                  step={2}
                  title="Select Doctor"
                  canEdit={canGoStep2}
                />
                {activeStep === 2 && (
                  <div className="p-5">
                    <DoctorSelection
                      department={form.department}
                      selectedDoctor={form.doctor}
                      onDoctorSelect={(d) => handleChange("doctor", d)}
                    />
                  </div>
                )}
              </div>

              {/* STEP 3 */}
              <div className={getStepStyle(3)}>
                <StepHeader
                  step={3}
                  title="Date & Time"
                  canEdit={canGoStep3}
                />
                {activeStep === 3 && (
                  <div className="p-5">
                    <DateTimeSelection
                      selectedDate={form.date}
                      selectedTime={form.time}
                      onDateSelect={(d) => handleChange("date", d)}
                      onTimeSelect={(t) => handleChange("time", t)}
                    />
                  </div>
                )}
              </div>

              {/* STEP 4 */}
              <div className={getStepStyle(4)}>
                <StepHeader
                  step={4}
                  title="Patient Details"
                  canEdit={canGoStep4}
                />
                {activeStep === 4 && (
                  <div className="p-5">
                    <PatientInformation
                      {...form}
                      onFieldChange={handleChange}
                    />
                  </div>
                )}
              </div>

            </div>

            {/* RIGHT */}
            <div className="hidden lg:block space-y-4">
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