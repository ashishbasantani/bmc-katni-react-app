import React, { useState } from "react";
import translateIcon from "../../src/assets/icons/translation.png"; // adjust path if needed

const LanguageToggle: React.FC = () => {
  const [isHindi, setIsHindi] = useState(false);

  const toggleLanguage = () => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;

    select.value = isHindi ? "en" : "hi";
    select.dispatchEvent(new Event("change"));

    setIsHindi(!isHindi);
  };

  return (
    <button
      className="lang-toggle-btn"
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        cursor: "pointer",
        backgroundColor: isHindi ? "#fff" : "#fff",
        color: "#000",
        transition: "all 0.3s ease",
        fontWeight: 500,
      }}
    >
      {/* Translation Image Icon */}
      <img
        src={translateIcon}
        alt="Translate"
        style={{ width: "18px", height: "18px" }}
      />
      {/* Language Text */}
      {isHindi ? "English" : "हिन्दी"}
    </button>
  );
};

export default LanguageToggle;
