import React, { useEffect } from "react";
import useForm from "./useForm";
import axois from "axios";

const Add = (setCar, cars) => {
  const [values, handle] = useForm({
    brand: "",
    model: "",
    color: "",
    owner: "",
  });

  //   const setAddCar = () => {
  //     setCar([
  //       ...cars,
  //       {
  //         color: values.color,
  //         brand: values.brand,
  //         owner: values.owner,
  //         model: values.model,
  //       },
  //     ]);
  //   };
  const setAddCar = () => {
    const mkAddCar = {
      color: values.color,
      brand: values.brand,
      owner: values.owner,
      model: values.model,
    };
    axois
      .post("http://localhost:2500/rout/create", mkAddCar)
      .then(alert("data sent"));
  };

  return (
    <div className="add_car is-mobile">
      <h4 className="title">Add cars</h4>
      <div className="field">
        <label className="label">Brand</label>
        <input
          className="brand carInput input"
          name="brand"
          value={values.brand}
          onChange={handle}
          placeholder="viz"
        />
        <label className="label">Model</label>
        <input
          className="model carInput input"
          name="model"
          value={values.model}
          onChange={handle}
          placeholder="Suziki"
        />
        <label className="label">Color</label>
        <input
          className="color carInput input"
          name="color"
          value={values.color}
          onChange={handle}
          placeholder="blue"
        />
        <label className="label">Owner</label>
        <input
          className="owner carInput input"
          name="owner"
          value={values.owner}
          onChange={handle}
          placeholder="raj"
        />
      </div>
      <button className="button is-info" onClick={setAddCar}>
        Add Car
      </button>
    </div>
  );
};
export default Add;
