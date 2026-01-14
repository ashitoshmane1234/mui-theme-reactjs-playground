import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NAVBAR_HEIGHT = 64;

function Navbar({ onMenuClick }) {
  return (
    <AppBar position="fixed" sx={{ height: NAVBAR_HEIGHT }}>
      <Toolbar sx={{ minHeight: NAVBAR_HEIGHT }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6">
          MUI Theme Playground
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
export { NAVBAR_HEIGHT };
