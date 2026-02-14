import LanguageToggle from "../LanguageToggle";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden md:block py-[var(--spacing-sm)] text-[var(--text-inverse)] text-xs"
        style={{ backgroundColor: "var(--primary-purple)" }}
      >
        <div className="container-page flex items-center justify-between">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-xs">
            <span className="flex items-center gap-2">
              <Mail className="w-[14px] h-[14px]" />
              bmchospital@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-[14px] h-[14px]" />
              +91 7622220620
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
    </>
  );
};

export default TopBar;