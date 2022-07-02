import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "black",
          height: "200px",
          color: "white",
        }}>
        <Box display="flex">
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={8}
              style={{
                marginTop: "20px",
                marginLeft: "40px",
              }}>
              <Typography variant="h6">Courses</Typography>
              <Typography variant="h6">Favourites</Typography>
              <Typography variant="h6">About Us</Typography>
              <img
                style={{
                  borderRadius: "50px",
                  height: "50px",
                  width: "50px",
                  justifyContent: "center",
                }}
                src="https://www.creativefabrica.com/wp-content/uploads/2021/01/23/Letter-S-SS-Logo-Design-Simple-Vector-Graphics-8004353-1-312x208.jpg"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              xs={6}
              md={8}
              style={{
                marginTop: "20px",
                marginLeft: "40px",
              }}>
              <Typography variant="h6">Want to stay tuned?</Typography>
              <Typography variant="h6">
                Then subscribe to our channel!
              </Typography>
              <Button variant="warning" size="md" style={{ marginTop: "10px" }}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
