import React from "react";
import { Doctor } from "../../types/appointment.types";
import { DOCTORS } from "../../data/doctors.data";

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
    <section className="bg-white rounded-[22px] p-9 mb-7 shadow-[0_14px_34px_rgba(0,0,0,0.04)] 
                        max-md:p-6 max-md:rounded-[18px]">

      <label className="block text-base font-semibold mb-2">
        Choose Your Doctor
        <span className="text-[#8d3bbd] text-[15px] ml-1">*</span>
      </label>

      <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
        {filteredDoctors.map((doc) => {
          const isSelected = selectedDoctor?.id === doc.id;

          return (
            <div
              key={doc.id}
              onClick={() => onDoctorSelect(doc)}
              style={{ touchAction: "manipulation" }}
              className={`
                relative cursor-pointer
                bg-[#f5f0ff] border-2 border-[#d1b6f7]
                rounded-[26px] px-8 py-6
                flex items-center gap-5
                transition-all duration-200
                hover:border-[#6b2fd6]/60 active:scale-95
                ${isSelected
                  ? "border-[#6b2fd6] bg-[#f7f2ff] shadow-[0_2px_12px_rgba(107,47,214,0.08)]"
                  : ""}
              `}
            >
              {/* Content */}
              <div className="flex items-center gap-5 w-full">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-14 h-14 rounded-full border-2 border-[#d1b6f7] object-cover"
                />

                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {doc.name}
                  </div>
                  <div className="text-sm">
                    {doc.degree}
                  </div>
                  <div className="text-[13px] text-gray-500">
                    {doc.experience}
                  </div>
                </div>
              </div>

              {/* Checkmark */}
              <span
                className={`absolute right-6 text-[22px] text-[#6b2fd6] transition-opacity duration-200 
                ${isSelected ? "opacity-100" : "opacity-0"}`}
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
