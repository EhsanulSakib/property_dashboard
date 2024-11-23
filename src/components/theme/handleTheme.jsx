"use client";

import { useTheme } from "../provider/ThemeWrapper";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className=""
    >
      {theme === "light" ? <FaMoon className="text-lg lg:text-2xl cursor-pointer" /> : <FaSun className="text-lg lg:text-2xl cursor-pointer" />}
    </button>
  );
};

export default ThemeToggle;
