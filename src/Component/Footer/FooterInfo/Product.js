import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
const Products = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Link
          to="/contact"
          target="_blank"
          variant="caption"
          color="text.secondary"
          underline="none"
        >
          Portal Portfolio
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link
          to="/https://buzznovels.com"
          target="_blank"
          variant="caption"
          color="text.secondary"
          underline="none"
        >
          Voyage Finder(shcool project/alpha)
        </Link>
      </Grid>
    </Grid>
  );
};

export default Products;
