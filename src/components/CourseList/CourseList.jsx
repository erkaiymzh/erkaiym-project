import { FormatAlignJustify } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { courseContext } from "../contexts/courseContext";
import CourseCard from "../CourseCard/CourseCard";

const CourseList = () => {
  const { courses, getCourses } = useContext(courseContext);
  useEffect(() => {
    getCourses();
  }, []);
  // console.log(courses);
  return (
    <Container>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {courses.map(item => (
          <CourseCard key={item.id} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default CourseList;
