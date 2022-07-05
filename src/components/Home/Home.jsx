import {
  Container,
  Typography,
  Card,
  Box,
  CardContent,
  IconButton,
  CardMedia,
  Divider,
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
        <Typography className="txt" variant="h3" md={8}>
          Online courses that inspire
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginTop: "20px" }}
          className="txt">
          Explore with us
        </Typography>
        <Button
          onClick={() => navigate("/register")}
          style={{
            marginTop: "50px",
            fontSize: "20px",
            backgroundColor: "rgba(243, 239, 254)",
            color: "black",
            fontWeight: "bold",
          }}>
          Sign Up
        </Button>
      </div>
      <Box
        style={{
          display: "flex",
          width: "100%",
          height: "270px",
          backgroundImage:
            "url(https://cdn.trendhunterstatic.com/thumbs/classical-art.jpeg?auto=webp)",
          backgroundImageRepeat: "repeat-x",
          margin: "0",
        }}></Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Box
          className="we-have-lots"
          maxWidth="md"
          style={{
            height: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Typography
            className="txt"
            variant="h3"
            style={{ marginBottom: "30px" }}>
            We have lots of
          </Typography>
          <Typography
            className="txt"
            variant="h3"
            style={{ marginBottom: "30px" }}>
            offers for you!
          </Typography>
          <Button
            style={{
              fontSize: "20px",
              marginTop: "20px",
              backgroundColor: "rgba(243, 239, 254)",
            }}
            variant="warning"
            onClick={() => navigate("/list")}>
            See all courses
          </Button>
        </Box>
      </Box>
      <Box
        className="people-count"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "270px",
          margin: "0",
          backgroundColor: "rgba(243, 239, 254)",
          // backgroundImage:
          //   "url(https://cdn.dribbble.com/users/707385/screenshots/5609826/19_1_1.gif)",
        }}>
        <Typography
          style={{ color: "#192136", fontWeight: "bold" }}
          variant="h1">
          200.000
        </Typography>
        <Typography
          style={{ color: "#192136", fontWeight: "bold" }}
          variant="h5">
          {" "}
          people study with us
        </Typography>
      </Box>
      {/* cards */}
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          width: "100%",
        }}>
        <div className="txt">New Courses Starting this week </div>
      </Box>
      <Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "60px",
          }}>
          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0px 30px 20px 20px", borderRadius: "30px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(243, 239, 254)",
              }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Want to know more about art?
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="https://static.tildacdn.com/tild6238-3962-4866-a330-336230323339/photo.png"
              alt="Live from space album cover"
            />
          </Card>

          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0 30px 20px 20px", borderRadius: "30px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Course about history and specific signs
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="https://static.tildacdn.com/tild6439-3833-4166-a133-323462646465/1989089.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px",
          }}>
          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0 30px 20px 20px", borderRadius: "30px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "grey",
              }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Film lovers need this knowledge for sure!
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="data:image/png;base64,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"
              alt="Live from space album cover"
            />
          </Card>
          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0 30px 20px 30px", borderRadius: "30px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Tour for you to understand modern art{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2cPjdK0buuprofSVquHc8FPJwLlhMynWNw&usqp=CAU"
              alt="Live from space album cover"
            />
          </Card>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "30px ",
            marginBottom: "30px",
          }}>
          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0 30px 20px 20px", borderRadius: "30px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "grey",
              }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Become a cenitel of art with us{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="https://static.tildacdn.com/tild3637-6630-4936-a465-643236653636/__1-01.png"
              alt="Live from space album cover"
            />
          </Card>
          <Card
            sx={{ display: "flex", maxWidth: "500px", height: "200px" }}
            style={{ margin: "0 30px 20px 30px", borderRadius: "30px" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5" className="cards-name">
                  Critical thinking
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/list")}>
                  Click for more info →
                </Typography>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 250 }}
              image="https://static.tildacdn.com/tild3536-6430-4239-a532-343731353930/__1.png"
              alt="Live from space album cover"
            />
          </Card>
        </Box>
      </Box>
      {/* <div style={{ width: "100%", height: "400px" }}>
      <video
        src="https://youtu.be/P2DuTW36VHw"
        muted
        autoPlay={"autoplay"}
        preload="auto"
        loop
        style={{ borderRadius: "15px", width: "100%" }}>
        {" "}
        something
      </video>
    </div> */}
    </div>
  );
};

export default Home;
