import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import LanguageToggle from "../LanguageToggle";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Facilities", id: "facilities" },
    { label: "About Us", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "Doctors", id: "doctors" },
  ];

  const goTo = useCallback(
    (id: string) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      setOpen(false);
    },
    [navigate, location.pathname]
  );

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:block py-[var(--spacing-sm)] text-[var(--text-inverse)] text-xs"
        style={{ backgroundColor: "var(--primary-purple)" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Mail className="w-[14px] h-[14px]" />
              bmchospital@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-[14px] h-[14px]" />
              +91 7012344405
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Follow us:</span>

            <a
              href="https://www.facebook.com/share/17mCcZWUG4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:opacity-80"
            >
              <Facebook className="w-[14px] h-[14px]" />
            </a>

            <a
              href="https://www.instagram.com/bmc_katni/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <Instagram className="w-[14px] h-[14px]" />
            </a>

            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-[var(--z-header)] border-b"
        style={{
          backgroundColor: "var(--bg-white)",
          borderColor: "var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <img
            src="/BMC.png"
            alt="BMC"
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer translate-y-[1px]"
          />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-sm font-medium transition-colors"
                style={{
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary-purple)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() =>
              window.open("https://wa.me/917012344405", "_blank", "noopener")
            }
            className="flex items-center justify-center font-['Inter'] font-medium text-sm px-[var(--spacing-lg)] py-[var(--spacing-md)] rounded-[var(--radius-lg)] transition-colors duration-[var(--transition-base)]"
            style={{
              backgroundColor: "var(--primary-purple)",
              color: "var(--text-inverse)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary-purple-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--primary-purple)")
            }
          >
            Book Appointment
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
