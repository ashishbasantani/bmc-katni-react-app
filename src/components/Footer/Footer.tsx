import React, { useCallback } from "react";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate to home, then scroll to section
  const goTo = useCallback(
    (id: string) => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [navigate, location.pathname]
  );

  return (
    <footer className="bg-[var(--primary-purple)] text-[var(--text-inverse)]">
      {/* Main Footer */}
      <div className="container-page py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">BMC</h2>

            <p className="text-sm leading-relaxed text-[var(--primary-purple-soft)] mb-5">
              Trusted healthcare provider serving the community with excellence
              since 1995.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/bmc_katni/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:opacity-80"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/share/17mCcZWUG4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:opacity-80"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-[var(--primary-purple-soft)]">
              {[
                { label: "Home", id: "home" },
                { label: "Facilities", id: "facilities" },
                { label: "About Us", id: "about-us" },
                { label: "Services", id: "services" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => goTo(id)}
                    className="transition-colors hover:text-[var(--text-inverse)]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>

            <ul className="space-y-2 text-sm text-[var(--primary-purple-soft)]">
              {[
                { label: "Medicine", slug: "medicine" },
                { label: "Surgery", slug: "surgery" },
                { label: "Orthopedics", slug: "orthopedics" },
                { label: "Dental Care", slug: "dentalCare" },
              ].map(({ label, slug }) => (
                <li key={slug}>
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate(`/services/${slug}`);
                    }}
                    className="transition-colors hover:text-[var(--text-inverse)]"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>

            <ul className="space-y-3 text-sm text-[var(--primary-purple-soft)]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>BMC Hospital, Kerala, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={16} />
                <a
                  href="tel:+917012344405"
                  className="hover:text-[var(--text-inverse)]"
                >
                  +91 7012344405
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} />
                <a
                  href="mailto:bmchospital@gmail.com"
                  className="hover:text-[var(--text-inverse)]"
                >
                  bmchospital@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--primary-purple-light)]/40" />

      {/* Bottom */}
      <div className="py-5 text-center text-sm text-[var(--primary-purple-soft)]">
        © {currentYear} BMC Healthcare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
