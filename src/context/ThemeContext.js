import { createContext, useContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

const ThemeContext = createContext();

export function ThemeProviderCustom({ children }) {
  const [themeOptions, setThemeOptions] = useState({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },
    },
    typography: {
      fontFamily: "Roboto",
    },
  });

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("mui-theme");
    if (savedTheme) {
      setThemeOptions(JSON.parse(savedTheme));
    }
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("mui-theme", JSON.stringify(themeOptions));
  }, [themeOptions]);

  const theme = createTheme(themeOptions);

  return (
    <ThemeContext.Provider value={{ theme, themeOptions, setThemeOptions }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
