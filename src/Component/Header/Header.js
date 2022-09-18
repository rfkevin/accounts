import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Drawers from "./drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggledrawer } from "./slice";
import { toggledarkMode } from "../../theme/slice";
import useStyles from "./style";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <Box className={classes.container}>
      <AppBar
        position="static"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton onClick={() => dispatch(toggledrawer())}>
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/">
            <img src="/assets/headerlogo.png" alt="logo header" height="50" />
          </Link>
          {!isMobile ? (
            <>
              <Typography
                component={Link}
                className={classes.menu}
                style={{ textDecoration: "none" }}
                to="/#news"
                color="text.primary"
                underline="none"
                variant="h6"
              >
                News
              </Typography>
              <Typography
                component={Link}
                className={classes.menu}
                style={{ textDecoration: "none" }}
                to="/products"
                color="text.primary"
                underline="none"
                variant="h6"
              >
                Products
              </Typography>
              <Typography
                component={Link}
                className={classes.menu}
                style={{ textDecoration: "none" }}
                to="/donation"
                color="text.primary"
                underline="none"
                variant="h6"
                sx={{ flexGrow: 1 }}
              >
                Donations
              </Typography>
            </>
          ) : (
            <Typography sx={{ flexGrow: 1 }}></Typography>
          )}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              dispatch(toggledarkMode());
            }}
            color="inherit"
          >
            {darkMode === true ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {isMobile && <Drawers />}
    </Box>
  );
};

export default Header;
