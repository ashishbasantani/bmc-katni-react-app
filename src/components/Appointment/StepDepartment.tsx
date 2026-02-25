import React from "react";

interface DepartmentSelectionProps {
  department: string;
  appointmentType: string;
  onDepartmentChange: (value: string) => void;
  onAppointmentTypeChange: (value: string) => void;
}

// Department data
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
    <section className="bg-white rounded-[22px] p-9 mb-7 shadow-[0_14px_34px_rgba(0,0,0,0.04)] 
                        max-md:px-5 max-md:py-6 max-md:rounded-[18px] max-md:mb-5">
      
      <div className="flex gap-6 max-md:flex-col max-md:gap-4">
        
        {/* Department Field */}
        <div className="flex-1">
          <label className="block text-base font-semibold mb-2 
                            max-md:text-sm max-md:mb-1">
            Select Department
            <span className="text-[#8d3bbd] text-[15px] ml-1">*</span>
          </label>

          <select
            aria-label="Select Department"
            value={department}
            onChange={(e) => onDepartmentChange(e.target.value)}
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-[#e1e1e1] 
                       text-[15px] focus:outline-none focus:ring-2 
                       focus:ring-[#8d3bbd]/30 focus:border-[#8d3bbd]
                       max-md:px-4 max-md:py-3 max-md:text-sm max-md:rounded-lg
                       cursor-pointer appearance-none bg-white"
          >
            <option value="">Select</option>
            {DEPARTMENTS.map((dep) => (
              <option key={dep} value={dep}>
                {dep}
              </option>
            ))}
          </select>
        </div>

        {/* Appointment Type Field */}
        <div className="flex-1">
          <label className="block text-base font-semibold mb-2 
                            max-md:text-sm max-md:mb-1">
            Appointment Type
          </label>

          <select
            aria-label="Appointment Type"
            value={appointmentType}
            onChange={(e) => onAppointmentTypeChange(e.target.value)}
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-[#e1e1e1] 
                       text-[15px] focus:outline-none focus:ring-2 
                       focus:ring-[#8d3bbd]/30 focus:border-[#8d3bbd]
                       max-md:px-4 max-md:py-3 max-md:text-sm max-md:rounded-lg
                       cursor-pointer appearance-none bg-white"
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
