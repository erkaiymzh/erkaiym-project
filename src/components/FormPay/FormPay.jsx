// import { Card, CardHeader, Container, Typography } from "@mui/material";
// import React, { useContext } from "react";
// import { cartContext } from "../contexts/cartContext";
// import { courseContext } from "../contexts/courseContext";

// const FormPay = ({ item }) => {
//   const { courses } = useContext(courseContext);
//   const { cart } = useContext(cartContext);
//   return (
//     <Card
//       style={{
//         margin: "35px",
//         padding: "10px",
//         borderRadius: "70px",
//         border: "1px solid",
//         boxShadow: "1px 2px 9px #F4AAB9",
//         width: "400px",
//       }}
//       // sx={{ maxWidth: 350 }}
//       display="flex">
//         {courses.map((item)=> {
//       <Typography variant='h3' style={{
//         textAlign: "center",
//         fontWeight: "bold",
//         fontFamily: "Merriweather",
//       }}> {item.category}</Typography>

//       <Typography variant='h3' style={{
//         textAlign: "center",
//         fontWeight: "bold",
//         fontFamily: "Merriweather",
//       }}> {item.name}</Typography>

//       <Typography variant="h5" component="div">
//         TOTAL: {cart && cart?.totalPrice}
//       </Typography>
//         })}
//     </Card>
//   );
// };

// export default FormPay;
