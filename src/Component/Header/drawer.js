import React from "react";
import Typography from "@mui/material/Typography";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import InventoryIcon from '@mui/icons-material/Inventory';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from "react-router-dom";
import { setOpenDrawer } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
const Drawers = () => {
  const drawerWidth = 240;
  const classes = useStyles();
  const dispatch = useDispatch();
  const openDrawer = useSelector((state) => state.drawer);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => dispatch(setOpenDrawer(false))}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
      >
        <div className={classes.drawerHeader}></div>
        <Divider />
        <List>
          <ListItem onClick={() => dispatch(setOpenDrawer(false))}>
            <ListItemButton component={Link} to="/#news">
              <ListItemIcon><NewspaperIcon/></ListItemIcon>
              <ListItemText>
                <Typography
                  style={{ textDecoration: "none" }}
                  underline="none"
                  color="text.primary"
                >
                  News
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => dispatch(setOpenDrawer(false))}>
            <ListItemButton  component={Link} to="/donation">
              <ListItemIcon><InventoryIcon/></ListItemIcon>
              <ListItemText>
                <Typography
                  style={{ textDecoration: "none" }}
                  color="text.primary"
                  underline="none"
                >
                  Products
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => dispatch(setOpenDrawer(false))}>
            <ListItemButton>
              <ListItemIcon><VolunteerActivismIcon/></ListItemIcon>
              <ListItemText>
                <Typography
                  component={Link}
                  style={{ textDecoration: "none" }}
                  to="/donation"
                  color="text.primary"
                  underline="none"
                >
                  Donations
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Drawers;
