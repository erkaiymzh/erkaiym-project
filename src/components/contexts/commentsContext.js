import React, { useReducer } from "react";
import axios from "axios";

const API2 = "http://localhost:8000/comments";
export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
};

function reducer(state = INIT_STATE, action) {
  console.log(action.payload);
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        ...state,
        comments: action.payload.data,
      };
    case "GET_ONE_COMMENT":
      return { ...state, oneComment: action.payload };
    default:
      return state;
  }
}

const CommentsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createComment(newComment) {
    await axios.post(API2, newComment);
  }

  async function getComments() {
    let res = await axios(`${API2}${window.location.search}`);
    dispatch({
      type: "GET_COMMENTS",
      payload: res,
    });
  }
  // console.log(state.comments);

  // async function deleteCourse(id) {
  //   await axios.delete(`${API}/${id}`);
  //   getCourses();
  // }

  // async function getOneCourse(id) {
  //   let res = await axios(`${API}/${id}`);
  //   dispatch({
  //     type: "GET_ONE_COURSE",
  //     payload: res.data,
  //   });
  // }

  // async function updateCourse(id, editedCourse) {
  //   await axios.patch(`${API}/${id}`, editedCourse);
  // }

  return (
    <commentsContext.Provider value={{ createComment, getComments }}>
      {children}
    </commentsContext.Provider>
  );
};

export default CommentsContextProvider;
