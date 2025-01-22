"use client";
import { Sun, Moon } from "lucide-react"; 
import { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light"); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); 
    document.documentElement.classList.toggle("dark", theme === "light"); 
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border transition-all"
      aria-label="Горимыг солих"
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
