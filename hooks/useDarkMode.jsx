import React, { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.querySelector("html").classList.add("dark");
    } else {
      setDarkMode(false);
      document.querySelector("html").classList.remove("dark");
    }
  }, []);

  function toggleDarkMode() {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("html").classList.remove("dark");
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  }

  return { toggleDarkMode, darkMode };
}
