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
    <Container>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Button onClick={handleValue}>Add</Button>
    </Container>
  );
};

export default AddComment;
