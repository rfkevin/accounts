import React, { useState } from "react";
import Input from "./input";
import useStyles from "./style";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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
  email: "",
};

const EmailConfirmation = () => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [showPassoword, setShowPassoword] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const forget = async (formData) => {
    try {
    } catch (e) {
      setMessage(e.response.data.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await forget(formData);
    if (response) {
      setMessage("check your email and spam");
      setSuccess(true);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Email</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" color={success ? "primary" : "error"}>
                {message}
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default EmailConfirmation;
