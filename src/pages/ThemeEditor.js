import {
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Switch,
  Divider,
  FormControlLabel,
  Grid,
} from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import { useThemeContext } from "../context/ThemeContext";

function ThemeEditor() {
  const { themeOptions, setThemeOptions } = useThemeContext();

  const handlePrimaryColor = (e) => {
    setThemeOptions({
      ...themeOptions,
      palette: {
        ...themeOptions.palette,
        primary: { main: e.target.value },
      },
    });
  };

  const handleSecondaryColor = (e) => {
    setThemeOptions({
      ...themeOptions,
      palette: {
        ...themeOptions.palette,
        secondary: { main: e.target.value },
      },
    });
  };

  const toggleMode = () => {
    setThemeOptions({
      ...themeOptions,
      palette: {
        ...themeOptions.palette,
        mode:
          themeOptions.palette.mode === "light" ? "dark" : "light",
      },
    });
  };

  const handleFontChange = (e) => {
    setThemeOptions({
      ...themeOptions,
      typography: {
        fontFamily: e.target.value,
      },
    });
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Theme Customization
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Adjust the theme and see changes applied instantly across the app.
      </Typography>

      <Grid container spacing={3}>
        {/* Color Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <ColorLensIcon color="primary" />
                  <Typography variant="h6">Colors</Typography>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Primary Color</Typography>
                  <input
                    type="color"
                    value={themeOptions.palette.primary.main}
                    onChange={handlePrimaryColor}
                  />
                </Stack>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography>Secondary Color</Typography>
                  <input
                    type="color"
                    value={themeOptions.palette.secondary.main}
                    onChange={handleSecondaryColor}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Mode Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <DarkModeIcon color="primary" />
                  <Typography variant="h6">Appearance</Typography>
                </Stack>

                <Divider />

                <FormControlLabel
                  control={
                    <Switch
                      checked={themeOptions.palette.mode === "dark"}
                      onChange={toggleMode}
                    />
                  }
                  label="Dark Mode"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Font Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <FontDownloadIcon color="primary" />
                  <Typography variant="h6">Typography</Typography>
                </Stack>

                <Divider />

                <select
                  value={themeOptions.typography.fontFamily}
                  onChange={handleFontChange}
                  style={{
                    padding: "10px",
                    borderRadius: "6px",
                    fontSize: "16px",
                  }}
                >
                  <option value="Roboto">Roboto</option>
                  <option value="Arial">Arial</option>
                  <option value="Georgia">Georgia</option>
                  <option value="monospace">Monospace</option>
                </select>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ThemeEditor;
