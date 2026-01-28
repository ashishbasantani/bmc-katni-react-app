import React from "react";

interface AppointmentBadgeProps {
  size?: number; // total visible size
  onClick?: () => void;
}

const AppointmentBadge: React.FC<AppointmentBadgeProps> = ({
  size = 120, // 👈 MATCHES old floating button size
  onClick,
}) => {
  return (
    <>
    <svg
      width={size}
      height={size}
      viewBox="-15 0 200 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer", display: "block" }}
      onClick={onClick}
    >
      {/* DEFINITIONS */}
      <defs>
        <path
          id="textCircle"
          d="
            M 100,100
            m -52,0
            a 52,52 0 1,1 104,0
            a 52,52 0 1,1 -104,0
          "
        />
      </defs>

      {/* OUTER RING */}
      <circle cx="100" cy="100" r="62" fill="#232b63" />

      {/* INNER CIRCLE */}
      <circle cx="100" cy="100" r="47" fill="#ffffff" />

      {/* ROTATING TEXT */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="16s"
          repeatCount="indefinite"
        />

        <text
          fontSize="8"
          fontWeight="600"
          fill="#ffffff"
          letterSpacing="1.1"
        >
          <textPath href="#textCircle">
            • BOOK APPOINTMENT • BOOK APPOINTMENT • BOOK APPOINTMENT •
          </textPath>
        </text>
      </g>

      {/* CENTER ICON */}
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="45"
      >
        📅
      </text>
    </svg>

    {/* TEXT BELOW SVG */}
    <div className="appointment-text-box"
    style={{ cursor: "pointer"}}
      onClick={onClick}>
      <span className="appointment-text">Book Appointment</span>
    </div>
        
  </>
  );
};

export default AppointmentBadge;
