import React, { useContext, useEffect } from "react";
import { courseContext } from "../contexts/courseContext";
import { useParams } from "react-router-dom";
import AddComment from "../Comments/AddComment";

const Details = () => {
  const { getOneCourse } = useContext(courseContext);
  const { id } = useParams();
  useEffect(() => {
    getOneCourse(id);
  }, []);
  return (
    <div>
      <h1>details</h1>
      <AddComment />
    </div>
  );
};

export default Details;
