import React from "react";
import Edit from "./edit";

const Car = (car_values) => {
  const [edit, setEdit] = React.useState(false);
  return (
    <>
      <div
        className="column is-4"
        style={{
          border: "1px solid blue",
          borderRadius: "10px",
          margin: "10px",
        }}
      >
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://sc01.alicdn.com/kf/HTB19KEOKpXXXXaGXXXXq6xXFXXXI.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div clclassNameass="media">
              <div className="media-content">
                <p className="title is-4">{car_values.brand}</p>
                <p className="subtitle is-6">{car_values.owner}</p>
              </div>
            </div>

            <div className="content">
              Car Color is {car_values.color}
              <br />
            </div>
            {/*  */}
            <div class={`modal ${edit ? "is-active" : ""}`}>
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title"></p>
                  <button
                    class="delete"
                    aria-label="close"
                    onClick={() => {
                      setEdit(false);
                    }}
                  ></button>
                </header>
                <section class="modal-card-body">
                  <Edit id={car_values._id} setEdit={setEdit()}/>
                </section>
                {/* <footer class="modal-card-foot">
                <button class="button is-success">Save changes</button>
                <button class="button">Cancel</button>
              </footer> */}
              </div>
            </div>

            {/*  */}

            <footer className="card-footer">
              <a
                href="#"
                className="card-footer-item"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </a>
              <a href="#" className="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Car;
