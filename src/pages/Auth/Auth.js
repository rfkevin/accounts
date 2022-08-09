import React, { useState } from "react";
import Input from "./input";
import { useNavigate, useLocation } from "react-router-dom";
import * as api from "../../api/index";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./style";
import FacebookLogin from "react-facebook-login";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone:"",
  dob:"",
  gender:"",
  address:"",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [message, setMessage] = useState("");
  const signin = async (formData) => {
    try {
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const signup = async (formData) => {
    try {
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassoword, setShowPassoword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  export const forgetPassword = () => {
    navigate("/email");
  };
  export const handleShowPassword = () =>
    setShowPassoword((prevShowPassword) => !prevShowPassword);
  export const handleSubmit = async (e) => {};
  export const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const switchMode = () => {
    setMessage("");
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassoword(false);
  };


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>{" "}
        <Typography variant="h5">
          {" "}
          {isSignup ? "Sign up" : "Sign In"}{" "}
        </Typography>{" "}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {" "}
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="firstName"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="lastName"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="phone"
                  label="Phone Number"
                  handleChange={handleChange}
                  half
                />
                <Input
                  name="address"
                  label="Address"
                  handleChange={handleChange}
                  half
                />
              </>
            )}{" "}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassoword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />{" "}
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}{" "}
          </Grid>{" "}
          <Typography variant="body2" color="error" className={classes.message}>
            {" "}
            {message}{" "}
          </Typography>{" "}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}{" "}
          </Button>{" "}
          <GoogleLogin
            auto_select
            onSuccess={async (credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account ? Sign In"
                  : "Don't have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={forgetPassword}> forgotten password </Button>{" "}
            </Grid>
          </Grid>{" "}
        </form>{" "}
      </Paper>{" "}
    </Container>
  );
};

export default Auth;
