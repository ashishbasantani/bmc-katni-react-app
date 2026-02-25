import React from "react";

interface PatientInformationProps {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  reason: string;
  medications: string;
  allergies: string;
  onFieldChange: (
    field:
      | "name"
      | "email"
      | "phone"
      | "age"
      | "gender"
      | "reason"
      | "medications"
      | "allergies",
    value: any
  ) => void;
}

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
    <section className="bg-white rounded-[22px] p-9 mb-7 shadow-[0_14px_34px_rgba(0,0,0,0.04)]
                        max-md:p-5 max-md:rounded-[18px]">

      {/* Title */}
      <label className="block text-base font-semibold mb-4 max-md:text-[15px]">
        Patient Information
        <span className="text-[#8d3bbd] ml-1">*</span>
      </label>

      {/* Full Name */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
          Full Name <span className="text-[#8d3bbd]">*</span>
        </label>
        <input
          type="text"
          autoComplete="name"
          style={{ touchAction: "manipulation" }}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                     focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                     max-md:text-sm max-md:py-3 max-md:min-h-[44px]"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => onFieldChange("name", e.target.value)}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-2 gap-11 mb-5 max-md:grid-cols-1 max-md:gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Email <span className="text-[#8d3bbd]">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                       focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                       max-md:text-sm max-md:min-h-[44px]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => onFieldChange("email", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Phone <span className="text-[#8d3bbd]">*</span>
          </label>
          <input
            type="tel"
            autoComplete="tel"
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                       focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                       max-md:text-sm max-md:min-h-[44px]"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => onFieldChange("phone", e.target.value)}
          />
        </div>
      </div>

      {/* Age + Gender */}
      <div className="grid grid-cols-2 gap-11 mb-5 max-md:grid-cols-1 max-md:gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Age <span className="text-[#8d3bbd]">*</span>
          </label>
          <input
            type="number"
            min="1"
            max="150"
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                       focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                       max-md:text-sm max-md:min-h-[44px]"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => onFieldChange("age", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Gender <span className="text-[#8d3bbd]">*</span>
          </label>

          <div className="flex gap-3 max-md:grid max-md:grid-cols-3 max-md:gap-2">
            {GENDER_OPTIONS.map((g) => {
              const selected = gender === g;

              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => onFieldChange("gender", g)}
                  style={{ touchAction: "manipulation" }}
                  className={`
                    h-11 min-w-[80px] rounded-[14px] text-[15px]
                    border transition-all duration-200
                    max-md:w-full max-md:min-w-0 max-md:text-sm max-md:min-h-[44px]
                    ${
                      selected
                        ? "border-2 border-[#6b2fd6] bg-[#f7f2ff] text-[#6b2fd6]"
                        : "border-gray-300 bg-white hover:border-[#6b2fd6]/50"
                    }
                  `}
                >
                  {g}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Reason */}
      <div className="mb-5">
        <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
          Reason for Visit <span className="text-[#8d3bbd]">*</span>
        </label>
        <textarea
          rows={4}
          style={{ touchAction: "manipulation" }}
          className="w-full px-4 py-3 rounded-[14px] border border-gray-300 text-[15px]
                     resize-none focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                     max-md:text-sm max-md:min-h-[120px]"
          value={reason}
          onChange={(e) => onFieldChange("reason", e.target.value)}
          placeholder="Describe your symptoms or reason for visit"
        />
      </div>

      {/* Medications + Allergies */}
      <div className="grid grid-cols-2 gap-11 max-md:grid-cols-1 max-md:gap-4">
        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Current Medications (Optional)
          </label>
          <input
            type="text"
            autoComplete="off"
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                       focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                       max-md:text-sm max-md:min-h-[44px]"
            placeholder="List any current medications"
            value={medications}
            onChange={(e) =>
              onFieldChange("medications", e.target.value)
            }
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 max-md:text-[13px]">
            Allergies (Optional)
          </label>
          <input
            type="text"
            autoComplete="off"
            style={{ touchAction: "manipulation" }}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-[15px]
                       focus:outline-none focus:ring-2 focus:ring-[#6b2fd6]/40
                       max-md:text-sm max-md:min-h-[44px]"
            placeholder="List any allergies"
            value={allergies}
            onChange={(e) =>
              onFieldChange("allergies", e.target.value)
            }
          />
        </div>
      </div>
    </section>
  );
}
