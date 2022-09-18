import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FooterRessources from './FooterInfo/FooterRessources';
import Product from './FooterInfo/Product';
import Aggreements from './FooterInfo/Aggreements';
import AboutUs from './FooterInfo/AboutUs';
const InfoFooter = () => {
  return (
    <Grid item container justifyContent="center" spacing={2} >
      <Grid item xs={6} md={3} align="center" >
        <Typography variant="body1">Ressource</Typography>
        <FooterRessources/>
      </Grid>
      <Grid item xs={6} md={3}  align="center">
        <Typography variant="body1">Products</Typography>
        <Product/>
      </Grid>
      <Grid item xs={6} md={3} align="center">
        <Typography variant="body1">Agreements</Typography>
        <Aggreements/>
      </Grid>
      <Grid item xs={6} md={3} align="center">
        <Typography variant="body1">About us</Typography>
        <AboutUs/>
      </Grid>
    </Grid>
  );
};

export default InfoFooter;
