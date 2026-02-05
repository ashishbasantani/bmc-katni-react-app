import { Link, useLocation } from "react-router-dom";
import { breadcrumbMap } from "./Breadcrumbs.config";
import "./Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  if (!pathname.startsWith("/services/")) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        <li>
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
        </li>

        <li className="breadcrumb-item">
          <Link
            to="/"
            state={{ scrollTo: "services" }}
            className="breadcrumb-link"
          >
            Services
          </Link>
        </li>

        <li className="breadcrumb-item">
          <span className="breadcrumb-active">
            {breadcrumbMap[pathname]}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
