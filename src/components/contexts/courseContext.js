import axios from "axios";
import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/courses";

export const courseContext = React.createContext();

const INIT_STATE = {
  courses: [],
  oneCourse: null,
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload.data,
        pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_COURSE":
      return { ...state, oneCourse: action.payload };
    default:
      return state;
  }
}

const CoursesContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createCourse(newCourse) {
    await axios.post(API, newCourse);
  }

  async function getCourses() {
    let res = await axios(`${API}${window.location.search}`);
    console.log(res);
    dispatch({
      type: "GET_COURSES",
      payload: res,
    });
  }
  console.log(state.courses);

  async function deleteCourse(id) {
    await axios.delete(`${API}/${id}`);
    getCourses();
  }

  async function getOneCourse(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_COURSE",
      payload: res.data,
    });
  }

  async function updateCourse(id, editedCourse) {
    await axios.patch(`${API}/${id}`, editedCourse);
  }

  function filterByType(type, value) {
    const search = new URLSearchParams(window.location.search);
    if (value == "all") {
      search.delete(type);
    } else {
      search.set(type, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  }

  return (
    <courseContext.Provider
      value={{
        courses: state.courses,
        oneCourse: state.oneCourse,
        pages: state.pages,
        createCourse,
        getCourses,
        deleteCourse,
        getOneCourse,
        updateCourse,
        filterByType,
      }}>
      {children}
    </courseContext.Provider>
  );
};

export default CoursesContextProvider;
