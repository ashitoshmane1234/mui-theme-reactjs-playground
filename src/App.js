import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import ShowcasePage from "./pages/ShowcasePage";
import ThemeEditor from "./pages/ThemeEditor/index"; 
import Navbar, { NAVBAR_HEIGHT } from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeContextProvider } from "./context/ThemeContext";

function AppLayout() {
  const location = useLocation();

  // Map routes to display names
  const pageTitles = {
    "/": "Showcase",
    "/theme": "Customize Theme",
  };

  const currentPage = pageTitles[location.pathname] || "";

  return (
    <>
      <Navbar />

      {/* Horizontal bar showing current selection */}
      <Box
        sx={{
          position: "fixed",
          top: `${NAVBAR_HEIGHT}px`,
          left: "64px", // start after collapsed sidebar
          right: 0,
          height: "40px",
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          px: 3,
          borderBottom: 1,
          borderColor: "divider",
          zIndex: 1100,
        }}
      >
        <Typography variant="subtitle1">{currentPage}</Typography>
      </Box>

      <Box display="flex" sx={{ mt: `calc(${NAVBAR_HEIGHT}px + 40px)` }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
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
    </>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
