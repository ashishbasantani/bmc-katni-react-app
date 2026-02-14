import React, { useState, useEffect } from "react";

const LanguageToggle: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "hi">("en");

  useEffect(() => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select && select.value === "hi") {
      setCurrentLang("hi");
    }
  }, []);

  const changeLanguage = (lang: "en" | "hi") => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return;

    select.value = lang;
    select.dispatchEvent(new Event("change"));
    setCurrentLang(lang);
  };

  return (
    <div className="lang-toggle-wrapper">
      <button
        type="button"
        className={`lang-option ${currentLang === "en" ? "active" : ""}`}
        onClick={() => changeLanguage("en")}
      >
        English
      </button>

      <button
        type="button"
        className={`lang-option ${currentLang === "hi" ? "active" : ""}`}
        onClick={() => changeLanguage("hi")}
      >
        हिन्दी
      </button>

      <style>
        {`
        .lang-toggle-wrapper {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          padding: 2px;
          height: 26px; /* smaller overall */
        }

        .lang-option {
          border: none;
          background: transparent;
          color: var(--text-inverse);
          padding: 0 10px; /* tighter */
          height: 20px; /* smaller inner */
          border-radius: var(--radius-full);
          cursor: pointer;
          font-weight: var(--font-weight-medium);
          font-size: 11px; /* smaller text */
          transition: var(--transition-base);
          white-space: nowrap;
        }

        .lang-option.active {
          background: var(--bg-white);
          color: var(--primary-purple);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .lang-option:hover:not(.active) {
          opacity: 0.85;
        }
        `}
      </style>
    </div>
  );
};

export default LanguageToggle;
