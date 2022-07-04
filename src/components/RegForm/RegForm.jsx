import { Button, Container, TextField, Typography, Alert } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../contexts/authContext";

const RegForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signUp, error } = useContext(authContext);

  function handleValues() {
    if (!email || !password) {
      alert("Please fill in!");
      return;
    }
    signUp(email, password, navigate);
  }

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          width: "350px",
          padding: "10px",
        }}>
        <Typography variant="h4">Register Form</Typography>
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
        <TextField
          style={{ margin: "5px" }}
          id="filled-basic"
          label="Password Confirm"
          variant="outlined"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        <Button
          onClick={handleValues}
          style={{ width: "150px" }}
          variant="contained">
          Register
        </Button>
        <Typography marginTop="10px" variant="h5">
          Already have an account?
        </Typography>
        <Typography
          onClick={() => navigate("/login")}
          variant="p"
          color={"primary"}
          component="h4"
          style={{ cursor: "pointer" }}>
          Login by clicking here
        </Typography>
      </Container>
    </>
  );
};

export default RegForm;
