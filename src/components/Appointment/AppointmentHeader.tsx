import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header
      className="
        bg-white
        sticky top-0 z-[999]
        shadow-lg
        md:shadow-lg
        max-md:shadow-[0_4px_14px_rgba(0,0,0,0.06)]
      "
    >
      <div
        className="
          max-w-[1300px]
          mx-auto
          px-[40px] py-[10px]
          flex items-center justify-between
          max-md:px-0
        "
      >
        {/* LOGO */}
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={process.env.PUBLIC_URL + "/BMC.png"}
            alt="BMC Logo"
            className="h-auto"
          />
        </div>

        {/* CENTER TEXT */}
        <div
          className="
            w-full
            text-center
            text-black
            max-md:px-[16px]
            max-md:pt-[22px]
            max-md:pb-[26px]
          "
        >
          <h1
            className="
              text-[28px] font-bold leading-[1.2] m-0
              max-md:text-[22px]
              max-md:leading-[1.25]
              max-md:mb-[4px]
            "
          >
            Book an Appointment
          </h1>

          <p
            className="
              mt-[6px]
              text-[15px]
              font-normal
              opacity-90
              max-md:text-[14px]
              max-md:opacity-80
              max-md:max-w-[260px]
              max-md:mx-auto
            "
          >
            Fill in your details to schedule your visit
          </p>
        </div>

        {/* RIGHT EMPTY SPACE */}
        <div className="w-[140px] max-md:hidden" />
      </div>
    </header>
  );
};

export default AppointmentHeader;
