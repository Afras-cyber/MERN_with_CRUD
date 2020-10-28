import React, { useState, useEffect } from "react";
import Car from "./Car";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Add from "./Add";
import axois from "axios";

import "bulma/css/bulma.css";

const AllCars = () => {
  const [modal, setModal] = React.useState(false);
  const [token, setToken] = useState(null);
  const [cars, setCar] = useState([]);

  useEffect(() => {
    console.log("Calling cards")
    axois.get("https://run.mocky.io/v3/ba7334fe-7438-40ad-bbdd-3d911c8b8f40").then(res => {
      console.log(res.data)
      console.log("Setting cars to state")
      setCar(res.data);
    });
  }, []);

  return (

    <div className="container">
      {token ? (
        "Name"
      ) : (
          <div className="setOfBtn">
            <Link to="/login">
              <button className="btn button is-warning">Login</button>
            </Link>
          </div>
        )}
      <div class={`modal ${modal ? "is-active" : ""}`}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title"></p>
            <button
              class="delete"
              aria-label="close"
              onClick={() => {
                setModal(false);
              }}
            ></button>
          </header>
          <section class="modal-card-body">
            <Add />
          </section>
          {/* <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
              </footer> */}
        </div>
      </div>

      <button
        className="btn button is-primary"
        onClick={() => {
          setModal(true);
        }}
      >
        Add Car
      </button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          cars.map((car_value) => {
            return (
              <Car color={car_value.color || ''} brand={car_value.brand || ''} owner={car_value.owner || ''} />
            )
          })
        }
      </div>

    </div>
  );
};
export default AllCars;
