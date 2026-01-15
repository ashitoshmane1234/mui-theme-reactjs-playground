import { Box, Card, CardContent, Stack, Typography, Divider, Button, Alert, TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { buildMuiTheme } from "../../theme/buildTheme";

export default function PreviewCanvas({ draftTheme }) {
  return (
    <Box
      sx={{
        flex: 1,
        position: "relative",
        backgroundColor: "background.paper",
        backgroundImage: `
          linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "24px 24px",
      }}
    >
      <Box sx={{ position: "absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <ThemeProvider theme={buildMuiTheme(draftTheme)}>
          <Box width={420}>
            <Typography variant="overline" color="text.secondary" gutterBottom>PREVIEW</Typography>
            <Card sx={{ borderRadius:3, boxShadow:12 }}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6">Live Theme Preview</Typography>
                  <Divider/>
                  <Button variant="contained">Primary Button</Button>
                  <Button variant="outlined" color="secondary">
  Secondary Outlined
</Button>
                  <Alert severity="success">Success Alert</Alert>
                  <Alert severity="warning">Warning Alert</Alert>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="subtitle1">Preview Card</Typography>
                      <Typography variant="body2">This preview reflects draft changes only.</Typography>
                    </CardContent>
                  </Card>
                  <TextField label="Sample Input" fullWidth/>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </ThemeProvider>
      </Box>
    </Box>
  );
}
