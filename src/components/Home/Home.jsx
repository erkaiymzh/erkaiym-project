import {
  Container,
  Typography,
  Button,
  Card,
  Box,
  CardContent,
  IconButton,
  CardMedia,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container
        maxWidth="xl"
        style={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h3" style={{ fontWeight: "800px" }}>
          Online courses that inspire
        </Typography>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          style={{ marginTop: "40px", fontSize: "30px" }}>
          Sign Up
        </Button>
      </Container>
      {/* cards */}
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0 50px 0",
        }}>
        <Card sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Want to know more about art?
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div">
                Click for more info
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://static.tildacdn.com/tild3130-3634-4930-b161-616261316239/guide_architecture_3.png"
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Course about ancient history
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div">
                Click for more info
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://static.tildacdn.com/tild6439-3833-4166-a133-323462646465/1989089.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0 50px 0",
        }}>
        <Card sx={{ display: "flex", maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "grey",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Want to know more about art?
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div">
                Click for more info
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://static.tildacdn.com/tild3130-3634-4930-b161-616261316239/guide_architecture_3.png"
            alt="Live from space album cover"
          />
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Course about ancient history
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div">
                Click for more info
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://static.tildacdn.com/tild6439-3833-4166-a133-323462646465/1989089.jpg"
            alt="Live from space album cover"
          />
        </Card>
      </Container>
      <Container
        maxWidth="xl"
        style={{
          height: "400px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        <Typography variant="h3" width="300px">
          We have lots of offers you would like!
        </Typography>
        <Button style={{ fontSize: "40px" }} variant="contained">
          See all courses
        </Button>
      </Container>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "40px",
          height: "400px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>
        // carousel s otzyvami
      </Container>
    </div>
  );
};

export default Home;
