import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVBAR_HEIGHT } from "./Navbar";

const COLLAPSED_WIDTH = 64;
const EXPANDED_WIDTH = 220;

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          top: `${NAVBAR_HEIGHT}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          width: COLLAPSED_WIDTH,
          overflowX: "hidden",
          transition: "width 0.25s ease",
          boxSizing: "border-box",

          "&:hover": {
            width: EXPANDED_WIDTH,
          },

          /* Show text only when expanded */
          "& .sidebar-text": {
            opacity: 0,
            transition: "opacity 0.15s ease",
          },

          "&:hover .sidebar-text": {
            opacity: 1,
          },
        },
      }}
    >
      <Box>
        <List>
          {/* Showcase */}
          <ListItemButton
            onClick={() => navigate("/")}
            selected={isActive("/")}
            sx={{
              justifyContent: "center",
              px: 2,

              "&.Mui-selected": {
                backgroundColor: "transparent",
              },

              "&.Mui-selected .MuiListItemIcon-root": {
                color: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <DashboardIcon />
            </ListItemIcon>

            <ListItemText
              primary="Showcase"
              className="sidebar-text"
              sx={{ ml: 2 }}
            />
          </ListItemButton>

          {/* Theme Editor */}
          <ListItemButton
            onClick={() => navigate("/theme")}
            selected={isActive("/theme")}
            sx={{
              justifyContent: "center",
              px: 2,

              "&.Mui-selected": {
                backgroundColor: "transparent",
              },

              "&.Mui-selected .MuiListItemIcon-root": {
                color: "primary.main",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <ColorLensIcon />
            </ListItemIcon>

            <ListItemText
              primary="Customize Theme"
              className="sidebar-text"
              sx={{ ml: 2 }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
