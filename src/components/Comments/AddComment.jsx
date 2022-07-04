import { Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { commentsContext } from "../contexts/commentsContext";

const AddComment = () => {
  const [comment, setComment] = useState("");
  const { createComment } = useContext(commentsContext);
  function handleValue() {
    let newComment = {
      comment,
    };
    createComment(newComment);
    console.log(newComment);
  }
  return (
    <Container maxWidth="lg">
      <TextField
        style={{ width: "500px", border: "2px", margin: "20px 0 20px 0" }}
        id="outlined-multiline-static"
        label="Leave your comment"
        multiline
        rows={3}
        defaultValue="Default Value"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Button
        size="md"
        style={{ margin: "20px 0 20px 10px" }}
        onClick={handleValue}>
        Add Comment
      </Button>
    </Container>
  );
};

export default AddComment;
