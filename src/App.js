import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import ShowcasePage from "./pages/ShowcasePage";
import ThemeEditor from "./pages/ThemeEditor";
import { ThemeProviderCustom, useThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { NAVBAR_HEIGHT } from "./components/Navbar";

function AppContent() {
  const { theme } = useThemeContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
  <CssBaseline />
  <BrowserRouter>
    <Navbar />

    <Box display="flex">
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: `${NAVBAR_HEIGHT}px`,
          ml: "64px", // collapsed sidebar width
          p: 3,
        }}
      >
        <Routes>
          <Route path="/" element={<ShowcasePage />} />
          <Route path="/theme" element={<ThemeEditor />} />
        </Routes>
      </Box>
    </Box>
  </BrowserRouter>
</ThemeProvider>
  );
}

function App() {
  return (
    <ThemeProviderCustom>
      <AppContent />
    </ThemeProviderCustom>
  );
}

export default App;
