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

  const breadcrumbs = location.pathname
    .split("/")
    .filter(Boolean);

  const handleBreadcrumbClick = (crumb: string) => {
    if (crumb === "services") {
      navigate("/#services");
    } else {
      navigate(`/${crumb}`);
    }
  };


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
        </div>
      </header>
    </>
  );
};

export default Header;
