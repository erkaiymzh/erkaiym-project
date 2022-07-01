import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/authContext";
import Routing from "./Routing";
import CoursesContextProvider from "./components/contexts/courseContext";
import FavContextProvider from "./components/contexts/favContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CoursesContextProvider>
        <FavContextProvider>
          <Routing />
        </FavContextProvider>
      </CoursesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
