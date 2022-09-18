import React from "react";
import useStyles from "./style";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SocialFooter from "./socialFooter";
import Box from "@mui/material/Box";
import InfoFooter from "./infoFooter";

const Footer = () => {
  const classes = useStyles();
  return (
      <Box component="footer" >
      <Grid
        container
        className={classes.container}
        justifyContent="center"
        spacing={4}
      >
        <Grid item container justifyContent="center" spacing={4}>
          <SocialFooter />
        </Grid>
        <InfoFooter />
        <Grid item align="center">
          <Typography variant="caption" color="text.secondary">
            &copy; Portals Hall .All rights reserverd.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
