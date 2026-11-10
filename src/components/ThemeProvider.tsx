"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_KEY = "portfolio-theme-v2";

function getThemeFromStorage(): Theme {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
}

const themeStore = {
  subscribe: (callback: () => void) => {
    window.addEventListener("storage", callback);
    window.addEventListener("theme-change", callback);
    return () => {
      window.removeEventListener("storage", callback);
      window.removeEventListener("theme-change", callback);
    };
  },
  getSnapshot: () => getThemeFromStorage(),
  getServerSnapshot: () => "dark" as Theme,
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(themeStore.subscribe, themeStore.getSnapshot, themeStore.getServerSnapshot);
  const [, forceRender] = useState(0);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem(THEME_KEY, newTheme);
    window.dispatchEvent(new Event("theme-change"));
    forceRender((n) => n + 1);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
