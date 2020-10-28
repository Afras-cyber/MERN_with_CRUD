import React from "react";
import "bulma/css/bulma.css";
import Signup from "./SignUp";
import Add from "./Add";

const Navbar = (props) => {
  console.log("props", props);
  return (
    // <div className="container">
    //   <nav class="navbar" role="navigation" aria-label="main navigation">
    //     <div class="navbar-brand">
    //       <a
    //         role="button"
    //         class="navbar-burger burger"
    //         aria-label="menu"
    //         aria-expanded="false"
    //         data-target="navbarBasicExample"
    //       >
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>

    //     <div id="navbarBasicExample" class="navbar-menu">
    //       <div class="navbar-end">
    //         <div class="navbar-item">
    //           {/* <div
    //             class="buttons"
    //             onClick={() => props?.setModal(!props.model)}
    //             >
    //             <a class="button is-primary">
    //             <strong>Sign up</strong>
    //             </a>
    //           </div> */}
    //           <div className="buttons">
    //             <a class="button is-light">Log in</a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <Signup setModal={props.setModal} model={props.model} />
    //   <Add setAdCar={props.setAdCar} adCar={props.adCar} />
    // </div>
    <div>
      <button
        className="button is-dark"
        onClick={() => props?.setModal(!props.model)}
      >Signup</button>
   <Signup setModal={props.setModal} model={props.model} />
    </div>
  );
};

export default Navbar;
