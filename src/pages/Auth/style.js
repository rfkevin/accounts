import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  container: {
    marginTop: 100,
    minHeight: "100vh",
    marginBottom: 50,
  },
  title: {
    color: "#63625f",
  },
  loading: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    align: "center",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    opacity: 0.8,
  },
  paper2: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
    opacity: 0.7,
    background: "grey900"
  },
  images:{
    height: "70%",
    width: "70%"
  },
  item:{
     '& span': {
       fontWeight: 800,

     }
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(6),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  google: {
    width : "100%"
  },
  purple:{
    color:"#BA4CFF"
  },
  red:{
    color:"#FF0000"
  },
  blue:{
    color:"#66B2FF"
  }
}));
