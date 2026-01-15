import { Card, CardContent, Stack, Typography, Divider, Button, FormControlLabel, Switch } from "@mui/material";

export default function AppearanceEditor({ draftTheme, setDraftTheme, themeConfig, setThemeConfig }) {
  const toggleMode = () => {
    setDraftTheme({ ...draftTheme, palette: { ...draftTheme.palette, mode: draftTheme.palette.mode === "light" ? "dark" : "light" } });
  };

  const applyAppearance = () => {
    setThemeConfig({ ...themeConfig, palette: { ...themeConfig.palette, mode: draftTheme.palette.mode } });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="overline">Appearance</Typography>
          <Typography variant="h6">Mode</Typography>
          <Divider/>
          <FormControlLabel control={<Switch checked={draftTheme.palette.mode === "dark"} onChange={toggleMode}/>} label="Dark Mode"/>
          <Button size="small" variant="contained" onClick={applyAppearance}>Apply Appearance</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
