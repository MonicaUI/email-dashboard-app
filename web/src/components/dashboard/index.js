import React from "react";
import Sidebar from "./sidebar";
import Dashboard from "./dashboard";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
