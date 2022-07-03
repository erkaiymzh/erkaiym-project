import { FormatAlignJustify } from "@mui/icons-material";
import { Box, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AddComment from "../Comments/AddComment.jsx";
import { courseContext } from "../contexts/courseContext";
import CourseCard from "../CourseCard/CourseCard";
import Filtration from "../Filtration/Filtration";

const CourseList = () => {
  const { courses, getCourses, pages } = useContext(courseContext);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchParams({
      q: search,
      _page: page,
      _limit: 2,
      // price_gte: price[0],
      // price_lte: price[1],
    });
  }, [search, page]);

  useEffect(() => {
    getCourses();
  }, [searchParams]);
  // console.log(courses);

  return (
    <Container>
      <Filtration search={search} setSearch={setSearch} />
      <Box style={{ display: "flex", justifyContent: "center" }}>
        {courses.map(item => (
          <CourseCard key={item.id} item={item} />
        ))}
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <Pagination
          style={{ marginBottom: "20px" }}
          page={page}
          count={isNaN(pages) ? 0 : pages}
          variant="outlined"
          color="secondary"
          onChange={(e, value) => setPage(value)}
        />
      </Box>
    </Container>
  );
};

export default CourseList;
