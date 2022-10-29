import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#BF1D0A" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
        },
      },
    },
  },
  typography: {
    button: {
      fontSize: "1rem",
    },
  },
});

export default theme;
