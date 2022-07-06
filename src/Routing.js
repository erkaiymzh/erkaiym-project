import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddCourse from "./components/AddCourse/AddCourse";
import Cart from "./components/Cart/Cart";
import Comments from "./components/Comments/Comments";
import { authContext } from "./components/contexts/authContext";
import CourseList from "./components/CourseList/CourseList";
import Details from "./components/Details/Details";
import EditCourse from "./components/EditCourse/EditCourse";
import Favs from "./components/Favs/Favs";
import Footer from "./components/Footer/Footer";
import FormPay from "./components/FormPay/FormPay";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginForm from "./components/LoginForm/LoginForm";
import PageNotFound from "./components/PageNotFound";
import RegForm from "./components/RegForm/RegForm";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegForm />} />
        <Route
          path="/add-course"
          element={isAdmin ? <AddCourse /> : <Navigate replace to="/*" />}
        />
        <Route path="/list" element={<CourseList />} />
        <Route path="/courses/edit/:id" element={<EditCourse />} />
        <Route path="/courses/details/:id" element={<Details />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/formpay" element={<FormPay />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
