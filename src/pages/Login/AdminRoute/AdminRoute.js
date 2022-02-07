import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const AdmineRoute = ({ children }) => {
  const { user, isLoading, admin } = useAuth();
  const location = useLocation();

  if(isLoading) {
    return <Box sx={{ display: "flex", justifyContent: "center", mt: 40}}> <CircularProgress /> </Box>;
  }

  return user?.email && admin ? (
    children
  ) : (
    <Navigate to="/dashbord" state={{ from: location }} />
  );
};

export default AdmineRoute;
