import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if(isLoading) {
    return <Box sx={{ display: "flex", justifyContent: "center", mt: 40}}> <CircularProgress /> </Box>;
  }

  return user?.email ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
