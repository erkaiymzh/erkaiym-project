import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import TimerIcon from "@mui/icons-material/Timer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { courseContext } from "../contexts/courseContext";

export default function CourseCard({ item }) {
  const navigate = useNavigate();
  const { deleteCourse } = React.useContext(courseContext);
  return (
    <Card
      style={{
        margin: "35px",
        padding: "10px",
        border: "1px solid",
        boxShadow: "1px 2px 9px #F4AAB9",
        width: "250px",
      }}
      sx={{ maxWidth: 300 }}
      display="flex">
      <CardHeader
        style={{ textAlign: "center", height: "50px" }}
        title={item.name}
      />
      <CardMedia
        style={{
          objectFit: "fill",
          boxShadow: "1px 2px 9px #F4AAB9",
          borderRadius: "10px",
        }}
        component="img"
        height="200"
        image={item.image}
        alt="Photo"
      />
      <CardContent>
        <Box style={{ display: "flex" }}>
          <CalendarMonthIcon />
          <Typography variant="body2" color="text.secondary">
            {item.date}
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <TimerIcon />
          <Typography variant="body2" color="text.secondary">
            {item.duration} days
          </Typography>
        </Box>
        <Box style={{ display: "flex" }}>
          <MonetizationOnIcon />
          <Typography variant="body2" color="text.secondary">
            {item.price}
          </Typography>
        </Box>
      </CardContent>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "10px",
        }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate(`/events/${item.id}`)}>
          Buy Course{" "}
        </Button>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton onClick={() => navigate(`/courses/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deleteCourse(item.id)}>
          <DeleteSweepIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
