import React from "react";

// Contact information - managed internally by this component
const CONTACT_INFO = {
  phone: "+91 7012344405",
  email: "bmchospital@gmail.com",
};

export default function HelpCard() {
  return (
    <div
      className="
        bg-white
        rounded-[22px]
        px-[20px] py-[24px]
        shadow-[0_2px_12px_rgba(107,47,214,0.08)]
      "
    >
      <div
        className="
          flex items-center gap-[8px]
          font-semibold
          text-[17px]
          mb-[10px]
        "
      >
        <span
          className="
            text-[#8d3bbd]
            text-[22px]
          "
        >
          ❓
        </span>
        Need Help?
      </div>

      <div className="ml-[36px]">
        <div className="text-[15px] mb-[8px]">
          {CONTACT_INFO.phone}
        </div>
        <div className="text-[15px]">
          {CONTACT_INFO.email}
        </div>
      </div>
    </div>
  );
}
