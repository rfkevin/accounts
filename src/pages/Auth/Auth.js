import React, { useState } from "react";
import Part from "./Part";
import { setRefreshCaptcha } from '../Component/Captcha/slices';
import Captcha from '../../Component/Captcha/captcha';

import jwt_decode from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch} from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Checkbox,
  Link,
  FormControlLabel
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./input";
import useStyles from "./style";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState("false")
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassoword, setShowPassoword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const label = (
    <p>
      {"I agree to "}
      <Link
        onClick={(e) => {
          e.preventDefault();
        }}
      >
         terms & conditions
      </Link>
    </p>
  );

  const forgetPassword = () => {
    navigate("/email");
  };
  const handleShowPassword = () => {
    setShowPassoword((prevShowPassword) => !prevShowPassword);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const checkboxChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  }
  const switchMode = () => {
    setMessage("");
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassoword(false);
  };

  const signin = async (formData) => {
    try {
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  const signup = async (formData) => {
    try {
      if (!checked){
      setMessage("Please indicate that you have read and agree to the terms and conditions")
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSignup){
      const user = await signup(formData);
    }
    else{
      const user = await signin(formData);
    }
    dispatch(setRefreshCaptcha())
  };



  return (
    <Container component="main" className={classes.container}>
      <Captcha/>
      <Grid container spacing={2} align="center">
        <Grid
          item
          contained
          xs={12}
          md={7}
          spacing={2}
          align="center"
          spacing={2}
        >
          <Part />
        </Grid>
        <Grid item contained xs={12} md={5} spacing={2} align="center">
          <Paper className={classes.paper} elevation={6}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>{" "}
            <Typography variant="h5">
              {" "}
              {isSignup ? "Sign up" : "Sign In"}{" "}
            </Typography>{" "}
            <form className={classes.form} onSubmit={handleSubmit}>
              <Grid container spacing={2} align="center">
                {" "}
                {isSignup && (
                  <>
                    <Input
                      name="firstName"
                      label="first Name"
                      handleChange={handleChange}
                      autoFocus
                      half
                    />
                    <Input
                      name="lastName"
                      label="last Name"
                      handleChange={handleChange}
                      half
                    />
                    <Input
                      name="phone"
                      label="Phone Number"
                      handleChange={handleChange}
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
                  <>
                    <Input
                      name="confirmPassword"
                      label="Repeat Password"
                      handleChange={handleChange}
                      type="password"
                    />
                    <Grid item xs={12} sm={12}>
                      <FormControlLabel
                        control={<Checkbox name="lgpd_agreement" />}
                        label={label}
                        onChange={checkboxChange}
                      />
                    </Grid>
                  </>
                )}{" "}
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="error"
                    className={classes.message}
                  >
                    {" "}
                    {message}{" "}
                  </Typography>{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {isSignup ? "Sign Up" : "Sign In"}{" "}
                  </Button>{" "}
                </Grid>
                <Grid item xs={12}>
                  <GoogleLogin
                    className={classes.google}
                    auto_select
                    onSuccess={async (credentialResponse) => {
                      const decoded = jwt_decode(credentialResponse.credential);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                    useOneTap
                  />
                </Grid>
                <Grid item>
                  <Button onClick={switchMode}>
                    {isSignup
                      ? "Already have an account ? Sign In"
                      : "Don't have an account ? Sign Up"}
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Button onClick={forgetPassword}> forgotten password </Button>{" "}
              </Grid>{" "}
            </form>{" "}
          </Paper>{" "}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Auth;
