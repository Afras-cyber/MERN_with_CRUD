import React, { useEffect } from "react";
import useForm from "./useForm";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const Login = () => {
  const [values, handle] = useForm({ emaily: "", passy: "" });

  // useEffect(()=>{
  //   axois.post("http://localhost:2500/rout/create").then((res) => {
  //     console.log(res.data);
  //     setCar(res.data);
  //   });

  // },[])


  return (
    <div>
      <Link to="/signup">
        <button className="btn button is-dark" style={{ float: "right" }}>
          SigUP
        </button>
      </Link>
      <div className="signup-form is-mobile" style={{ margin: "10%" }}>
        <form action="">
          <h2 className="title">Login Up</h2>
          <div className="email-add field">
            <label className="label" htmlFor="emaily">
              Email
            </label>
            <input
              className="input"
              value={values.emaily}
              onChange={handle}
              type="email"
              name="emaily"
              id="emaily"
            />
          </div>
          <div className="pass-add field">
            <label className="label" htmlFor="passy">
              password
            </label>
            <input
              className="input"
              value={values.passy}
              onChange={handle}
              type="password "
              name="passy"
              id="passy"
            />
          </div>

          <Link to={"/"}>
            <button className="button is-warning">
              Login
            </button>
          </Link>
        </form>
        {console.log(values.emaily, values.passy)}
      </div>
    </div>
  );
};
export default Login;
