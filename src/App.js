import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./Componet/SignUp";
import Login from "./Componet/Login";
import "bulma/css/bulma.css";
import AllCars from "./Componet/AllCars";

function App() {
  // const [btn,setBtn]=useBtn({})



  return (
    <Router>
      <div className="columns is-mobile">
        <div className="column is-three-quarters">
          <Route path="/login" component={Login} exact />
          <Route path="/" component={AllCars} exact />
          <Route path="/signup" component={SignUp} exact />
        </div>
        <div className="column"></div>
      </div>
    </Router>
  );
}

export default App;
