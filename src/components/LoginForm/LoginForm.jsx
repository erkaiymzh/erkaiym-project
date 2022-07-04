import { Container, TextField, Typography, Button, Alert } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, error } = useContext(authContext);

  function handleValues() {
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }
    login(email, password, navigate);
    navigate("/list");
  }

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
      {error ? <Alert severity="error">{error}</Alert> : null}
      <TextField
        style={{ margin: "5px" }}
        id="filled-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        style={{ margin: "5px" }}
        id="filled-basic"
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={handleValues} variant="contained">
        Log in
      </Button>
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
