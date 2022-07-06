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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useNavigate } from "react-router-dom";
import { courseContext } from "../contexts/courseContext";
import { favContext } from "../contexts/favContext";
import { red } from "@mui/material/colors";

import { authContext } from "../contexts/authContext";
import { useCart } from "react-use-cart";
import { cartContext } from "../contexts/cartContext";

const color = red[500];

export default function CourseCard({ item }) {
  const navigate = useNavigate();
  const { deleteCourse, oneCourse } = React.useContext(courseContext);
  const { addCourseToFav, checkCourseInFav } = React.useContext(favContext);
  const { isAdmin } = React.useContext(authContext);
  const [checkCourse, setCheckCourse] = React.useState(checkCourseInFav(item));
  const { addProductToCart, checkProductInCart } =
    React.useContext(cartContext);
  const [checkProduct, setCheckProduct] = React.useState(
    checkProductInCart(item)
  );

  return (
    // <div style={{ display: " flex", flexDirection: "column" }}>
    <Card
      style={{
        margin: "35px",
        padding: "10px",
        borderRadius: "70px",
        border: "1px solid",
        boxShadow: "1px 2px 9px #F4AAB9",
        width: "400px",
      }}
      // sx={{ maxWidth: 350 }}
      display="flex">
      <CardHeader
        className="category"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Merriweather",
        }}
        title={item.category}
      />
      <CardHeader
        style={{ textAlign: "center", height: "50px" }}
        title={item.name}
      />
      <CardMedia
        style={{
          objectFit: "fill",
          boxShadow: "1px 2px 9px #F4AAB9",
        }}
        component="img"
        height="250"
        width="259"
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
          justifyContent: "center",
          padding: "10px",
          margin: "0 5px 0 5px",
        }}>
        <Button
          onClick={() => {
            addProductToCart(item);
            setCheckProduct(checkProductInCart(item));
          }}
          size="small">
          <AddShoppingCartIcon
            color={checkProduct ? "secondary" : "primary"}
            // style={{ color: checkProduct ? "red" : "blue" }} // использовали условный рендеринг
          />
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/courses/details/${item.id}`)}>
          More info{" "}
        </Button>
      </Box>
      <CardActions disableSpacing style={{ justifyContent: "center" }}>
        <IconButton
          aria-label="add to favorites"
          onClick={() => {
            addCourseToFav(item);
            setCheckCourse(checkCourseInFav(item));
          }}>
          <FavoriteIcon color={checkCourse ? "primary" : "disabled"} />{" "}
          {checkCourse ? "Added" : "Add to favs"}
        </IconButton>

        <IconButton
          style={{ display: isAdmin ? "block" : "none" }}
          onClick={() => navigate(`/courses/edit/${item.id}`)}>
          <EditIcon />
        </IconButton>
        <IconButton
          style={{ display: isAdmin ? "block" : "none" }}
          onClick={() => deleteCourse(item.id)}>
          <DeleteSweepIcon />
        </IconButton>
      </CardActions>
    </Card>
    // </div>
  );
}
