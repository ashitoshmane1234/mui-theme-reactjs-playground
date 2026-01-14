import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Alert,
  Stack,
} from "@mui/material";

function ShowcasePage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        UI Showcase
      </Typography>

      {/* Buttons */}
      <Typography variant="h6" gutterBottom>
        Buttons
      </Typography>
      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="contained">Primary</Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="text">Text</Button>
      </Stack>

      {/* Cards */}
      <Typography variant="h6" gutterBottom>
        Cards
      </Typography>
      <Grid container spacing={2} mb={4}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <CardContent>
                <Typography variant="h6">Card {item}</Typography>
                <Typography>
                  This card adapts to the selected theme.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Form */}
      <Typography variant="h6" gutterBottom>
        Form Elements
      </Typography>
      <Stack spacing={2} maxWidth={400} mb={4}>
        <TextField label="Name" />
        <TextField label="Email" />
        <Button variant="contained">Submit</Button>
      </Stack>

      {/* Alerts */}
      <Typography variant="h6" gutterBottom>
        Alerts
      </Typography>
      <Stack spacing={2}>
        <Alert severity="success">Success Alert</Alert>
        <Alert severity="warning">Warning Alert</Alert>
        <Alert severity="error">Error Alert</Alert>
      </Stack>
    </Box>
  );
}

export default ShowcasePage;
