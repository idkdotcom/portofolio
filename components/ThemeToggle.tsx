"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";

    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = stored ?? "dark";
    document.documentElement.classList.toggle("dark", initial === "dark");

    return initial;
  });

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
