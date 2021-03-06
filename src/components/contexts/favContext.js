import { FavoriteSharp } from "@mui/icons-material";
import React, { useReducer } from "react";

export const favContext = React.createContext();

const INIT_STATE = {
  //1
  favs: null,
  count: 0,
};

function reducer(state = INIT_STATE, action) {
  //2
  switch (action.type) {
    case "GET_FAV":
      return {
        ...state,
        favs: action.payload,
      };
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE); //3

  function addCourseToFav(course) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        courses: [],
      };
    }
    let newFav = {
      item: course,
      count: 1,
    };
    let isCourseInFavs = favs.courses.some(item => item.item.id === course.id);
    // console.log(isCourseInFavs);
    if (isCourseInFavs) {
      favs.courses = favs.courses.filter(item => item.item.id != course.id);
    } else {
      favs.courses.push(newFav); //здесь добавили продукт в корзину
    }
    localStorage.setItem("favs", JSON.stringify(favs));
    getFavs();
  }

  function checkCourseInFav(course) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        courses: [],
      };
    }
    let isCourseInFavs = favs.courses.some(item => item.item.id === course.id);

    return isCourseInFavs;
  }

  function getFavs() {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (!favs) {
      favs = {
        courses: [],
      };
    }
    dispatch({
      type: "GET_FAV",
      payload: favs,
    });
  }

  function deleteFromFavs(id) {
    let favs = JSON.parse(localStorage.getItem("favs"));
    favs.courses = favs.courses.filter(item => item.item.id != id);
    localStorage.setItem("favs", JSON.stringify(favs));
    getFavs();
  }

  return (
    <favContext.Provider
      value={{
        favs: state.favs,
        addCourseToFav,
        checkCourseInFav,
        getFavs,
        deleteFromFavs,
      }}>
      {children}
    </favContext.Provider>
  );
};

export default FavContextProvider;
