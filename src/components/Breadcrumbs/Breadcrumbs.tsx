import { Link, useLocation } from "react-router-dom";
import { breadcrumbMap } from "./Breadcrumbs.config";

const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location;

  if (!pathname.startsWith("/services/")) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 px-4 py-3 text-sm">
      <ol className="flex items-center gap-2 text-gray-600">
        <li>
          <Link to="/" className="font-medium hover:text-purple-700">
            Home
          </Link>
        </li>

        <li className="before:content-['/'] before:px-2 before:text-gray-400">
          <Link
            to="/"
            state={{ scrollTo: "services" }}
            className="font-medium hover:text-purple-700"
          >
            Services
          </Link>
        </li>

        <li className="before:content-['/'] before:px-2 before:text-gray-400">
          <span className="font-semibold text-purple-700">
            {breadcrumbMap[pathname]}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
