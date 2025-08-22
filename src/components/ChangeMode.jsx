import React from 'react'
import { useEffect, useState } from 'react';

function ChangeMode() {
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
    <div className='mx-6 my-4 bottom-8 left-0 sticky rounded-full w-[70px] h-[70px]'>
      <button
          onClick={toggleTheme} title='Change Mode'
          className="border px-3 py-2 rounded-full font-semibold transition 
                     bg-gray-200 text-gray-900 hover:bg-gray-300 
                     dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 w-[60px] h-[60px]"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
    </div>
  )
}

export default ChangeMode
