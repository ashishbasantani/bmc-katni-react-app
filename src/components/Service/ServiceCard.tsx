import React from "react";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

interface Props {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const ServiceCard: React.FC<Props> = ({
  index,
  title,
  description,
  icon,
}) => {
  const navigate = useNavigate();
  return (
    <div className={`service-card theme-${index % 4}`}>
      <div className="icon-wrapper" aria-hidden>
        {icon}
        {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z" fill="currentColor" opacity="0.2"/>
          <path d="M4 20C4 16 8 13 12 13C16 13 20 16 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <span
        className="learn-more"
        onClick={() => navigate("/learn-more")}
      >
        Learn more →
      </span>
    </div>
  );
};