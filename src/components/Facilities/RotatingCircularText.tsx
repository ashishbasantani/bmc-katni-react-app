import React from "react";
// import "./RotatingCircularText.css";

const RotatingCircularText: React.FC = () => {
  return (
    <svg
      width={320}
      height={320}
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          id="circlePath"
          d="
            M160,160
            m-130,0
            a130,130 0 1,1 260,0
            a130,130 0 1,1 -260,0
          "
        />
      </defs>

      <g>
        <text
          fill="#7D3C98"
          fontSize={20}
          fontFamily="Arial, sans-serif"
          letterSpacing={1.7}
          textAnchor="start"
        >
          <textPath href="#circlePath" startOffset="0%">
            BMC, Katni, Since 1985 • BMC, Katni, Since 1985 • BMC, Katni, Since
            1985 • BMC, Katni, Since 1985 •
          </textPath>
        </text>

        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 160 160"
          to="360 160 160"
          dur="12s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default RotatingCircularText;