import React from "react";
const Car = (car_values) => {
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
            <footer className="card-footer">
              <a href="#" className="card-footer-item">
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
