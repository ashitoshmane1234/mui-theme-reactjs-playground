import { Card, CardContent, Stack, Typography, Divider, Button } from "@mui/material";

export default function ColorEditor({ draftTheme, setDraftTheme, themeConfig, setThemeConfig }) {
  const handlePrimaryColor = (e) => {
    setDraftTheme({ ...draftTheme, palette: { ...draftTheme.palette, primary: e.target.value } });
  };

  const handleSecondaryColor = (e) => {
    setDraftTheme({ ...draftTheme, palette: { ...draftTheme.palette, secondary: e.target.value } });
  };

  const applyColors = () => {
    setThemeConfig({
      ...themeConfig,
      palette: { ...themeConfig.palette, primary: draftTheme.palette.primary, secondary: draftTheme.palette.secondary },
    });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="overline">Color System</Typography>
          <Typography variant="h6">Colors</Typography>
          <Divider/>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Primary</Typography>
            <input type="color" value={draftTheme.palette.primary} onChange={handlePrimaryColor}/>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Secondary</Typography>
            <input type="color" value={draftTheme.palette.secondary} onChange={handleSecondaryColor}/>
          </Stack>
          <Button size="small" variant="contained" onClick={applyColors}>Apply Colors</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
