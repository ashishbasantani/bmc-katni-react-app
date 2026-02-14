import React, { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
      {/* Header */}
      <header
        className="sticky top-0 z-[var(--z-header)] border-b"
        style={{
          backgroundColor: "var(--bg-white)",
          borderColor: "var(--border-light)",
        }}
      >
        <div className="container-page h-[72px] flex items-center justify-between">
          {/* Logo */}
          <img
            src="/BMC.png"
            alt="BMC"
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer translate-y-[1px]"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    "var(--primary-purple)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "var(--text-secondary)")
                }
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Book Appointment */}
            <button
              onClick={() => navigate("/book_appointment")}
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

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* Nav Links */}
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
        </div>
      </div>
    </>
  );
};

export default Header;
