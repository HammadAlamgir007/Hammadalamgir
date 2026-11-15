import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Light/dark theme. The initial class is set by an inline script in
 * public/index.html (no flash); this hook keeps React in sync and follows
 * the OS preference until the visitor picks a theme explicitly.
 */
export default function useTheme() {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#07080e" : "#f1f3f8");
  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!media) return undefined;
    const follow = (event) => {
      if (!readStored()) setIsDark(event.matches);
    };
    media.addEventListener?.("change", follow);
    return () => media.removeEventListener?.("change", follow);
  }, []);

  const toggle = useCallback(() => {
    setIsDark((dark) => {
      try {
        localStorage.setItem(STORAGE_KEY, dark ? "light" : "dark");
      } catch {
        /* storage unavailable — theme still switches for this visit */
      }
      return !dark;
    });
  }, []);

  return { isDark, toggle };
}
