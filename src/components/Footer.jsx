import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-6 py-4 text-center 
                       bg-gray-100 text-gray-900 
                       dark:bg-gray-900 dark:text-gray-200 
                       transition-colors duration-300">
      <div className="flex justify-center gap-6 mb-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/us"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Our Team
        </NavLink>
        
        <NavLink
          to="/reviews"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Reviews
        </NavLink>

        <NavLink
          to="/request"
          className={({ isActive }) =>
            isActive ? "font-bold text-amber-500 border-b border-amber-400" : ""
          }
        >
          Request
        </NavLink>
      </div>
      <p className="text-sm">
        WazSite-TechSolvant &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
