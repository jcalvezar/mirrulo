"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context value
interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

// Provide a default value for the context
const defaultValue: ThemeContextProps = {
  theme: "light", // Default theme
  toggleTheme: () => {
    console.warn("toggleTheme is not implemented!"); // Placeholder for safety
  },
};

// Create the context
export const ThemeContext = createContext<ThemeContextProps>(defaultValue);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Save the theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme); // Set for CSS
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
