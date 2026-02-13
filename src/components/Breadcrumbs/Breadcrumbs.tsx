import { Link, useLocation } from "react-router-dom";
import { breadcrumbMap } from "./Breadcrumbs.config";

const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  if (!pathname.startsWith("/services/")) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="px-4 py-3 text-sm"
      style={{ backgroundColor: "var(--bg-section)" }}
    >
      <div className="container-page py-3">
        <ol
          className="flex items-center gap-2"
          style={{ color: "var(--text-muted)" }}
        >
          {/* Home */}
          <li>
            <Link
              to="/"
              className="font-medium transition-colors"
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
              Home
            </Link>
          </li>

          {/* Services */}
          <li className="before:content-['/'] before:px-2 before:text-[var(--text-muted)]">
            <Link
              to="/"
              state={{ scrollTo: "services" }}
              className="font-medium transition-colors"
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
              Services
            </Link>
          </li>

          {/* Current */}
          <li className="before:content-['/'] before:px-2 before:text-[var(--text-muted)]">
            <span
              className="font-semibold"
              style={{ color: "var(--primary-purple)" }}
            >
              {breadcrumbMap[pathname]}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
