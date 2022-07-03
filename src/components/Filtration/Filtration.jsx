import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
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

const Filtration = ({ search, setSearch }) => {
  const [category, setCategory] = React.useState("");

  const handleChange = event => {
    setCategory(event.target.value);
  };
  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}>
      <Box>
        <Search
          style={{
            display: "flex",
            width: "400px",
            height: "42px",
            margin: "20px",
            paddingLeft: "15px",
            borderRadius: "50px",
            border: "2px solid black",
            outline: "none",
            position: "relative",
            transition: ".3s linear",
          }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={search}
            style={{ color: "black", border: "1px" }}
            placeholder="Search for a course"
            inputProps={{ "aria-label": "search" }}
            onChange={e => setSearch(e.target.value)}
          />
        </Search>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextField
          style={{ width: "200px", marginRight: "10px" }}
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
        <Button variant="contained" size="large">
          Show
        </Button>
      </Box>
    </Container>
  );
};

export default Filtration;
