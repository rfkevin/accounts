import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Aggreements = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography
          component={Link}
          style={{ textDecoration: "none" }}
          to="/Confidentiality"
          color="text.secondary"
          variant="caption"
        >
          Confidentiality
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component={Link}
          style={{ textDecoration: "none" }}
          to="/terms"
          color="text.secondary"
          variant="caption"
        >
          Terms
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Aggreements;
