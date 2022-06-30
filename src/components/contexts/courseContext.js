import axios from "axios";
import React, { useReducer } from "react";

const API = "http://localhost:8000/courses";

export const courseContext = React.createContext();

const INIT_STATE = {
  courses: [],
  oneCourse: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...state,
        courses: action.payload,
      };
    case "GET_ONE_COURSE":
      return { ...state, oneCourse: action.payload };
    default:
      return state;
  }
}

const CoursesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createCourse(newCourse) {
    await axios.post(API, newCourse);
  }

  async function getCourses() {
    let res = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_COURSES",
      payload: res.data,
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

  return (
    <courseContext.Provider
      value={{
        courses: state.courses,
        oneCourse: state.oneCourse,
        createCourse,
        getCourses,
        deleteCourse,
        getOneCourse,
        updateCourse,
      }}>
      {children}
    </courseContext.Provider>
  );
};

export default CoursesContextProvider;
