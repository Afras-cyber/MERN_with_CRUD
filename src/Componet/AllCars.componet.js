import React, { Component } from "react";
import Car from "./Car";
import "bulma/css/bulma.css";

export default class AllCars extends Component {
  render() {
    return (
      <div className="container">
        <div class="">
          <Car />
        </div>
      </div>
    );
  }
}
