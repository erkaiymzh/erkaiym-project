import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse/AddCourse";
import CourseList from "./components/CourseList/CourseList";
import EditCourse from "./components/EditCourse/EditCourse";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import RegForm from "./components/RegForm/RegForm";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegForm />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/list" element={<CourseList />} />
          <Route path="/courses/edit/:id" element={<EditCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
