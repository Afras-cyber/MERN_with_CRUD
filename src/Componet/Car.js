import React from "react";
 const Car = () => {
  return (
    <>
    <div className="column is-4">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://sc01.alicdn.com/kf/HTB19KEOKpXXXXaGXXXXq6xXFXXXI.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">           
            <div class="media-content">
              <p class="title is-4">suzuki maruti</p>
              <p class="subtitle is-6">@RaviKumar</p>
            </div>
          </div>

          <div class="content">
            Car Color is Yellow;s
            <br />
           
          </div>
        </div>
      </div>

    </div>
    </>
  );
};
export default Car;