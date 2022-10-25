import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import Auth from "./pages/Auth/Auth";
import EmailConfirmation from "./pages/Auth/EmailConfirmation";
import ForgetPassword from "./pages/Auth/ForgetPassword";


const Apps = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );
  theme.typography.h4 = {
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box bgcolor="background">
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/Email" element={<EmailConfirmation />} />
            <Route path="/ForgetPassword" element={<ForgetPassword />} />
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Apps;
