import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Sync state across different components using the hook
  useEffect(() => {
    const handleThemeChange = (e) => {
      // Prevent recursive updates if already in sync
      setTheme((prev) => prev !== e.detail ? e.detail : prev);
    };
    window.addEventListener("portfolio-theme-change", handleThemeChange);
    return () => window.removeEventListener("portfolio-theme-change", handleThemeChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      // Dispatch outside of React's state transition safely using setTimeout
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: next }));
      }, 0);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
