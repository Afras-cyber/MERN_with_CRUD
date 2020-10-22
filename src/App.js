import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import AllCars from "./Componet/AllCars.componet";
import "bulma/css/bulma.css";

function App() {
  return (
    <Router>
      <div className="container m-4">
        <h1>Hello world</h1>
        <Route path="/" component={AllCars} />
        {/* <Route path="/signUp" component={SignUp}/>       */}
      </div>
    </Router>
  );
}

export default App;
