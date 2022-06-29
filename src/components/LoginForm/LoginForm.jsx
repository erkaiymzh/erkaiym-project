import { Container, TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "30px",
        padding: "10px",
        width: "400px",
        textAlign: "center",
      }}>
      <Typography variant="h5">
        Welcome back! Please, log in to use your account
      </Typography>
      <TextField
        style={{ margin: "5px" }}
        id="filled-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        style={{ margin: "5px" }}
        id="filled-basic"
        label="Password"
        variant="outlined"
      />
      <Button variant="contained">Log in</Button>
      <Typography variant="h5">No account yet?</Typography>
      <Typography
        onClick={() => navigate("/register")}
        variant="p"
        color={"primary"}
        component="h2"
        style={{ cursor: "pointer" }}>
        Sign up
      </Typography>
    </Container>
  );
};

export default LoginForm;
