import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contexts/cartContext";

export default function Cart() {
  const navigate = useNavigate();
  const { getCart, cart, changeProductCount, deleteFromCart } =
    useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);
  // console.log(cart);
  return (
    <Container>
      <Typography variant="h3">My cart</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Count</TableCell>
              <TableCell align="right">SubPrice</TableCell>
              <TableCell align="right">Info</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart &&
              cart?.courses.map(
                (
                  row // проверка для объекта
                ) => (
                  <TableRow
                    key={row.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.item.name}
                    </TableCell>
                    <TableCell align="right">{row.item.price}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() =>
                          changeProductCount(row.count - 1, row.item.id)
                        }
                        aria-label="delete">
                        <RemoveIcon />
                      </IconButton>
                      {row.count}
                      <IconButton
                        onClick={() =>
                          changeProductCount(row.count + 1, row.item.id)
                        }
                        aria-label="delete">
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">{row.subPrice}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() => deleteFromCart(row.item.id)}
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
        }}>
        <Typography variant="h5" component="div">
          TOTAL: {cart && cart?.totalPrice}
        </Typography>
        <Button
          variant="contained"
          style={{ marginLeft: "10px" }}
          onClick={() => navigate("/formpay")}>
          BUY
        </Button>
      </Box>
    </Container>
  );
}
