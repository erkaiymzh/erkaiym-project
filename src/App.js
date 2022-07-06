import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/authContext";
import Routing from "./Routing";
import CoursesContextProvider from "./components/contexts/courseContext";
import FavContextProvider from "./components/contexts/favContext";
import CommentsContextProvider from "./components/contexts/commentsContext";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/contexts/cartContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <CoursesContextProvider>
            <CommentsContextProvider>
              <FavContextProvider>
                <Routing />
              </FavContextProvider>
            </CommentsContextProvider>
          </CoursesContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
