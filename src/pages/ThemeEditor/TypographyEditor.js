import { Card, CardContent, Stack, Typography, Divider, Button } from "@mui/material";

export default function TypographyEditor({ draftTheme, setDraftTheme, themeConfig, setThemeConfig }) {
  const handleFontChange = (e) => {
    setDraftTheme({ ...draftTheme, typography: { fontFamily: e.target.value } });
  };

  const applyTypography = () => {
    setThemeConfig({ ...themeConfig, typography: draftTheme.typography });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="overline">Typography</Typography>
          <Typography variant="h6">Font Family</Typography>
          <Divider/>
          <select value={draftTheme.typography.fontFamily} onChange={handleFontChange} style={{width:"100%", padding:10, borderRadius:6, fontSize:15}}>
            <option value="Roboto, sans-serif">Roboto</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="Georgia, serif">Georgia</option>
            <option value="monospace">Monospace</option>
          </select>
          <Button size="small" variant="contained" onClick={applyTypography}>Apply Typography</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
