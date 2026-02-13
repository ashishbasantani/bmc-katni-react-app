import React from "react";

// Hospital address - managed internally by this component
const HOSPITAL_INFO = {
  name: "BMC Hospital",
  address: "Katni, Madhya Pradesh, India, 483501",
};

export default function VisitCard() {
  return (
    <div
      className="
        bg-white
        rounded-[22px]
        px-[20px] py-[24px]
        shadow-[0_2px_12px_rgba(107,47,214,0.08)]
      "
    >
      {/* Title */}
      <div className="flex items-center gap-[8px] font-semibold text-[17px] mb-[10px]">
        <span className="text-[#8d3bbd] text-[22px]">📍</span>
        Visit Us
      </div>

      {/* Content */}
      <div className="text-[15px] ml-[38px]">
        {HOSPITAL_INFO.name}
        <br />
        {HOSPITAL_INFO.address}
      </div>
    </div>
  );
}
