import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./scss/main.css";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
