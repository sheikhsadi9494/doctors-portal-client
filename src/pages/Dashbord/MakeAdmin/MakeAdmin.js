import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://morning-depths-55912.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });
  };

  return (
    <div>
      <h1>Make Adimn</h1>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          onBlur={handleOnBlur}
          sx={{ width: "30%" }}
          label="Email"
          type="email"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      {success && (
        <Alert sx={{ mx: 12, my: 3 }} severity="success">
          Successfully Promoted to Admin !
        </Alert>
      )}
      <Outlet />
    </div>
  );
};

export default MakeAdmin;
