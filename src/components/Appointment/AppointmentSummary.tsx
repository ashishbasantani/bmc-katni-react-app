import React from "react";
import { Doctor } from "../../types/appointment.types";

interface AppointmentSummaryProps {
  department: string;
  appointmentType: string;
  doctor: Doctor | null;
  date: string;
  time: string;
  canConfirm: boolean;
  onConfirm: () => void;
}

export default function AppointmentSummary({
  department,
  appointmentType,
  doctor,
  date,
  time,
  canConfirm,
  onConfirm,
}: AppointmentSummaryProps) {
  if (!department && !appointmentType) {
    return null;
  }

  return (
    <div
      className="
        bg-[#f3ecff]
        rounded-[26px]
        px-[28px] py-[32px]
        h-fit
        shadow-[0_2px_12px_rgba(107,47,214,0.08)]
      "
    >
      <div className="mb-[18px]">
        {/* Title */}
        <div className="flex items-center gap-[8px] font-semibold text-[17px] mb-[10px]">
          <span className="text-[#8d3bbd] text-[22px]">🩺</span>
          Appointment Summary
        </div>

        {/* Department */}
        <div className="text-[15px] mb-[8px]">
          <span className="text-[#8d3bbd] mr-[6px]">•</span>
          <b>Department</b>
          <br />
          <span className="ml-[18px]">{department}</span>
        </div>

        {/* Doctor */}
        <div className="text-[15px] mb-[8px]">
          <span className="text-[#8d3bbd] mr-[6px]">•</span>
          <b>Doctor</b>
          <br />
          <span className="ml-[18px]">{doctor?.name}</span>
        </div>

        {/* Date */}
        <div className="text-[15px] mb-[8px]">
          <span className="text-[#8d3bbd] mr-[6px]">•</span>
          <b>Date</b>
          <br />
          <span className="ml-[18px]">
            {date
              ? new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })
              : ""}
          </span>
        </div>

        {/* Time */}
        {time && (
          <div className="text-[15px] mb-[8px]">
            <span className="text-[#8d3bbd] mr-[6px]">•</span>
            <b>Time</b>
            <br />
            <span className="ml-[18px]">{time}</span>
          </div>
        )}
      </div>

      {/* Confirm Button */}
      {canConfirm && (
        <button
          onClick={onConfirm}
          disabled={!canConfirm}
          className="
            w-full
            mt-[30px]
            py-[16px]
            rounded-[30px]
            bg-[#602962]
            text-white
            text-[17px]
            font-semibold
            shadow-[0_2px_12px_rgba(107,47,214,0.08)]
            transition
            disabled:bg-[#dcdcdc]
            disabled:cursor-not-allowed
          "
        >
          Confirm Booking
        </button>
      )}
    </div>
  );
}
