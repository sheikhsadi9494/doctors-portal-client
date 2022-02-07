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
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../images/login.png";
import useAuth from "../../../hook/useAuth";
const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { handleLogin, user, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleSubmitLogin = (e) => {
    handleLogin(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };
  const handleGoogle = () => {
    signInWithGoogle(location, navigate);

  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ mt: 8}}>
          <Typography variant="h5" gutterBottom component="div">
            Login
          </Typography>
          <form onSubmit={handleSubmitLogin}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-password-input"
              label="Your Password"
              type="password"
              autoComplete="current-password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            {isLoading && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <CircularProgress />
              </Box>
            )}
            {user?.email && (
              <Alert sx={{ mx: 12, my: 3 }} severity="success">
                Successfully login !
              </Alert>
            )}
            {authError && (
              <Alert sx={{ mx: 12, my: 3 }} severity="error">
                {authError}
              </Alert>
            )}

            <Link style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">new user ? please register</Button>
            </Link>
          </form>
          <div style={{margin: 25}}>-------------- or --------------</div>
          <Button variant="contained" onClick={handleGoogle}>Sign in With Google</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{width: '90%'}} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
