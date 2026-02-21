import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  onBookAppointment: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookAppointment }) => {
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
      <header
        className="sticky top-0 z-[999] border-b bg-white shadow-lg"
        style={{ borderColor: "var(--border-light)" }}
      >
        <div className="container-page h-[72px] flex items-center justify-between relative">

          {/* LOGO */}
          <img
            src="/BMC.png"
            alt="BMC"
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer translate-y-[1px]"
          />

          {/* CENTER NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
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

          {/* RIGHT AREA - BOOK BUTTON */}
          <button
            onClick={onBookAppointment}
            className="flex items-center justify-center font-medium text-sm px-[var(--spacing-lg)] py-[var(--spacing-md)] rounded-[var(--radius-lg)] transition-colors duration-[var(--transition-base)]"
            style={{
              backgroundColor: "var(--primary-purple)",
              color: "var(--text-inverse)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--primary-purple-light)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--primary-purple)")
            }
          >
            Book Appointment
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col p-6 gap-6">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="text-left text-base font-medium text-gray-700 hover:text-[var(--primary-purple)] transition"
            >
              {label}
            </button>
          ))}

          {/* Mobile Book Button */}
          <button
            onClick={() => {
              onBookAppointment();
              setOpen(false);
            }}
            className="mt-4 bg-[var(--primary-purple)] text-white py-2 rounded-lg"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;