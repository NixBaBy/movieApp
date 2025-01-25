"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light"); 

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-[10px] border transition-all"
      aria-label="Theme toggle"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-transform ${
          theme === "light" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-transform ${
          theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
