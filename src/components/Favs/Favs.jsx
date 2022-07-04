import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { favContext } from "../contexts/favContext";

export default function Favs() {
  const navigate = useNavigate();
  const { favs, getFavs, deleteFromFavs } = useContext(favContext);
  // console.log(cart);

  useEffect(() => {
    getFavs();
  }, []);

  return (
    <Container>
      <Typography variant="h4" style={{ textAlign: "center", margin: "10px" }}>
        My favourites
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favs &&
              favs?.courses.map(
                (
                  row // проверка для объекта
                ) => (
                  <TableRow
                    key={row.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <img
                        src={row.item.image}
                        style={{ width: "100px", height: "70px" }}
                      />
                    </TableCell>
                    <TableCell align="right">{row.item.name}</TableCell>
                    <TableCell align="right">{row.item.price}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => deleteFromFavs(row.item.id)}
                        aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          navigate(`/courses/details/${row.item.id}`)
                        }
                        aria-label="delete">
                        <InfoIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "30px 20px",
        }}></Box>
    </Container>
  );
}
