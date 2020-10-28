import React from "react";
import "bulma/css/bulma.css";
const Signup = (props) => {
  console.log("SSign", props);
  return (
    // <div class={`modal ${props.model ? "is-active" : ""}`}>
    //   <div class="modal-background"></div>
    //   <div class="modal-content">
    //     hell0
    //     {/* <div className="signup-form">
    //       <form action="">
    //         <h2>Sign Up</h2>
    //         <div className="email-add">
    //           <label htmlFor="emaily">Email</label>
    //           <input type="email" name="emaily" id="emaily" />
    //         </div>
    //         <div className="name-add">
    //           <label htmlFor="namey">Email</label>
    //           <input type="text" name="namey" id="namey" />
    //         </div>
    //         <div className="pass-add">
    //           <label htmlFor="passy">Email</label>
    //           <input type="password " name="passy" id="passy" />
    //         </div>
    //         <button type="submit"> SignUp</button>   
    //       </form>
    //     </div> */}
    //   </div>
    //   <button
    //     class="modal-close is-large"
    //     aria-label="close"
    //     onClick={() => {
    //       props.setModal(!props.model);
    //     }}
    //   ></button>
    // </div>
    <div>
        <div className="signup-form is-mobile" style={{margin:'10%'}}>
         <form action="">
             <h2 className='title'>Sign Up</h2>
          <div className="email-add field">
              <label className="label" htmlFor="emaily">Email</label>
              <input className="input"type="email" name="emaily" id="emaily" />
            </div>
           <div className="name-add field">
              <label className="label" htmlFor="namey">Username</label>
            <input className="input"type="text" name="namey" id="namey" />
          </div>
          <div className="pass-add field">
            <label className="label" htmlFor="passy">password</label>
            <input className="input"type="password " name="passy" id="passy" />
          </div>
         <button className="button is-dark" type="submit"> SignUp</button>   
          </form>
        </div>
    </div>
    );
};

export default Signup;
