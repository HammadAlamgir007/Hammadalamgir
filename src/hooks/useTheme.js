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
 *
 * State starts as `null` (unknown) so the prerendered HTML and the first
 * client render match; the real theme is read from the page after mount.
 */
export default function useTheme() {
  const [isDark, setIsDark] = useState(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (isDark === null) return;
    document.documentElement.classList.toggle("dark", isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#1a1714" : "#ffffff");
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

  return { isDark: isDark === true, toggle };
}
