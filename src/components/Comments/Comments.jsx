import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { commentsContext } from "../contexts/commentsContext";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { authContext } from "../contexts/authContext";

const Comments = ({ item }) => {
  const { getComments, comments, deleteComment } = useContext(commentsContext);
  const { currentUser } = useContext(authContext);
  // console.log(getComments);
  useEffect(() => {
    getComments();
  }, []);
  return (
    <Container maxWidth="lg" display="flex">
      {comments.map(item => (
        <div key={item.id}>
          <Typography>{currentUser.email}</Typography>
          <Box
            label={currentUser}
            style={{
              border: "2px solid",
              borderRadius: "20px",
              width: "400px",
              height: "50px",
              margin: "5px 0 5px 0",
              display: " flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Typography
              key={item.id}
              item={item}
              style={{ padding: "5px 0 0 10px" }}>
              {item.comment}
            </Typography>
            <IconButton onClick={() => deleteComment(item.id)}>
              <DeleteSweepIcon />
            </IconButton>
          </Box>
        </div>
      ))}
    </Container>
  );
};

export default Comments;
