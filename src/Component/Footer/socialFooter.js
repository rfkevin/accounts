import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import useStyles from "./style";

const SocialFooter = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item align="center">
        <Typography variant="caption" color="text.secondary">
          Follow us
        </Typography>
      </Grid>
      <Grid item align="center">
        <Link href="https://www.facebook.com/PortalsHall" target="_blank">
          <FacebookIcon className={classes.icons} />
        </Link>
      </Grid>
      <Grid item align="center">
        <Link href="https://twitter.com/HallPortals" target="_blank">
          <TwitterIcon className={classes.icons} />
        </Link>
      </Grid>
      <Grid item align="center">
        <Link href="https://www.instagram.com/portalshall" target="_blank">
          <InstagramIcon className={classes.icons} />
        </Link>
      </Grid>
    </>
  );
};

export default SocialFooter;
