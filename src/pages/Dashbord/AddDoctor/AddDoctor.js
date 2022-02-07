import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState([null]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked");
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("https://morning-depths-55912.herokuapp.com/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h2>add doctor</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          onChange={(e) => setName(e.target.value)}
          required
          variant="standard"
        />{" "}
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
        />{" "}
        <br />
        <Input
          accept="image/*"
          multiple
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Add doctor
        </Button>
        {success && <p style={{ color: "green" }}>Doctor Add Successfully</p>}
      </form>
      <Outlet />
    </div>
  );
};

export default AddDoctor;
