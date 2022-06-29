import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./components/contexts/authContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

const App = () => {
  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  );
};

export default App;
