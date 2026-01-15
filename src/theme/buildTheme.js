import { createTheme } from "@mui/material/styles";

export function buildMuiTheme(config) {
  return createTheme({
    palette: {
      mode: config.palette.mode,

      primary: {
        main: config.palette.primary,
      },

      secondary: {
        main: config.palette.secondary,
      },

      success: {
        main: config.palette.success,
      },

      warning: {
        main: config.palette.warning,
      },

      error: {
        main: config.palette.error,
      },

      background: config.palette.background,
    },

    typography: {
      fontFamily: config.typography.fontFamily,
      fontSize: config.typography.fontSize,
      fontWeightRegular: config.typography.fontWeightRegular,
      fontWeightMedium: config.typography.fontWeightMedium,
      fontWeightBold: config.typography.fontWeightBold,
    },

    shape: {
      borderRadius: config.shape.borderRadius,
    },
  });
}
