import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.primary.main,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: "20px",
  },
  drawerHeader: {
   display: "flex",
   alignItems: "center",
   padding: theme.spacing(0, 1),
   // necessary for content to be below app bar
   ...theme.mixins.toolbar,
   justifyContent: "flex-end"
 },
  menu: {
    padding: theme.spacing(3),
  },
  text: {},
  options: {
    color: theme.palette.text.primary,
    underline: "none",
  },
}));
