import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === "en" ? "hi" : "en");
  };

  return (
    <button className="lang-toggle" onClick={toggleLanguage}>
      {lang === "en" ? "हिं" : "EN"}
    </button>
  );
};

export default LanguageToggle;
