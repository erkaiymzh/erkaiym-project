import React, { useContext, useEffect } from "react";
import { courseContext } from "../contexts/courseContext";
import { useParams } from "react-router-dom";
import AddComment from "../Comments/AddComment";
import { Box, Button, Container, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TimerIcon from "@mui/icons-material/Timer";

import Comments from "../Comments/Comments";
import { commentsContext } from "../contexts/commentsContext";

const Details = ({ item }) => {
  const { getOneCourse, oneCourse } = useContext(courseContext);
  const { getComments, comments } = useContext(commentsContext);

  useEffect(() => {
    getComments();
  }, [comments]);
  const { id } = useParams();
  useEffect(() => {
    getOneCourse(id);
  }, []);
  return oneCourse ? (
    <div className="details" style={{ margin: "30px" }}>
      <Typography
        style={{
          textAlign: "left",
          margin: "90px 0 30px 30px",
        }}
        variant="h4">
        {oneCourse.name}
      </Typography>
      <Box style={{ display: "flex" }}>
        <img component="img" width="50%" src={oneCourse.image} alt="Фото" />
        <Box style={{ marginLeft: "15px" }}>
          <div>
            <CalendarMonthIcon /> {oneCourse.date}
          </div>

          <div style={{ marginTop: "20px" }}>
            <MonetizationOnIcon /> {oneCourse.price}
          </div>
          <div style={{ marginTop: "20px" }}>
            <TimerIcon /> {oneCourse.duration} days
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
      <div style={{ padding: "20px" }}>{oneCourse.description}</div>
      <AddComment />
      <Comments />
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Details;
