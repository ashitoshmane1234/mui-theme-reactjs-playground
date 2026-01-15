import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import defaultThemeConfig from "../theme/defaultTheme";
import { buildMuiTheme } from "../theme/buildTheme";

const ThemeContext = createContext();

const STORAGE_KEY = "mui-theme-config";

export function ThemeContextProvider({ children }) {
  const [themeConfig, setThemeConfig] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultThemeConfig;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(themeConfig));
  }, [themeConfig]);

  const muiTheme = buildMuiTheme(themeConfig);

  return (
    <ThemeContext.Provider value={{ themeConfig, setThemeConfig }}>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeConfig = () => useContext(ThemeContext);
