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
  // const [brand,setBrand]=useState('');
  // const [color,setColor]=useState('');
  // const [owner,setOwner]=useState('');
  // const [carModel,setCarModel]=useState('');


  useEffect(() => {
    const token1 = localStorage.getItem("fm_token");
    if (token1) {
      setToken(token);
    } else {
      // redirect to 'login' TODO:
    }
  }, []);

  useEffect(()=>{
    axois.get("http://localhost:2500/rout").then((res) => {
      console.log(res.data);
      setCar(res.data);
    });
    
  },[])
  
  

  
  
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
            <p class="modal-card-title">Add Car</p>
            <button
              class="delete"
              aria-label="close"
              onClick={() => {
                setModal(false);
              }}
            ></button>
          </header>
          <section class="modal-card-body">
            <Add/>
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
         cars.map((car_value)=>{
          return(
            // console.log(">>>.",car)
            <Car color={car_value.color} brand={car_value.brand} owner={car_value.owner} />
          )
        })
       }
      </div>
     
    </div>
  );
};
export default AllCars;
