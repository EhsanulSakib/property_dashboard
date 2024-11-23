"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  //state to handle theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Detect initial theme from cookies or fallback to 'light'
    const storedTheme = Cookies.get("theme") || "light";
    setTheme(storedTheme);

    // Apply the theme class to the HTML element
    document.documentElement.className = storedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Update theme in cookies for persistence
    Cookies.set("theme", newTheme, { expires: 365 });

    // Apply the theme to the HTML element
    document.documentElement.className = newTheme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
