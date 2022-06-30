import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/authContext";
import Routing from "./Routing";
import CoursesContextProvider from "./components/contexts/courseContext";

const App = () => {
  return (
    <AuthContextProvider>
      <CoursesContextProvider>
        <Routing />
      </CoursesContextProvider>
    </AuthContextProvider>
  );
};

export default App;
