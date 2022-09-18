import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const FooterRessources = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography
          component={Link}
          style={{ textDecoration: "none" }}
          to="/contact"
          color="text.secondary"
          variant="caption"
        >
          Contact us
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component={Link}
          style={{ textDecoration: "none" }}
          to="/Donation"
          color="text.secondary"
          variant="caption"
        >
          Donation
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterRessources;
