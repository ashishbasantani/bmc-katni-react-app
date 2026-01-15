import React from "react";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";

interface Props {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string; // ✅ new prop
}

export const ServiceCard: React.FC<Props> = ({
  index,
  title,
  description,
  icon,
  slug,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`service-card theme-${index % 4}`}>
      <div className="icon-wrapper" aria-hidden>
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <span
        className="learn-more"
        onClick={() => navigate(`/services/${slug}`)}
        >
        Learn more →
      </span>
    </div>
  );
};
