import { CardMedia, Container } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <CardMedia
        style={{
          objectFit: "fill",
        }}
        component="img"
        image="https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif"
        alt="Photo"
      />
    </Container>
  );
};

export default PageNotFound;
