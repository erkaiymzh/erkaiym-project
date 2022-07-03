import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/authContext";
import Routing from "./Routing";
import CoursesContextProvider from "./components/contexts/courseContext";
import FavContextProvider from "./components/contexts/favContext";
import CommentsContextProvider from "./components/contexts/commentsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CoursesContextProvider>
        <CommentsContextProvider>
          <FavContextProvider>
            <Routing />
          </FavContextProvider>
        </CommentsContextProvider>
      </CoursesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
