import React from "react";
import { Link } from "react-router-dom";

function Role() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4 card mt-5 p-5">
          <img
            className="img-fluid"
            src="https://syntecx.com/wp-content/uploads/2022/05/syntecx-logo-2.png"
            alt=""
          />
          <button type="button" className="btn btn-secondary mt-5 ">
            <Link className="signin " to="/home">
              User
            </Link>
          </button>
          <h3 className="text-center my-3 ">or</h3>
          <button type="button" class="btn btn-secondary">
            <Link className="signin" to="/adminsetup">
              Admin
            </Link>
          </button>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Role;
