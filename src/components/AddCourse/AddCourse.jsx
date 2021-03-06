import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { courseContext } from "../contexts/courseContext";

const categories = [
  {
    label: "Art",
    value: "Art",
  },
  {
    label: "Cinema",
    value: "Cinema",
  },
  {
    label: "History",
    value: "History",
  },
  {
    label: "Lecture",
    value: "Lecture",
  },
];

const AddCourse = () => {
  const { createCourse } = useContext(courseContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");

  const handleChange = event => {
    setCategory(event.target.value);
  };

  function handleValues() {
    let newCourse = {
      name,
      description,
      image,
      date,
      price,
      duration,
      category,
    };
    createCourse(newCourse);
    navigate("/list");
  }

  return (
    <Container
      maxwidth="lg"
      style={{ backgroundColor: "white", borderRadius: "10px" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "40px 0 40px 0",
          padding: "10px",
        }}>
        <Typography variant="h4" color="primary">
          Add a new course, please
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name of a course"
          variant="outlined"
          style={{ margin: "5px 0 5px 0" }}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextField
          id="outlined-select-currency"
          select
          label="Select category"
          value={category}
          onChange={handleChange}>
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          style={{ margin: "5px 0 5px 0" }}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Image URL"
          variant="outlined"
          style={{ margin: "5px 0 5px 0" }}
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <TextField
          type={"date"}
          id="outlined-basic"
          variant="outlined"
          style={{ margin: "5px 0 5px 0" }}
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <FormControl sx={{ m: 1 }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            endAdornment={<InputAdornment position="end">days</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">
            Duration
          </FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={+price}
            onChange={e => setPrice(+e.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>

        <Button
          variant="contained"
          color="success"
          style={{ width: "200px" }}
          onClick={() => handleValues()}>
          Add course
        </Button>
      </Box>
    </Container>
  );
};

export default AddCourse;
