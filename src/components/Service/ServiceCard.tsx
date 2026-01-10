import React from "react";
// import "./ServiceCard.css";

interface Props {
  index: number;
  title: string;
  description: string;
  // icon: React.ReactNode;
}

export const ServiceCard: React.FC<Props> = ({
  index,
  title,
  description,
  // icon,
}) => {
  return (
    <div className={`service-card theme-${index % 4}`}>
      {/* <div className="icon-wrapper">{icon}</div> */}

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="learn-more">
        Learn more <span>→</span>
      </span>
    </div>
  );
};
