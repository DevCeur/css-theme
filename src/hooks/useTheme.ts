import Cookies from "js-cookie";

import { useState, useEffect } from "react";

import { getTheme, lightTheme, darkTheme } from "../theme";

export const useTheme = () => {
  const savedTheme = Cookies.get("theme");

  const light = getTheme({ theme: lightTheme });
  const dark = getTheme({ theme: darkTheme });

  const [theme, setTheme] = useState<"light" | "dark">(
    (savedTheme as "dark" | "light") || "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    const setLightTheme = () => {
      light.forEach((property) => {
        root.style.setProperty(property[0] as string, property[1] as string);
      });
    };

    const setDarkTheme = () => {
      dark.forEach((property) => {
        root.style.setProperty(property[0] as string, property[1] as string);
      });
    };

    if (theme === "light") {
      setLightTheme();
      Cookies.set("theme", "light");
    } else if (theme === "dark") {
      setDarkTheme();
      Cookies.set("theme", "dark");
    }
  }, [dark, light, theme]);

  const handleToggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();

    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return {
    theme,
    handleToggleTheme,
  };
};
