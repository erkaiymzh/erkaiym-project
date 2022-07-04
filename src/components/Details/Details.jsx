import React, { useContext, useEffect } from "react";
import { courseContext } from "../contexts/courseContext";
import { useParams } from "react-router-dom";
import AddComment from "../Comments/AddComment";
import { Box, Button, Container, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Details = () => {
  const { getOneCourse, oneCourse } = useContext(courseContext);
  const { id } = useParams();
  useEffect(() => {
    getOneCourse(id);
  }, []);
  return oneCourse ? (
    <Container>
      <Typography
        style={{ textAlign: "center", marginTop: "90px", marginBottom: "30px" }}
        variant="h4">
        {oneCourse.name}{" "}
      </Typography>
      <Box style={{ display: "flex" }}>
        <img component="img" width="50%" src={oneCourse.image} alt="Фото" />
        <Box style={{ marginLeft: "15px" }}>
          <div>{oneCourse.date}</div>

          <div style={{ marginTop: "20px" }}>
            <MonetizationOnIcon /> {oneCourse.price}
          </div>
          <Box
            style={{
              marginTop: "15px",
              marginLeft: "-30px",
            }}></Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              style={{ marginTop: "15px" }}
              variant="contained"
              color="success">
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
      <AddComment />
    </Container>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
