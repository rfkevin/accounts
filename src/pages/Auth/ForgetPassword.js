import React, { useState } from "react";
import Input from "./input";
import useStyles from "./style";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@mui/material";

const initialState = {
  password: "",
  confirmPassword: "",
};
const ForgetPassword = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { id, token } = useParams();
  const [formData, setFormData] = useState({ id: id, token: token });
  const [showPassoword, setShowPassoword] = useState(false);
    const navigate = useNavigate();
  const reset = async (formData) => {
    try {
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await reset(formData);
    if (response) {
      setMessage("successfully updated");
      setSuccess(true);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () =>
    setShowPassoword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Password Reset</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Input
            name="password"
            label="Password"
            handleChange={handleChange}
            type={showPassoword ? "text" : "password"}
            handleShowPassword={handleShowPassword}
          />
          <Input
            name="confirmPassword"
            label="Repeat Password"
            handleChange={handleChange}
            type="password"
          />
          {!success && (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Change Password
            </Button>
          )}
        </form>
        {success && (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              navigate("/auth");
            }}
          >
            Back to login
          </Button>
        )}
        <Typography variant="body2" color={success ? "primary" : "error"}>
          {message}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ForgetPassword;
