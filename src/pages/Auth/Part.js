import React from "react";
import { Paper, Grid, Typography, Container } from "@mui/material";
import useStyles from "./style";
const Part = () => {
  const classes = useStyles();
  return (
    <Container className={classes.paper2}>
      <Grid item xs={12} align="center">
        <Typography variant="h6" color="text.primary" className={classes.item}>
          <span className={classes.purple}>One account for </span>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" color="text.primary" className={classes.item}>
          <span className={classes.blue}>all Portals Halls</span>
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h6" color="text.primary" className={classes.item}>
          <span className={classes.red}>services</span>
        </Typography>
      </Grid>
      <Grid items xs={12}>
        <img
          className={classes.images}
          src="https://portalshall.s3.eu-west-3.amazonaws.com/main/Portals+Hall.png"
          alt="donation"
        />
      </Grid>
    </Container>
  );
};

export default Part;
