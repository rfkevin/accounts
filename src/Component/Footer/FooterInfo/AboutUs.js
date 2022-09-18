import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
      <Typography
        component={Link}
        style={{ textDecoration: "none" }}
        to="/hire"
        color="text.secondary"
        variant="caption"
      >
          Hire me
        </Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography
        component={Link}
        style={{ textDecoration: "none" }}
        to="/purpose"
        color="text.secondary"
        variant="caption"
      >
          Purpose
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
