import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "black",
          height: "300px",
          color: "white",
        }}>
        <Box display="flex">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
              <Typography>khelo</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
