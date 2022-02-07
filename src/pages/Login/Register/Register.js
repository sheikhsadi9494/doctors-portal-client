import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import loginImg from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const { handleRegister, isLoading, user, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password Not Match");
      return;
    }
    handleRegister(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="h5" gutterBottom component="div">
            Register
          </Typography>
          <form onSubmit={handleRegisterSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-name"
              label="Your Name"
              type="text"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-email"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label="Your Password"
              type="password"
              autoComplete="current-password"
              name="password"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password2-input"
              label="ReEnter Password"
              type="password"
              autoComplete="current-password"
              name="password2"
              onBlur={handleOnBlur}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Register
            </Button>
            {isLoading && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            )}
            {user?.email && (
              <Alert sx={{ mx: 12, my: 3 }} severity="success">
                Successfully registerd !
              </Alert>
            )}
            {authError && (
              <Alert sx={{ mx: 12, my: 3 }} severity="error">
                {authError}
              </Alert>
            )}
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">already register ? please login</Button>
            </Link>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: '90%'}} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
