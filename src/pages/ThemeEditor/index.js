import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useThemeConfig } from "../../context/ThemeContext";
import { buildMuiTheme } from "../../theme/buildTheme";

import ColorEditor from "./ColorEditor";
import AppearanceEditor from "./AppearanceEditor";
import TypographyEditor from "./TypographyEditor";
import PreviewCanvas from "./PreviewCanvas";

export default function ThemeEditor() {
  const { themeConfig, setThemeConfig } = useThemeConfig();
  const [draftTheme, setDraftTheme] = useState(themeConfig);

  useEffect(() => setDraftTheme(themeConfig), [themeConfig]);

  return (
    <Box width="100%">
      {/* MAIN LAYOUT */}
      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 160px)",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        {/* LEFT PANEL */}
        <Box
          sx={{
            width: 360,
            borderRight: "1px solid",
            borderColor: "divider",
            overflowY: "auto",
            p: 3,
          }}
        >
          <Stack spacing={3}>
            <ColorEditor draftTheme={draftTheme} setDraftTheme={setDraftTheme} themeConfig={themeConfig} setThemeConfig={setThemeConfig}/>
            <AppearanceEditor draftTheme={draftTheme} setDraftTheme={setDraftTheme} themeConfig={themeConfig} setThemeConfig={setThemeConfig}/>
            <TypographyEditor draftTheme={draftTheme} setDraftTheme={setDraftTheme} themeConfig={themeConfig} setThemeConfig={setThemeConfig}/>
          </Stack>
        </Box>

        {/* RIGHT PANEL */}
        <PreviewCanvas draftTheme={draftTheme}/>
      </Box>
    </Box>
  );
}
