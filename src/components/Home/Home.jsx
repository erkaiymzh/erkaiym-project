import {
  Container,
  Typography,
  Card,
  Box,
  CardContent,
  IconButton,
  CardMedia,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div
        className="container"
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography className="txt" variant="h3">
          Online courses that inspire
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center" }}
          className="txt">
          Explore with us
        </Typography>
        <Button
          onClick={() => navigate("/register")}
          variant="warning"
          style={{ marginTop: "50px", fontSize: "20px" }}>
          Sign Up
        </Button>
      </div>
      <Container display="flex"></Container>
      <Container style={{ height: "200px" }}>
        <img src="вст" />
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

      {/* cards */}

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          // margin: "0 20px 40px 20px",
        }}>
        <Card
          sx={{ display: "flex", maxWidth: "500px" }}
          style={{ margin: "0 20px 20px 20px" }}>
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
        <Card sx={{ display: "flex" }} style={{ margin: "0 20px 20px 20px" }}>
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
          justifyContent: "center",
          // margin: "0 20px 40px 20px",
        }}>
        <Card
          sx={{ display: "flex", maxWidth: "500px" }}
          style={{ margin: "0 20px 20px 20px" }}>
          >
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
        <Card sx={{ display: "flex" }} style={{ margin: "0 20px 20px 20px" }}>
          >
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
