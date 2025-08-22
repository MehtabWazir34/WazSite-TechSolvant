import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-100 shadow-md dark:bg-gray-900 transition-colors duration-300">
      <img
        src="logo.png"
        alt="logo"
        className="w-20 h-14 rounded-lg"
      />

      <nav className="hidden md:block">
        <ul className="flex gap-6 font-semibold text-gray-900 dark:text-gray-200">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/us">Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to={"/reviews"}>Reviews</Link></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
      
        <button
          onClick={toggleTheme}
          className="px-3 py-2 rounded-lg font-semibold transition 
                     bg-gray-200 text-gray-900 hover:bg-gray-300 
                     dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <Link to="/request">
          <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg font-bold text-white">
            Send Request
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
